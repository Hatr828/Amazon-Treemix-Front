import styles from "./auth.module.css";
import AuthCard from "./AuthCard";

export default function AuthPage() {
  return (
    <main className={styles.page}>
      <div className={styles.bg} aria-hidden />
      <div className={styles.overlay} aria-hidden />
      <div className={styles.center}>
        <AuthCard />
      </div>
    </main>
  );
}
