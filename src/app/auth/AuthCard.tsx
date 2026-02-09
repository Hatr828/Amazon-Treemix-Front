"use client";

import { AuthRequestError, login, register } from "@/infra/auth/authService";
import { useRouter } from "next/navigation";
import { type FormEvent, useId, useRef, useState } from "react";
import styles from "./auth.module.css";

type Mode = "login" | "signup";

export default function AuthCard() {
  const [mode, setMode] = useState<Mode>("login");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errorDetails, setErrorDetails] = useState<string[]>([]);
  const isSubmittingRef = useRef(false);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;
    setErrorMessage(null);
    setErrorDetails([]);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    try {
      if (!email || !password) {
        setErrorMessage("Email and password are required.");
        return;
      }
      if (mode === "login") {
        await login(email, password);
      } else {
        const firstName = String(formData.get("firstName") ?? "").trim();
        const lastName = String(formData.get("lastName") ?? "").trim();
        await register({ firstName, lastName, email, password });
      }
      router.push("/");
    } catch (error) {
      const parsed = parseAuthError(error);
      setErrorMessage(parsed.message);
      setErrorDetails(parsed.details);
    } finally {
      isSubmittingRef.current = false;
    }
  };

  return (
    <section className={styles.card} aria-label={mode === "login" ? "Log in" : "Sign up"}>
      <div className={styles.tabs}>
        <button
          type="button"
          className={`${styles.tab} ${mode === "login" ? styles.active : ""}`}
          onClick={() => {
            setMode("login");
            setErrorMessage(null);
            setErrorDetails([]);
          }}
        >
          Log in
        </button>
        <button
          type="button"
          className={`${styles.tab} ${mode === "signup" ? styles.active : ""}`}
          onClick={() => {
            setMode("signup");
            setErrorMessage(null);
            setErrorDetails([]);
          }}
        >
          Sign up
        </button>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        {mode === "signup" && (
          <>
            <Field label="First name" name="firstName" autoComplete="given-name" />
            <Field label="Last name" name="lastName" autoComplete="family-name" />
            <Field label="Email address" name="email" type="email" autoComplete="email" />
          </>
        )}

        {mode === "login" && (
          <Field label="E-mail" name="email" type="email" autoComplete="email" />
        )}

        <PasswordField
          label="Password"
          name="password"
          autoComplete={mode === "login" ? "current-password" : "new-password"}
        />

        {errorMessage && (
          <div className={styles.errorBox} role="alert">
            <p className={styles.errorTitle}>{errorMessage}</p>
            {errorDetails.length > 0 && (
              <ul className={styles.errorList}>
                {errorDetails.map((detail) => (
                  <li key={detail} className={styles.errorItem}>
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {mode === "login" && (
          <div className={styles.forgotRow}>
            <a className={styles.forgot} href="#">
              Forgot your password?
            </a>
          </div>
        )}

        <label className={styles.checkRow}>
          <input type="checkbox" defaultChecked={mode === "signup"} />
          <span>I agree with Terms and Service and Privacy Policy</span>
        </label>

        <button className={styles.primaryBtn} type="submit">
          {mode === "login" ? "Log in" : "Sign up"}
        </button>
      </form>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
};

function Field({ label, name, type = "text", autoComplete }: FieldProps) {
  const id = useId();

  return (
    <div className={styles.fField}>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className={styles.fInput}
        placeholder=" "
      />
      <label className={styles.fLabel} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

function PasswordField({ label, name, autoComplete }: Omit<FieldProps, "type">) {
  const id = useId();

  return (
    <div className={styles.fField}>
      <input
        id={id}
        name={name}
        type="password"
        autoComplete={autoComplete}
        className={styles.fInput}
        placeholder=" "
      />
      <label className={styles.fLabel} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

type ParsedAuthError = {
  message: string;
  details: string[];
};

function parseAuthError(error: unknown): ParsedAuthError {
  if (error instanceof AuthRequestError) {
    return extractErrorFromPayload(error.payload);
  }
  if (error instanceof Error) {
    return { message: error.message || "Request failed.", details: [] };
  }
  return { message: "Request failed.", details: [] };
}

function extractErrorFromPayload(payload: unknown): ParsedAuthError {
  const fallback: ParsedAuthError = { message: "Request failed.", details: [] };
  if (typeof payload === "string" && payload.trim()) {
    return { message: payload, details: [] };
  }
  if (!isRecord(payload)) {
    return fallback;
  }

  let message = typeof payload.error === "string" ? payload.error : fallback.message;
  const details: string[] = [];

  const innerDetails = payload.details;
  if (isRecord(innerDetails)) {
    if (typeof innerDetails.message === "string") {
      message = innerDetails.message;
    }
    const errors = innerDetails.errors;
    if (isRecord(errors)) {
      for (const value of Object.values(errors)) {
        if (Array.isArray(value)) {
          for (const item of value) {
            if (typeof item === "string") {
              details.push(item);
            }
          }
        } else if (typeof value === "string") {
          details.push(value);
        }
      }
    }
  }

  return { message, details };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
