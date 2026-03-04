"use client";

import { useState, useEffect } from "react"
import Link from "next/link"
import "./customService.css"
import "../HomePage/HomePage.css"

import {
    internationalTree,
    paymentTree,
    loginTree,
    securityTree,
    giftTree,
    SupportNode
} from "@/app/customService/data"

function searchTree(node: SupportNode, query: string): SupportNode[] {
    let results: SupportNode[] = []

    if (node.title.toLowerCase().includes(query.toLowerCase())) {
        results.push(node)
    }

    if (node.children) {
        node.children.forEach(child => {
            results.push(...searchTree(child, query))
        })
    }

    return results
}


export default function CustomService() {

    const [search, setSearch] = useState("")
    const [results, setResults] = useState<SupportNode[]>([])

    const allTrees = [
        internationalTree,
        paymentTree,
        loginTree,
        securityTree,
        giftTree
    ]

    useEffect(() => {
        if (!search.trim()) {
            setResults([])
            return
        }

        let found: SupportNode[] = []

        allTrees.forEach(tree => {
            found.push(...searchTree(tree, search))
        })

        setResults(found)
    }, [search])

    const categories = [
        { id: "delivery", title: "A delivery, order or return", icon: "bi bi-cart icon" },
        { id: "international", title: "International shopping", icon: "bi bi-globe icon" },
        { id: "payment", title: "Payment", icon: "bi bi-credit-card icon" },
        { id: "login", title: "Login, address", icon: "bi bi-person icon" },
        { id: "security", title: "Security & privacy", icon: "bi bi-shield-lock icon" },
        { id: "gift", title: "Charges or gift cards", icon: "bi bi-gift icon" },
        { id: "prime", title: "Prime", icon: "bi bi-star icon" },
        { id: "membership", title: "Memberships, subscriptions or communications", icon: "bi bi-bookmark icon" },
        { id: "other", title: "Something else", icon: "bi bi-question-circle icon" }
    ]

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
                        {categories.map((category) => (
                            <Link key={category.id} href={`/customService/${category.id}`} style={{ textDecoration: "none"}}>
                                <div key={category.id} className="block-service">
                                    <i className={category.icon}></i>
                                    {category.title}
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="div-description-text">
                        Search the help library
                    </div>
                    <div style={{display: "flex", position: "relative", width: "fit-content", flexDirection:"column"}}>
                        <input className="input-service" value={search} onChange={(e) => setSearch(e.target.value)}/>
                        <svg className="searchIconn" viewBox="4 2 23.7 23.7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.2635 22.526C16.2447 22.5256 18.1762 21.9485 19.8261 20.8748C20.2496 20.5992 20.8147 20.629 21.172 20.9863L25.4788 25.293C25.8694 25.6835 26.5025 25.6834 26.893 25.293L27.2928 24.8931C27.6834 24.5026 27.6834 23.8694 27.2928 23.4789L22.9863 19.1725C22.6288 18.8152 22.5991 18.25 22.8749 17.8264C23.9492 16.1763 24.5266 14.2445 24.5271 12.263C24.5271 6.60423 19.9226 2 14.2635 2C8.60448 2 4 6.60423 4 12.263C4 17.9217 8.60448 22.526 14.2635 22.526ZM14.2635 4.56575C18.5088 4.56575 21.9612 8.01796 21.9612 12.263C21.9612 16.508 18.5088 19.9602 14.2635 19.9602C10.0183 19.9602 6.56588 16.508 6.56588 12.263C6.56588 8.01796 10.0183 4.56575 14.2635 4.56575Z" fill="#828282" />
                        </svg>
                        {results.length > 0 && (
                            <div className="search-results">
                                {results.map(item => (
                                    <div key={item.id} className="search-item">
                                        <div style={{ fontWeight: 600 }}>
                                            {item.title}
                                        </div>
                                        {item.answer && (
                                            <div style={{ fontSize: "14px", opacity: 0.7 }}>
                                                {item.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
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