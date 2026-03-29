'use client';
import '@/app/cart/css/saved_payment_method.css';

export default function PaymentListCart({ cards, selected, onSelect, onAdd }: any) {
    return (
        <div className="paymentlist-wrapper">
            <div className="paymentlist-container">
                <h2 className="paymentlist-title">Your payment methods</h2>
                <div className="paymentlist-list">
                    {cards.map((card: any, index: number) => (
                        <div
                            key={index}
                            className={`paymentlist-card ${selected === index ? 'active' : ''}`}
                            onClick={() => onSelect(index)}
                        >
                            <div className="paymentlist-left">
                                <label className="paymentlist-checkbox">
                                    <input
                                        type="radio"
                                        name="card"
                                        checked={selected === index}
                                        onChange={() => onSelect(index)}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                                <div className="paymentlist-info">
                                    <div>{card.name}</div>
                                    <div>{card.type}</div>
                                    <div>{card.exp}</div>
                                </div>
                            </div>
                            <button className="paymentlist-edit">Edit</button>
                        </div>
                    ))}
                </div>
                <button className="paymentlist-add" onClick={onAdd}>
                    Add Payment Method
                </button>
            </div>
        </div>
    );
}