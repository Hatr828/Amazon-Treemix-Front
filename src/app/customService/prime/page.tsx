"use client"

import "../customServ.css"
import "../../../components/HomePage/HomePage.css"
import SupportTree from "../SupportTree"
import { internationalTree } from "../data"

export default function prime() {
    return (
        <div>
            <div className="div-for-icon-text-i">
                <div className="div-for-icon-i">
                    <i className="bi bi-star icon-in-pages"></i>
                </div>
                Prime
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <SupportTree tree={internationalTree} />
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