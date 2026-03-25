"use client"

import "../customServ.css"
import "../../../components/HomePage/HomePage.css"
import "../../../components/HomePage/mobHomePage.css";
import "../mobPageServ.css"
import SupportTree from "../SupportTree"
import { membershipsTree } from "../data"

export default function membership() {
    return (
        <div>
            <div className="div-for-icon-text-i">
                <div className="div-for-icon-i">
                    <i className="bi bi-bookmark icon-in-pages"></i>
                </div>
                Memberships, subscriptions or communications
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <SupportTree tree={membershipsTree} />
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