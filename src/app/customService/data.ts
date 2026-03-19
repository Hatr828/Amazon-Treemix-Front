export type SupportNode = {
  id: string
  title: string
  children?: SupportNode[]
  answer?: string
}

export const internationalTree: SupportNode = {
  id: "international_root",
  title: "How can we help with international orders?",
  children: [
    {
      id: "international_shipping_promotions",
      title: "Free shipping and promotions",
      children: [
        {
          id: "international_shipping_not_applied",
          title: "Free international shipping was not applied",
          answer:
            "Free international shipping is available only for eligible items, supported delivery countries, and qualifying order totals. If it was not applied, one or more items may not have qualified, the minimum order amount may not have been reached, or the offer may not be available for your destination."
        },
        {
          id: "international_shipping_order_changes",
          title: "Change an order with free international shipping",
          answer:
            "If you update an order after placing it, shipping eligibility may be recalculated. Adding or removing items can change whether the order still qualifies for free international shipping."
        },
        {
          id: "international_shipping_eligibility",
          title: "Check free shipping eligibility",
          answer:
            "Eligibility depends on the destination country, seller, item type, and total order value. Some oversized, restricted, or marketplace items may be excluded from shipping promotions."
        },
        {
          id: "international_other_promotions",
          title: "Other promotions and offers",
          answer:
            "Some promotions can be combined, while others cannot. Discount codes, shipping offers, and limited-time deals may have separate conditions, so it is best to review the offer details before checkout."
        }
      ]
    },
    {
      id: "international_customs_import",
      title: "Customs, import fees, and documents",
      answer:
        "International orders may be subject to customs duties, taxes, or import fees based on the destination country. In some cases these charges are collected during checkout, and in others they are collected by customs or the delivery carrier before delivery."
    },
    {
      id: "international_currency_settings",
      title: "Currency settings",
      answer:
        "You may be able to view prices and place orders in your local currency depending on your region. Final amounts can still vary slightly because of exchange rates or fees charged by your bank or card issuer."
    },
    {
      id: "international_language_settings",
      title: "Language settings",
      answer:
        "You can change the display language in your site or app settings when multiple languages are supported. Some product details and seller content may still appear in their original language."
    }
  ]
}

export const paymentTree: SupportNode = {
  id: "payment_root",
  title: "How can we help with payment and billing?",
  children: [
    {
      id: "payment_methods_settings",
      title: "Payment methods and billing settings",
      children: [
        {
          id: "payment_update_method",
          title: "Update a payment method",
          answer:
            "You can add, remove, or update saved payment methods in your account settings. Changes made there are usually available the next time you place an order."
        },
        {
          id: "payment_default_1click_settings",
          title: "Default and 1-Click payment settings",
          answer:
            "Your default payment method is used for eligible purchases unless you select another one during checkout. You can also update your 1-Click settings from your account preferences."
        },
        {
          id: "payment_tax_exemption_info",
          title: "Tax exemption information",
          answer:
            "If you qualify for tax-exempt purchasing, you may need to submit documents or complete account verification. Available tax settings can vary by account type and region."
        }
      ]
    },
    {
      id: "payment_unknown_charge",
      title: "Unknown or incorrect charge",
      answer:
        "If you see a charge you do not recognize, first review recent orders, subscriptions, and shared payment methods on the account. Some banks also show temporary authorization holds that may look like completed charges."
    },
    {
      id: "payment_local_currency",
      title: "Paying in local currency",
      answer:
        "When local currency is supported, prices may be shown in your region’s currency during checkout. The amount shown by your bank can differ slightly because of exchange rates or foreign transaction fees."
    },
    {
      id: "payment_declined",
      title: "Payment was declined",
      answer:
        "A payment may be declined because of expired card details, billing mismatches, insufficient funds, bank security checks, or regional restrictions. Double-check the payment information or try a different method."
    },
    {
      id: "payment_update_shipping_address",
      title: "Update a shipping address",
      answer:
        "You can update your shipping address in your account or during checkout before the order is placed. If the order has already been submitted, address changes may no longer be available."
    }
  ]
}

export const loginTree: SupportNode = {
  id: "login_root",
  title: "How can we help with login and account access?",
  children: [
    {
      id: "login_access_issues",
      title: "Login and account access",
      children: [
        {
          id: "login_cannot_sign_in",
          title: "I cannot sign in",
          answer:
            "If you cannot sign in, check that your e-mail address and password were entered correctly. You may also need to reset your password or complete an additional security check."
        },
        {
          id: "login_account_recovery",
          title: "Recover my account",
          answer:
            "If you have lost access to your account, use the recovery options available on the sign-in page. You may be asked to verify your identity before access is restored."
        },
        {
          id: "login_account_management",
          title: "Manage my account settings",
          answer:
            "You can manage your personal details, password, saved addresses, payment methods, and communication preferences from your account settings."
        }
      ]
    },
    {
      id: "login_address_payment_info",
      title: "Add an address or payment method",
      answer:
        "Saved addresses and payment methods can be added from your account settings. Once saved, they can be selected during checkout for faster ordering."
    },
    {
      id: "login_addresses",
      title: "Manage addresses",
      answer:
        "You can add, edit, remove, or choose a default address in your account. Changes may not apply to orders that are already being processed."
    },
    {
      id: "login_close_account",
      title: "Close my account",
      answer:
        "Before closing your account, review any open orders, refunds, subscriptions, or remaining balances. Closing the account may remove access to order history and saved account information."
    }
  ]
}

export const securityTree: SupportNode = {
  id: "security_root",
  title: "How can we help with security and privacy?",
  children: [
    {
      id: "security_account_protection",
      title: "Account protection",
      children: [
        {
          id: "security_secure_account",
          title: "Secure my account",
          answer:
            "To improve account security, use a strong unique password, review saved payment methods and addresses, and keep your contact information up to date. Extra verification steps may also be available."
        },
        {
          id: "security_unauthorized_changes",
          title: "Unauthorized address or payment changes",
          answer:
            "If you notice account changes you did not make, remove or update the affected information immediately and review recent account activity. Changing your password is also recommended."
        },
        {
          id: "security_close_compromised_account",
          title: "Close a compromised account",
          answer:
            "If you believe the account has been compromised and you no longer want to keep it active, review recent activity and secure your information first. Closing the account may limit access to previous orders and settings."
        }
      ]
    },
    {
      id: "security_suspicious_email",
      title: "Suspicious e-mail or message received",
      answer:
        "Do not click links, open attachments, or share passwords or payment details if a message looks suspicious. Check the sender details carefully and compare the message to official communications."
    },
    {
      id: "security_data_privacy",
      title: "Data privacy questions",
      answer:
        "Privacy requests may include questions about how your data is stored, updated, used, or deleted. Available options can depend on your region and may require identity verification."
    }
  ]
}

export const giftTree: SupportNode = {
  id: "gift_root",
  title: "How can we help with gift cards and vouchers?",
  children: [
    {
      id: "gift_cards",
      title: "Gift cards",
      children: [
        {
          id: "gift_redeem_card",
          title: "Redeem a gift card",
          answer:
            "A gift card can usually be redeemed by entering the claim code in your account or during checkout. Once redeemed, the balance is stored in your account and used for eligible purchases."
        },
        {
          id: "gift_check_balance",
          title: "Check gift card balance",
          answer:
            "Your available gift card balance can be viewed in your account after the card has been redeemed. If a recent redemption is not shown yet, refresh the page or check again later."
        },
        {
          id: "gift_card_not_received",
          title: "Gift card was not received",
          answer:
            "If a digital gift card was not received, check the spam or junk folder and confirm that the recipient details were entered correctly. Delivery may sometimes be delayed due to payment review or processing."
        }
      ]
    },
    {
      id: "gift_vouchers_promocodes",
      title: "Vouchers and promo codes",
      children: [
        {
          id: "gift_voucher_not_working",
          title: "Voucher or promo code is not working",
          answer:
            "A voucher may not apply if it has expired, was already used, does not match the eligible items, or does not meet the required order conditions. Make sure the code was entered exactly as provided."
        },
        {
          id: "gift_voucher_restrictions",
          title: "Voucher restrictions and eligibility",
          answer:
            "Vouchers and promotional codes may be limited by country, marketplace, item category, seller, or order value. Some offers also cannot be combined with other discounts."
        }
      ]
    },
    {
      id: "gift_restrictions",
      title: "Gift card restrictions",
      answer:
        "Gift cards may be limited by account region, marketplace, or purchase type. In many cases they cannot be transferred, exchanged for cash, or used for certain digital or third-party items."
    }
  ]
}

export const primeTree: SupportNode = {
  id: "prime_root",
  title: "How can we help with Prime?",
  children: [
    {
      id: "prime_benefits",
      title: "Prime benefits and included services",
      answer:
        "Prime benefits can include faster delivery, exclusive deals, and access to selected digital services, depending on your region and plan. Availability may vary by country."
    },
    {
      id: "prime_trial",
      title: "Prime free trial",
      answer:
        "If a free trial is available for your account, you can start it from the Prime page. Trial eligibility may depend on your account history and region."
    },
    {
      id: "prime_billing",
      title: "Prime charges and renewal",
      answer:
        "Prime memberships renew automatically unless they are canceled before the renewal date. If you see a Prime charge, review your membership status and renewal settings in your account."
    },
    {
      id: "prime_cancel",
      title: "Cancel Prime membership",
      answer:
        "You can cancel Prime from your membership settings. Your access to Prime benefits usually continues until the current billing period ends, unless your plan states otherwise."
    },
    {
      id: "prime_delivery",
      title: "Prime delivery issues",
      answer:
        "Some items may not qualify for Prime delivery because of seller restrictions, shipping destination, stock availability, or product type. Delivery speed can also vary by region."
    }
  ]
}

export const membershipsTree: SupportNode = {
  id: "memberships_root",
  title: "How can we help with memberships, subscriptions, or communications?",
  children: [
    {
      id: "memberships_manage",
      title: "Manage memberships and subscriptions",
      answer:
        "You can review active memberships and subscriptions in your account settings. From there, you may be able to update payment details, change plans, or cancel renewals."
    },
    {
      id: "memberships_cancel",
      title: "Cancel a subscription",
      answer:
        "Most subscriptions can be canceled from your account before the next renewal date. After cancellation, access may continue until the current billing period ends."
    },
    {
      id: "memberships_renewal_charge",
      title: "Unexpected renewal or subscription charge",
      answer:
        "If you notice a charge you did not expect, check your active memberships, trial periods, and renewal dates. Some subscriptions renew automatically unless canceled in advance."
    },
    {
      id: "memberships_emails",
      title: "Too many e-mails or notifications",
      answer:
        "Communication preferences can usually be updated in your account settings. You may be able to change promotional e-mails, order updates, and notification options separately."
    },
    {
      id: "memberships_unsubscribe",
      title: "Unsubscribe from marketing communications",
      answer:
        "You can unsubscribe from marketing messages through your communication preferences or by using the unsubscribe link included in eligible e-mails."
    }
  ]
}

export const somethingElseTree: SupportNode = {
  id: "something_else_root",
  title: "How can we help with something else?",
  children: [
    {
      id: "something_else_contact",
      title: "I need help with a different issue",
      answer:
        "If your issue does not match the available support topics, choose the closest category or contact support with a short description of the problem."
    },
    {
      id: "something_else_feedback",
      title: "Share feedback about the site or service",
      answer:
        "You can share feedback about your shopping experience, support interactions, or technical issues. Detailed feedback helps improve future service and support."
    },
    {
      id: "something_else_technical",
      title: "Report a technical problem",
      answer:
        "If a page is not loading correctly or a feature is not working as expected, try again after refreshing the page or signing in again. If the issue continues, report what happened and which device or browser you used."
    },
    {
      id: "something_else_accessibility",
      title: "Accessibility support",
      answer:
        "Accessibility-related questions can include problems with navigation, screen readers, visual layout, or other usability barriers. Include as much detail as possible when reporting the issue."
    }
  ]
}