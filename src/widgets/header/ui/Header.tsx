"use client";
import "@/widgets/header/css/header.css";
import { SearchDropdown } from "@/widgets/header/ui/SearchDropDown";
import { AccountDropdown } from "@/widgets/header/ui/AccountDropDown";
import Image from "next/image";
import { useCart } from "@/app/cart/misc/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Header() {
  const { items } = useCart();
  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);
  const router = useRouter();
  
  return (
    <header>
      <div className="headerTopSection">
        <Image
          className="headerIcon"
          width="109"
          height="62"
          src="/header_main_logo.svg"
          alt="main logo"
        />
        <button className="geoMarker headerButton">
          <span className="headerIcon">
            <Image src="/geo_marker.svg" alt="geo marker" width="28" height="33" />
          </span>
          <span className="headerText">
            <span>Deliver to</span>
            <span>Ukraine</span>
          </span>
        </button>
        <div className="searchForm">
          <SearchDropdown />
          <form className="form" role="search">
            <input className="formInput" id="search" name="q" type="search" />
            <button className="formSubmitButton" type="submit">
              <Image
                className="searchIcon"
                style={{ height: "100%", width: "auto", display: "block" }}
                src="/search_icon.svg"
                height="24"
                width="24"
                alt="search"
              />
            </button>
          </form>
        </div>
        <AccountDropdown />
        <button className="headerButton">
          <span className="headerText">
            <span>Returns</span>
            <span> & Orders</span>
          </span>
        </button>
        <Link href="/cart" className="cartButton">
          <div className="cart">
            <Image className="cart-icon" src="/cart_icon.svg" alt="cart" width="26" height="23" />
            <span className="cart-badge">{cartItemsCount > 99 ? "99+" : cartItemsCount}</span>
          </div>
        </Link>
      </div>
      <div className="headerBottomSection">
        <button className="buttonMore">
          <Image src="/header_dropdown_icon.svg" alt="list" width="40" height="31" />
        </button>
        <div className="linksGroup">
          <a href="">
            <p>Today&#39;s Deals</p>
          </a>
          <a onClick={() => router.push("/customService")} style={{ cursor: "pointer" }}>
            <p>Customer Service</p>
          </a>
          <a href="">
            <p>Registry</p>
          </a>
          <a href="">
            <p>Gift Cards</p>
          </a>
          <a href="">
            <p>Sell</p>
          </a>
        </div>
      </div>
    </header>
  );
}
