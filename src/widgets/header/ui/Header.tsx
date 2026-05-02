'use client'

import '@/widgets/header/css/header.css'
import { SearchDropdown } from "@/widgets/header/ui/SearchDropDown"
import { AccountDropdown } from "@/widgets/header/ui/AccountDropDown"
import Image from 'next/image'
import { useCart } from "@/app/cart/misc/CartContext"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export function Header() {

    const BASE_URL = process.env.NEXT_PUBLIC_AMZN_API_BASE!;

    const [query, setQuery] = useState("")
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [showSuggestions, setShowSuggestions] = useState(false)

    const router = useRouter()
    const { items } = useCart()

    const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0)


    const handleCartClick = async (e: React.MouseEvent) => {
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/api/cart/get`, {
                method: "GET",
                credentials: "include",
            });

            if (res.status === 401) {
                router.push("/auth");
                return;
            }

            router.push("/cart");
        } catch (err) {
            console.error("Cart check failed", err);
            router.push("/cart");
        }
    };

    const normalizeQuery = (q: string) => {
        return q
            .toLowerCase()
            .replace(/[^\w\s]/g, "")
            .split(" ")
            .slice(0, 1)
            .join(" ")
    }


    useEffect(() => {

        if (!query.trim() || query.length < 2) {
            setSuggestions([])
            setShowSuggestions(false)
            return
        }

        const timeout = setTimeout(async () => {
            try {
                const normalized = normalizeQuery(query)
                const params = new URLSearchParams({ q: normalized })
                const res = await fetch(`/api/search/suggestions?${params.toString()}`)
                const data = await res.json()

                const result = (data.products ?? []).slice(0, 7);
                setSuggestions(result);
                setShowSuggestions(true);
            } catch (e) {
                console.error(e)
                setSuggestions([])
            }
        }, 300)

        return () => clearTimeout(timeout)
    }, [query])

    return (
        <header>
            <div className='headerTopSection'>

                <Link href="/">
                    <Image
                        className='headerIcon'
                        width={109}
                        height={62}
                        src='/header_main_logo.svg'
                        alt='main logo'
                    />
                </Link>

                <button className='geoMarker headerButton'>
                    <span className='headerIcon'>
                        <Image
                            src='/geo_marker.svg'
                            alt='geo marker'
                            width={28}
                            height={33}
                        />
                    </span>
                    <span className='headerText'>
                        <span>Deliver to</span>
                        <span>Ukraine</span>
                    </span>
                </button>

                <div className='searchForm'>
                    <SearchDropdown />

                    <form
                        className='form'
                        role="search"
                        onSubmit={(e) => {
                            e.preventDefault()
                            if (!query.trim()) return

                            const normalized = normalizeQuery(query)
                            const params = new URLSearchParams({ q: normalized })
                            router.push(`/search?${params.toString()}`)
                            setShowSuggestions(false)
                        }}
                    >
                        <input
                            className='formInput'
                            id="search"
                            name="q"
                            type="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onFocus={() => query && setShowSuggestions(true)}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                        />

                        <button className='formSubmitButton' type='submit'>
                            <Image
                                className='searchIcon'
                                style={{ height: '100%', width: 'auto', display: 'block' }}
                                src='/search_icon.svg'
                                height={24}
                                width={24}
                                alt='search'
                            />
                        </button>
                    </form>

                    {showSuggestions && suggestions.length > 0 && (
                        <div className="search-suggestions">
                            {suggestions.map((item: any) => (
                            <div
                                key={item.id}
                                className="search-suggestion-item"
                                onClick={() => {
    setShowSuggestions(false);

    const normalized = normalizeQuery(item.title)
    const params = new URLSearchParams({ q: normalized })

    router.push(`/search?${params.toString()}`)
}}
                            >
                                <img className='img-search' src={item.image.url} />
                                <span className='text-item-search'>{item.title}</span>
                            </div>
                            ))}
                        </div>
                    )}
                </div>

                <AccountDropdown />

                <button className='headerButton'>
                    <span className='headerText'>
                        <span>Returns</span>
                        <span> & Orders</span>
                    </span>
                </button>

                <div className="cartButton" onClick={handleCartClick} style={{ cursor: "pointer" }}>
                    <div className="cart">
                        <Image
                            className="cart-icon"
                            src="/cart_icon.svg"
                            alt="cart"
                            width={26}
                            height={23}
                        />
                        <span className="cart-badge">
                            {cartItemsCount > 99 ? "99+" : cartItemsCount}
                         </span>
                    </div>
                </div>
            </div>

            <div className='headerBottomSection'>
                <button className='buttonMore'>
                    <Image
                        src='/header_dropdown_icon.svg'
                        alt='list'
                        width={40}
                        height={31}
                    />
                </button>

                <div className='linksGroup'>
                    <a onClick={() => router.push("/customService")} style={{ cursor: "pointer" }}>
                        <p>Customer Service</p>
                    </a>
                    <a href="">
                        <p>Registry</p>
                    </a>
                    <a href="">
                        <p>Gift Cards</p>
                    </a>
                    <a href="/sell">
                        <p>Sell</p>
                    </a>
                </div>
            </div>
        </header>
    )
}
