"use client"

import "../customServ.css"
import "../../../components/HomePage/HomePage.css"
import "../../../components/HomePage/mobHomePage.css";
import "../mobPageServ.css"
import SupportTree from "../SupportTree"
import { loginTree } from "../data"

export default function login() {
    return (
        <div>
            <div className="div-for-icon-text-i">
                <div className="div-for-icon-i">
                    <i className="bi bi-person icon icon-in-pages"></i>
                </div>
                Login, address
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <SupportTree tree={loginTree} />
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