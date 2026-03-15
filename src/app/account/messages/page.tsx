export default function MessagesPage() {
  return (
    <section className="account-main account-main-messages">
      <h1 className="account-title account-title-messages">Your Messages</h1>

      <div className="account-card account-card-messages">
        <div className="account-message-tabs" role="tablist" aria-label="Message categories">
          <button
            type="button"
            role="tab"
            aria-selected="true"
            className="account-message-tab is-active"
          >
            All Messages
          </button>

          <span className="account-message-divider" aria-hidden="true" />

          <button type="button" role="tab" aria-selected="false" className="account-message-tab">
            Buyer/Seller Messages
          </button>
        </div>

        <p className="account-message-empty">No messages found</p>
      </div>
    </section>
  );
}
