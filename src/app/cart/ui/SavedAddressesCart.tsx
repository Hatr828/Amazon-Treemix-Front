'use client';
import '@/app/cart/css/saved_addresses.css';

export default function SavedAddressesCart({ addresses, selected, onSelect, onEdit, onAdd }: any) {
    return (
        <div className="address-wrapper">
            <div className="address-container">
                <h2 className="address-title">Your address</h2>

                <div className="address-list">
                    {addresses.map((item: any, index: number) => (
                        <div
                            key={index}
                            className={`address-card ${selected === index ? 'active' : ''}`}
                            onClick={() => onSelect(index)}
                        >
                            <div className="address-left">
                                <label className="address-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={selected === index}
                                        onChange={() => onSelect(index)}
                                    />
                                    <span className="checkmark"></span>
                                </label>

                                <div className="address-info">
                                    <div>{item.name}</div>
                                    <div>{item.street}</div>
                                    <div>{item.city}</div>
                                </div>
                            </div>

                            <button className="address-edit" onClick={(e) => { e.stopPropagation(); onEdit(item, index); }}>
                                Edit
                            </button>
                        </div>
                    ))}
                </div>

                <button className="address-add" onClick={onAdd}>
                    <span>Add Address</span>
                </button>
            </div>
        </div>
    );
}