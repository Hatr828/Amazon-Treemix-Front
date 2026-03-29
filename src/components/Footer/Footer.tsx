"use client";

import styles from "./Footer.module.css";

type FooterLink = { label: string; href: string };
type FooterColumn = { title: string; links: FooterLink[] };
type MobileFooterLink = FooterLink & { fullRow?: boolean };

const columns: FooterColumn[] = [
  {
    title: "Get to Know Us",
    links: [
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "About Treemix", href: "#" },
      { label: "Investor Relations", href: "#" },
      { label: "Treemix Devices", href: "#" },
    ],
  },
  {
    title: "Make Money with Us",
    links: [
      { label: "Sell products on Treemix", href: "#" },
      { label: "Sell apps on Treemix", href: "#" },
      { label: "Become an Affiliate", href: "#" },
      { label: "Advertise Your Products", href: "#" },
      { label: "See More Make Money with Us", href: "#" },
    ],
  },
  {
    title: "Treemix Payment Products",
    links: [
      { label: "Shop with Points", href: "#" },
      { label: "Reload Your Balance", href: "#" },
      { label: "Treemix Currency Converter", href: "#" },
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      { label: "Treemix and COVID-19", href: "#" },
      { label: "Your Account", href: "#" },
      { label: "Your Orders", href: "#" },
      { label: "Shipping Rates & Policies", href: "#" },
      { label: "Returns & Replacements", href: "#" },
      { label: "Manage Your Content and Devices", href: "#" },
      { label: "Treemix Assistant", href: "#" },
      { label: "Help", href: "#" },
    ],
  },
];

const mobileLinks: MobileFooterLink[] = [
  { label: "Your Lists", href: "#" },
  { label: "Your Orders", href: "#" },
  { label: "Find a Gift", href: "#" },
  { label: "Gift Cards & Registry", href: "#" },
  { label: "Browsing History", href: "#" },
  { label: "Your Account", href: "#" },
  { label: "Returns", href: "#" },
  { label: "Sell products on Treemix", href: "#" },
  { label: "Customer Service", href: "#", fullRow: true },
];

export default function Footer() {
  const onBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.backToTop}>
        <button type="button" className={styles.backToTopBtn} onClick={onBackToTop}>
          Back to top
        </button>
      </div>

      <nav className={styles.nav} aria-label="Footer">
        <div className={styles.inner}>
          <div className={styles.grid}>
            {columns.map((col) => (
              <section key={col.title} className={styles.col}>
                <h3 className={styles.title}>{col.title}</h3>
                <ul className={styles.list}>
                  {col.links.map((l) => (
                    <li key={l.label} className={styles.item}>
                      <a className={styles.link} href={l.href}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <ul className={styles.mobileLinks} aria-label="Footer quick links">
            {mobileLinks.map((link) => {
              const itemClassName = link.fullRow
                ? `${styles.mobileItem} ${styles.mobileItemFull}`
                : styles.mobileItem;

              return (
                <li key={link.label} className={itemClassName}>
                  <a className={styles.mobileLink} href={link.href}>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </footer>
  );
}
