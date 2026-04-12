import styles from "./sell.module.css";

const benefits = [
  "Get 5% back on your first $1,000,000 in branded sales",
  "Try FBA with free inbound shipping, storage, removals, and returns",
  "Get $200 credit for Sponsored Products CPC ads",
  "Get a head start on brand protection, product reviews, and more",
];

const featureCards = [
  { icon: "bi bi-display", title: "Sell more" },
  { icon: "bi bi-airplane", title: "Scale with FBA" },
  { icon: "bi bi-cash-coin", title: "Make money" },
];

export default function SellPage() {
  return (
    <main className={styles.page}>
      <section className={styles.topStrip}>
        <div className={`${styles.container} ${styles.stripInner}`}>
          <h1 className={styles.stripTitle}>Sell on TreeMiix</h1>
          <button type="button" className={styles.primaryButton}>
            Sign up
          </button>
        </div>
      </section>

      <section className={styles.heroSection}>
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <h2 className={styles.heroTitle}>Become an TreeMiix seller</h2>
            <p className={styles.heroText}>
              More than half the units sold in our stores are from independent sellers.
            </p>
            <p className={styles.heroSubText}>$39.99 a month + selling fees</p>
            <button type="button" className={styles.primaryButton}>
              Sign up
            </button>
          </div>

          <div className={styles.heroArtWrap} aria-hidden="true">
            <svg className={styles.heroArt} viewBox="0 0 360 280" role="img">
              <title>Package with parachute</title>
              <path d="M64 76C84 38 126 16 180 16C234 16 276 38 296 76H64Z" fill="#ffb347" />
              <path d="M112 76C121 36 144 16 180 16C216 16 239 36 248 76H112Z" fill="#ff5f5f" />
              <path d="M152 76C154 36 163 16 180 16C197 16 206 36 208 76H152Z" fill="#ffcf5a" />
              <line x1="88" y1="76" x2="140" y2="150" stroke="#d6d9e3" strokeWidth="3" />
              <line x1="130" y1="76" x2="160" y2="150" stroke="#d6d9e3" strokeWidth="3" />
              <line x1="180" y1="76" x2="180" y2="150" stroke="#d6d9e3" strokeWidth="3" />
              <line x1="230" y1="76" x2="200" y2="150" stroke="#d6d9e3" strokeWidth="3" />
              <line x1="272" y1="76" x2="220" y2="150" stroke="#d6d9e3" strokeWidth="3" />
              <rect x="120" y="150" width="120" height="92" rx="6" fill="#d9a55e" />
              <rect x="120" y="185" width="120" height="14" fill="#f19965" />
              <rect x="174" y="150" width="12" height="92" fill="#f19965" />
              <rect x="193" y="193" width="31" height="21" rx="2" fill="#f8e2bd" />
              <rect x="198" y="198" width="21" height="3" fill="#9a7f60" />
              <rect x="198" y="204" width="18" height="3" fill="#9a7f60" />
              <rect x="198" y="210" width="13" height="3" fill="#9a7f60" />
            </svg>
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={`${styles.container} ${styles.benefitsInner}`}>
          <div className={styles.chartWrap} aria-hidden="true">
            <svg className={styles.chart} viewBox="0 0 260 220" role="img">
              <title>Sales chart</title>
              <defs>
                <pattern id="gridPattern" width="26" height="26" patternUnits="userSpaceOnUse">
                  <path d="M26 0H0V26" fill="none" stroke="#c6cbe1" strokeWidth="1" />
                </pattern>
              </defs>
              <rect x="20" y="16" width="210" height="170" fill="url(#gridPattern)" />
              <polyline
                points="40,160 70,132 100,145 126,108 174,94 206,42"
                fill="none"
                stroke="#f7a249"
                strokeWidth="8"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <polyline
                points="194,52 206,42 200,58"
                fill="none"
                stroke="#f7a249"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text x="20" y="8" fill="#8b93bf" fontSize="22" fontWeight="700">
                SALES
              </text>
            </svg>
          </div>

          <div className={styles.benefitsCopy}>
            <h3 className={styles.benefitsTitle}>Over $50K in potential benefits</h3>
            <p className={styles.benefitsText}>
              Ready to sell? Launch your brand today with a powerful playbook for new sellers and
              over $50K in potential benefits.
            </p>
            <ul className={styles.benefitsList}>
              {benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button type="button" className={styles.secondaryButton}>
              Learn more
            </button>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className={`${styles.container} ${styles.featuresGrid}`}>
          {featureCards.map((card) => (
            <article key={card.title} className={styles.featureCard}>
              <i className={`${card.icon} ${styles.featureIcon}`} aria-hidden="true" />
              <h4 className={styles.featureTitle}>{card.title}</h4>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`${styles.container} ${styles.ctaBox}`}>
          <div>
            <h5 className={styles.ctaTitle}>Start selling today</h5>
            <p className={styles.ctaText}>
              Put your products in front of the millions of customers who search TreeMiix.com every
              day.
            </p>
            <button type="button" className={styles.primaryButton}>
              Sign up
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
