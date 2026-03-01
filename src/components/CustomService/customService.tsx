"use client";

import "./customService.css"
import "../HomePage/HomePage.css"

export default function CustomService() {
    return (
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div>
                    <div className="div-dear-text">We’re here to help, Name</div>
                    <span style={{fontSize: "0.938vw"}}>We’ll walk you through fixing most things here, or connect you to someone if you need more help.</span>
                    <div className="div-description-text">
                        What would you like help with today? You can quickly take care of most things here, or connect with us when needed.
                    </div>
                    <div className="div-for-icon-service">

                    </div>
                    <div className="div-description-text">
                        Search the help library
                    </div>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="div-recommendations">
                    See personalized recommendations
                    <button className="button-recommendations">Sign in</button>
                    <div className="div-customer-text">
                        New Customer?
                        <div className="div-start-here">
                            Start here.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}