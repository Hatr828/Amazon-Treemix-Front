import Image from "next/image";
import type { ReactNode } from "react";
import AccountMenu from "./AccountMenu";
import "./account.css";

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <main className="account-page">
      <div className="account-scale">
        <div className="account-shell">
          <aside className="account-side">
            <section className="account-profile">
              <div className="account-avatar" aria-hidden="true">
                <Image src="/icons/person.png" alt="" width={22} height={22} />
              </div>
              <div className="account-profile-text">
                <p className="account-profile-name">Peter Peter</p>
                <p className="account-profile-email">some@gmail.com</p>
              </div>
            </section>

            <AccountMenu />
          </aside>

          {children}
        </div>
      </div>
    </main>
  );
}
