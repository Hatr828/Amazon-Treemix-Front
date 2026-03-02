"use client";

import "./delivery.css"
import "../../../components/HomePage/HomePage.css"
import Footer from "@/components/Footer/Footer";
import { Header } from "@/widgets/header";

export default function delivery() {
  return (
    <div>
      <Header />
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