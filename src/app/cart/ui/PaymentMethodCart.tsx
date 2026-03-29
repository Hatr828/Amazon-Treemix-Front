'use client';
import '@/app/cart/css/payment_method.css';

export default function PaymentMethod({ onSave }: any) {
    // Эмуляция данных карты для теста
    const handleAddMockCard = () => {
        onSave({
            name: 'Peter Marzo',
            type: 'Credit Card Visa (7777)',
            exp: 'Exp 12/2026'
        });
    };

    return (
        <div className="payment-container">
            <h2 className="payment-title">Select a payment method</h2>
            <div className="payment-hint">
                Enter how you'd like to pay below, and we'll save it as an option.
            </div>

            <div className="payment-card">
                <h3>Add a Payment Method</h3>
                <div className="payment-section">
                    <div className="payment-button-section">
                        <div className="payment-subtitle">Credit or debit cards</div>
                        <div className="payment-text">Amazon accepts major credit and debit cards.</div>

                        <button className="payment-button" onClick={handleAddMockCard}>
                            Add a credit or debit card
                        </button>
                    </div>

                        <div className="payment-icons">
                            <div className="payment-icons_section">
                                <div className="payment-icon-slot">
                                    <img src="./cart/visa.svg" alt=""/>
                                </div>
                                <div className="payment-icon-slot">
                                    <img src="./cart/mastercard.svg" alt=""/>
                                </div>
                                <div className="payment-icon-slot">
                                    <img src="./cart/discover.svg" alt=""/>
                                </div>
                                <div className="payment-icon-slot">
                                    <img src="./cart/union_pay.svg" alt=""/>
                                </div>
                            </div>

                            <div className="payment-icons_section">
                                <div className="payment-icon-slot">
                                    <img src="./cart/american_axpress.svg" alt=""/>
                                </div>
                                <div className="payment-icon-slot">
                                    <img src="./cart/nh.svg" alt=""/>
                                </div>
                                <div className="payment-icon-slot">
                                    <img src="./cart/SHINHANCARD.svg" alt=""/>
                                </div>
                                <div className="payment-icon-slot">
                                    <img src="./cart/ABC_BANK.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="payment-block">
                        <div className="payment-subtitle">
                            Gift Cards, Vouchers & Promotional Codes
                        </div>
                        <div className="payment-link">
                            › Amazon accepts major credit and debit cards.
                        </div>
                    </div>

                    <div className="payment-block">
                        <div className="payment-subtitle">
                            TreeMiix.com Store Card
                        </div>
                        <div className="payment-text">
                            Access to exclusive financing offers. No annual fee. Zero fraud liability.
                        </div>
                        <div className="payment-link small">Learn more</div>
                    </div>

                    <div className="payment-block">
                        <div className="payment-subtitle">
                            Personal Checking Accounts
                        </div>
                        <div className="payment-text">
                            Use your US based personal checking account.
                        </div>
                        <div className="payment-link small">Learn more</div>

                        <button className="payment-button bottom">
                            Add a personal checking account
                        </button>
                    </div>
                </div>
        </div>
    );
}