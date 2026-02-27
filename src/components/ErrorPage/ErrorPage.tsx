"use client";

import { useRouter } from "next/navigation";
import "./ErrorPage.css"
import "../HomePage/HomePage.css"

export function ErrorPage() {

    const router = useRouter();

    return (
        <div className="div-for-ErrorPage">
            <div className="div-for-errorText">
                SORRY
                <div className="div-for-down-errorText">
                    something went wrong on our end
                </div>
            </div>
            <div className="div-buttons-errorPage">
                <button className="button-homePage" onClick={() => router.push("/")}>
                    Home page
                </button>
                <button className="button-tryAgain">
                    Try again
                </button>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="div-recommendations">
                    See personalized recommendations
                    <button className="button-recommendations">Sign in</button>
                    <div className="div-customer-text">
                        New Customer?
                        <div className="div-start-here">
                            Start here.
                        </div>ц
                    </div>
                </div>
            </div>
        </div>
    )
}