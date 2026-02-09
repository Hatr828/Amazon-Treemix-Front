const UNSET = "";

export function getEnv(name: string): string {
  const value = process.env[name] ?? UNSET;
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export function getEnvNumber(name: string): number {
  const raw = getEnv(name);
  const value = Number(raw);
  if (!Number.isFinite(value)) {
    throw new Error(`Environment variable ${name} must be a number.`);
  }
  return value;
}

export function isEnvEnabled(name: string): boolean {
  return process.env[name] === "1";
}
