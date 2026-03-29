import Image from "next/image";

export default function AccountPage() {
  return (
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
  );
}
