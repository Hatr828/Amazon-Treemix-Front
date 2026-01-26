import React, { useState, useRef, useEffect } from 'react';
import '@/widgets/header/css/header.css';
import '@/widgets/header/css/dropdown.css';

export const AccountDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="accountWrapper" ref={dropdownRef} style={{ position: 'relative' }}>
            <button
                className="headerButton"
                onClick={() => setIsOpen(!isOpen)}
                type="button"
            >
                <div className="headerText">
                    <span>Hello, Sign in</span>
                    <span>Account</span>
                </div>
            </button>

            {isOpen && (
                <div className="accDropdownMenu">
                    <div className="accDropdownArrow" />

                    <div className="accDropdownContent">
                        <div className="accAuthSection">
                            <button className="accSigninBtn">Sign in</button>
                            <p className="accNewCustomer">
                                New customer? <a href="#">Start here.</a>
                            </p>
                        </div>

                        <div className="accColumns">
                            <div className="accColumn">
                                <h3>Your Lists</h3>
                                <ul>
                                    <li>Create a List</li>
                                    <li>Find a List or Registry</li>
                                    <li>TreemiixSmile Charity Lists</li>
                                </ul>
                            </div>

                            <div className="accDivider" />

                            <div className="accColumn">
                                <h3>Your Account</h3>
                                <ul>
                                    <li>Account</li>
                                    <li>Orders</li>
                                    <li>Recommendations</li>
                                    <li>Browsing History</li>
                                    <li>Watchlist</li>
                                    <li>Video Purchases & Rentals</li>
                                    <li>Kindle Unlimited</li>
                                    <li>Content & Devices</li>
                                    <li>Subscribe & Save Items</li>
                                    <li>Memberships & Subscriptions</li>
                                    <li>Music Library</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};