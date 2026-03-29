import '@/app/cart/css/shipping_info.css';

export default function ShippingInfoCart() {
    return (
            <div className="shipping-container">

                <h2 className="shipping-title">Shipping to Chicago</h2>

                <div className="shipping-block">
                    <p className="shipping-subtitle">Pickup</p>
                    <p className="shipping-text">Pick up from post office</p>
                    <p className="shipping-text">st. Linaem 45</p>
                    <p className="shipping-text">Pick up April 14 at 13:00 - 18:00</p>
                </div>

                <div className="shipping-block">
                    <p className="shipping-subtitle">Recipient</p>
                    <p className="shipping-text">Mark Daniels</p>
                </div>

                <div className="shipping-block">
                    <p className="shipping-subtitle">Payment</p>
                    <p className="shipping-text">Order has been paid</p>
                </div>

                <div className="shipping-block">
                    <p className="shipping-subtitle">Cost of delivery</p>
                    <p className="shipping-text">Free</p>
                </div>

            </div>
    )
}