"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/account", icon: "/icons/person.png", label: "Account Details" },
  { href: "/account/lists", icon: "/icons/more.png", label: "Your Lists" },
  { href: "/account/gift-card", icon: "/icons/gift.png", label: "Gift Card" },
  { href: "/account/orders", icon: "/icons/cart.png", label: "Your Orders" },
  {
    href: "/account/addresses",
    icon: "/icons/geo.png",
    label: "Delivery Addresses",
  },
  {
    href: "/account/payment-methods",
    icon: "/icons/payment.png",
    label: "Payment Methods",
  },
  {
    href: "/account/digital-services",
    icon: "/icons/question.png",
    label: "Digital Services and Device Support",
  },
  { href: "/account/messages", icon: "/icons/message.png", label: "Your Messages" },
];

export default function AccountMenu() {
  const pathname = usePathname();

  const isItemActive = (href: string) => {
    if (href === "/account") {
      return pathname === "/account";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="account-menu" aria-label="Account navigation">
      <ul className="account-menu-list">
        {menuItems.map((item) => {
          const isActive = isItemActive(item.href);

          return (
            <li
              key={item.label}
              className={`account-menu-item${isActive ? " is-active" : ""}`}
            >
              <Link
                href={item.href}
                className="account-menu-link"
                aria-current={isActive ? "page" : undefined}
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={16}
                  height={16}
                  className="account-menu-icon"
                />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <button className="account-delete" type="button">
        Delete Account
      </button>
    </nav>
  );
}
