'use client';
import { useState, useEffect } from 'react';
import '@/app/cart/css/shipping_payment.css';

export default function AddressFormCart({ onSave, initialData }: any) {
    const [name, setName] = useState(initialData?.name || '');
    const [phone, setPhone] = useState(initialData?.phone || '');
    const [street, setStreet] = useState(initialData?.street || '');
    const [apt, setApt] = useState(initialData?.apt || '');
    const [city, setCity] = useState(initialData?.city || '');
    const [state, setState] = useState(initialData?.state || '');
    const [zip, setZip] = useState(initialData?.zip || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !street.trim() || !city.trim() || !zip.trim()) {
            alert("Please fill in all required fields (Name, Address, City, ZIP).");
            return;
        }

        onSave({ name, phone, street, apt, city, state, zip });
    };

    return (
        <>
            <div className="address-wrapper">
                <h3>Shipping&Payment</h3>
                <p>Please enter a shipping address for this order. Please also indicate whether your billing address is the same as the shipping address entered. When finished, click the "Continue" button.  Or, if you're sending items to more than one address, click the "Add another address" button to enter additional addresses.</p>
                <div className="address-container">
                    <h2 className="address-title">{initialData ? 'Edit address' : 'Add a new address'}</h2>

                    <form className="address-form" onSubmit={handleSubmit}>
                        <div className="address-group">
                            <label>Country | Region</label>
                            <div className="address-select">
                                United States <span>▾</span>
                            </div>
                        </div>

                        <div className="address-group">
                            <label>Full name (First and Last name)</label>
                            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                        </div>

                        <div className="address-group">
                            <label>Phone number</label>
                            <input type="text" placeholder="Number" value={phone} onChange={e => setPhone(e.target.value)} />
                        </div>

                        <div className="address-group">
                            <label>Address</label>
                            <input type="text" placeholder="Street address or P.O. Box." value={street} onChange={e => setStreet(e.target.value)} />
                            <input type="text" placeholder="Apt, suite, unit, building, floor, etc." value={apt} onChange={e => setApt(e.target.value)} />
                        </div>

                        <div className="address-row">
                            <div className="address-group small">
                                <label>City</label>
                                <input type="text" value={city} onChange={e => setCity(e.target.value)} />
                            </div>

                            <div className="address-group small">
                                <label>States</label>
                                <input type="text" value={state} onChange={e => setState(e.target.value)} />
                            </div>

                            <div className="address-group small">
                                <label>ZIP Code</label>
                                <input type="text" value={zip} onChange={e => setZip(e.target.value)} />
                            </div>
                        </div>

                        <div className="address-checkbox">
                            <input type="checkbox" defaultChecked />
                            <label>Make this my default address</label>
                        </div>

                        <div className="address-subtitle">
                            Delivery instructions (optional)
                        </div>

                        <div className="address-link">
                            › Add preferences, notes, access codes and more
                        </div>

                        <button className="address-button" type="submit">
                            <span>{initialData ? 'Save Changes' : 'Use this address'}</span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}