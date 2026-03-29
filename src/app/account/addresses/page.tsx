export default function AddressesPage() {
  return (
    <section className="account-main account-main-empty">
      <h1 className="account-title">Delivery Addresses</h1>

      <div className="account-card account-card-empty">
        <p className="account-empty-text">
          You currently don&apos;t have any saved delivery addresses. Add an address here to be
          prefilled for quicker checkout.
        </p>

        <div className="account-empty-actions">
          <button type="button" className="account-empty-button">
            Add Address
          </button>
        </div>
      </div>
    </section>
  );
}
