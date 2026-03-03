"use client"

import "../customServ.css"
import "../../../components/HomePage/HomePage.css"
import Footer from "@/components/Footer/Footer";
import { Header } from "@/widgets/header";

export default function international() {
    return (
        <div>
            <Header />
            <div className="div-for-icon-text-i">
                <div className="div-for-icon-i">
                    <i className="bi bi-globe icon-in-pages"></i>
                </div>
                International shopping
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div className="div-for-pick">
                    <span style={{marginBottom: "2vw"}}>Pick what you need help with</span>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
                        {[1, 2, 3, 4].map((_, index) => (
                            <div className="div-pick" key={index}>
                                Free shipping and other promotions <i className="bi bi-chevron-right"/>
                            </div>
                        ))}
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
            <Footer />
        </div>
    );
}