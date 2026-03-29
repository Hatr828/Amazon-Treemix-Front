export default function PaymentMethodsPage() {
  return (
    <section className="account-main account-main-empty">
      <h1 className="account-title">Payment Methods</h1>

      <div className="account-card account-card-empty">
        <p className="account-empty-text">
          You currently don&apos;t have any saved payment methods. Add a method here to be prefilled
          for quicker checkout.
        </p>

        <div className="account-empty-actions">
          <button type="button" className="account-empty-button">
            Add Payment Methods
          </button>
        </div>
      </div>
    </section>
  );
}
