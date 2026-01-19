"use client";

import { useId, useState } from "react";
import styles from "./auth.module.css";

type Mode = "login" | "signup";

export default function AuthCard() {
  const [mode, setMode] = useState<Mode>("login");

  return (
    <section className={styles.card} aria-label={mode === "login" ? "Log in" : "Sign up"}>
      <div className={styles.tabs}>
        <button
          type="button"
          className={`${styles.tab} ${mode === "login" ? styles.active : ""}`}
          onClick={() => setMode("login")}
        >
          Log in
        </button>
        <button
          type="button"
          className={`${styles.tab} ${mode === "signup" ? styles.active : ""}`}
          onClick={() => setMode("signup")}
        >
          Sign up
        </button>
      </div>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        {mode === "signup" && (
          <>
            <Field label="First name" />
            <Field label="Last name" />
            <Field label="Email address" />
          </>
        )}

        {mode === "login" && <Field label="E-mail" />}

        <PasswordField label="Password" />

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

function Field({ label }: { label: string }) {
  const id = useId();

  return (
    <div className={styles.fField}>
      <input id={id} className={styles.fInput} placeholder=" " />
      <label className={styles.fLabel} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

function PasswordField({ label }: { label: string }) {
  const id = useId();

  return (
    <div className={styles.fField}>
      <input id={id} className={styles.fInput} type="password" placeholder=" " />
      <label className={styles.fLabel} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
