import '@/app/cart/css/thankyou.css';

export default function ThankYouPageCart() {
    return (
        <div className="thankyou-page">
<div className="thankyou-container">
            <div className="thankyou-content">
                <h1 className="thankyou-title">Thank you for your order</h1>

                <div className="thankyou-buttons">
                    <button className="btn-primary">My Orders</button>
                    <button className="btn-secondary">Continue shopping</button>
                </div>
            </div>

            <div className="plants-row">
                <div className="plant left">
                    <img src="./cart/left_plants.svg" alt="plants"/>
                </div>

                <div className="plant center">
                    <img src="./cart/right_plants1.svg" alt="plants"/>
                </div>

                <div className="plant right">
                    <img src="./cart/right_plants2.svg" alt="plants"/>
                </div>
            </div>
</div>
        </div>
    )
}