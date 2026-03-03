"use client";

import "../customServ.css"
import "../../../components/HomePage/HomePage.css"
import Footer from "@/components/Footer/Footer";
import { Header } from "@/widgets/header";

export default function delivery() {
  return (
    <div>
      <Header />
        <div className="div-for-icon-text-i">
            <div className="div-for-icon-i">
                <i className="bi bi-cart icon-in-pages"></i>
            </div>
            A delivery, order or return
        </div>
        <div className="div-for-search-text">
            Which item do you need help with?
            <div style={{display: "flex", position: "relative", width: "fit-content"}}>
                <input className="input-delivery" />
                <svg className="searchIconn" viewBox="4 2 23.7 23.7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2635 22.526C16.2447 22.5256 18.1762 21.9485 19.8261 20.8748C20.2496 20.5992 20.8147 20.629 21.172 20.9863L25.4788 25.293C25.8694 25.6835 26.5025 25.6834 26.893 25.293L27.2928 24.8931C27.6834 24.5026 27.6834 23.8694 27.2928 23.4789L22.9863 19.1725C22.6288 18.8152 22.5991 18.25 22.8749 17.8264C23.9492 16.1763 24.5266 14.2445 24.5271 12.263C24.5271 6.60423 19.9226 2 14.2635 2C8.60448 2 4 6.60423 4 12.263C4 17.9217 8.60448 22.526 14.2635 22.526ZM14.2635 4.56575C18.5088 4.56575 21.9612 8.01796 21.9612 12.263C21.9612 16.508 18.5088 19.9602 14.2635 19.9602C10.0183 19.9602 6.56588 16.508 6.56588 12.263C6.56588 8.01796 10.0183 4.56575 14.2635 4.56575Z" fill="#828282" />
                </svg>
            </div>
        </div>
        <div style={{width: "100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <div style={{display:"flex", alignItems:"center", flexDirection: "column", margin: "6vw 0"}}>
                <span style={{fontSize: "1.302vw", fontWeight: "500"}}>
                    Looking for something else? Try another search. 
                </span>
                <span className="text-looking-div">
                    You can search by product title, order number, date, department, recipient, or address. If you don’t see what you’re looking for, 
                    <span className="div-visit-contact"> contact us.</span>
                </span>
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
      <Footer />
    </div>
  );
}