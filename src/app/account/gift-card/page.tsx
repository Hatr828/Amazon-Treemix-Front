export default function GiftCardPage() {
  return (
    <section className="account-main account-main-gift">
      <h1 className="account-title">Gift Card</h1>

      <div className="account-card account-card-gift">
        <div className="account-gift-balance-row">
          <p className="account-gift-balance-label">Your Gift Card Balance:</p>
          <p className="account-gift-balance-value">$250</p>
        </div>

        <div className="account-gift-actions-top">
          <button type="button" className="account-gift-button account-gift-button-primary">
            Reload Your Balance
          </button>
          <button type="button" className="account-gift-button account-gift-button-muted">
            Redeem a Gift Card
          </button>
        </div>

        <p className="account-gift-subtitle">Your Gift Card Balance:</p>
        <p className="account-gift-text">Auto-Reload on a schedule or when your balance gets low.</p>
        <button type="button" className="account-gift-link">
          Set up Auto-Reload
        </button>
        
        <div className="account-gift-actions-bottom">
          <button type="button" className="account-gift-save">
            Save
          </button>
        </div>
      </div>
    </section>
  );
}
