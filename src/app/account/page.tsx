import Image from "next/image";
import "./account.css";

const menuItems = [
  { icon: "/icons/person.png", label: "Account Details", active: true },
  { icon: "/icons/more.png", label: "Your Lists" },
  { icon: "/icons/gift.png", label: "Gift Card" },
  { icon: "/icons/cart.png", label: "Your Orders" },
  { icon: "/icons/geo.png", label: "Delivery Addresses" },
  { icon: "/icons/payment.png", label: "Payment Methods" },
  { icon: "/icons/question.png", label: "Digital Services" },
  { icon: "/icons/message.png", label: "Your Messages" },
];

export default function AccountPage() {
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

            <nav className="account-menu" aria-label="Account navigation">
              <ul className="account-menu-list">
                {menuItems.map((item) => (
                  <li
                    key={item.label}
                    className={`account-menu-item${item.active ? " is-active" : ""}`}
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={16}
                      height={16}
                      className="account-menu-icon"
                    />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
              <button className="account-delete" type="button">
                Delete Account
              </button>
            </nav>
          </aside>

          <section className="account-main">
            <h1 className="account-title">Account Details</h1>
            <div className="account-card">
              <form className="account-form" aria-label="Account details form">
                <div className="account-row">
                  <div className="account-field account-field-compact">
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" type="text" value="Peter" readOnly />
                  </div>
                  <div className="account-field account-field-compact">
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" type="text" value="Peter" readOnly />
                  </div>
                </div>

                <div className="account-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" value="LeiLeimai@gmail.com" readOnly />
                </div>

                <div className="account-field">
                  <label htmlFor="password">Password</label>
                  <input id="password" type="password" value="Password123" readOnly />
                </div>

                <div className="account-field">
                  <label htmlFor="phone">Phone number</label>
                  <div className="account-phone">
                    <span className="account-flag" aria-hidden="true">
                      <Image src="/icons/flag.png" alt="" width={16} height={12} />
                    </span>
                    <span className="account-code">+1</span>
                    <input id="phone" type="tel" value="976640278" readOnly />
                  </div>
                </div>

                <div className="account-field account-field-date">
                  <label htmlFor="dob">Date of Birth</label>
                  <div className="account-date">
                    <input id="dob" type="text" value="11/08/2000" readOnly />
                    <span className="account-date-icon" aria-hidden="true">
                      <Image src="/icons/calendar.png" alt="" width={16} height={16} />
                    </span>
                  </div>
                </div>

                <div className="account-actions">
                  <button className="account-save" type="button">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
