export type SupportNode = {
  id: string
  title: string
  children?: SupportNode[]
  answer?: string
}

export const internationalTree: SupportNode = {
  id: "international_root",
  title: "Pick what you need help with",
  children: [
    {
      id: "international_free_shipping",
      title: "Free shipping and other promotions",
      children: [
        {
          id: "international_free_shipping_didnt_get",
          title: "Didn’t get free international shipping",
          answer: "Not all items qualify..."
        },
        {
          id: "international_free_shipping_change_order",
          title: "Change an order with free international shipping",
          answer: "Please contact international support."
        },
        {
          id: "international_free_shipping_eligibility",
          title: "Free shipping eligibility",
          answer: "Please contact international support."
        },
        {
          id: "international_free_shipping_other_promotions",
          title: "Other promotions",
          answer: "Please contact international support."
        }
      ]
    },
    {
      id: "international_customs",
      title: "Customs, import fees and documentation",
      answer: "Orders can be changed within 24 hours."
    },
    {
      id: "international_currency",
      title: "Currency settings",
      answer: "Free shipping depends on country and product."
    },
    {
      id: "international_language",
      title: "Language settings",
      answer: "Visit the promotions page."
    }
  ]
}

export const paymentTree: SupportNode = {
  id: "payment_root",
  title: "Update payment methods",
  children: [
    {
      id: "payment_update_methods",
      title: "Update payment methods",
      children: [
        {
          id: "payment_update_shipping_addresses",
          title: "Update shipping addresses",
          answer: "Not all items qualify..."
        },
        {
          id: "payment_default_1click",
          title: "Default and 1-Click payment settings",
          answer: "Please contact international support."
        },
        {
          id: "payment_tax_exemption",
          title: "Tax exemption information",
          answer: "Please contact international support."
        }
      ]
    },
    {
      id: "payment_unknown_charges",
      title: "Unknown or incorrect charges",
      answer: "Orders can be changed within 24 hours."
    },
    {
      id: "payment_local_currency",
      title: "Payment in local currency",
      answer: "Free shipping depends on country and product."
    },
    {
      id: "payment_declined",
      title: "Payment declined",
      answer: "Visit the promotions page."
    }
  ]
}

export const loginTree: SupportNode = {
  id: "login_root",
  title: "Login",
  children: [
    {
      id: "login_section",
      title: "Login",
      children: [
        {
          id: "login_close_account",
          title: "Close my account",
          answer: "Not all items qualify..."
        },
        {
          id: "login_add_address_payment",
          title: "Adding an address, payment",
          answer: "Please contact international support."
        },
        {
          id: "login_account_management",
          title: "Account management",
          answer: "Please contact international support."
        }
      ]
    },
    {
      id: "login_addresses",
      title: "Addresses",
      answer: "Orders can be changed within 24 hours."
    }
  ]
}

export const securityTree: SupportNode = {
  id: "security_root",
  title: "Security",
  children: [
    {
      id: "security_section",
      title: "Security",
      children: [
        {
          id: "security_close_account",
          title: "Close my account",
          answer: "Not all items qualify..."
        },
        {
          id: "security_add_address_payment",
          title: "Adding an address, payment",
          answer: "Please contact international support."
        },
        {
          id: "security_account_management",
          title: "Account management",
          answer: "Please contact international support."
        }
      ]
    },
    {
      id: "security_suspicious_email",
      title: "Suspicious e-mail received",
      answer: "Orders can be changed within 24 hours."
    },
    {
      id: "security_data_privacy",
      title: "Data privacy queries",
      answer: "Orders can be changed within 24 hours."
    }
  ]
}

export const giftTree: SupportNode = {
  id: "gift_root",
  title: "Gift cards & vouchers",
  children: [
    {
      id: "gift_section",
      title: "Gift cards",
      children: [
        {
          id: "gift_close_account",
          title: "Close my account",
          answer: "Not all items qualify..."
        },
        {
          id: "gift_add_address_payment",
          title: "Adding an address, payment",
          answer: "Please contact international support."
        },
        {
          id: "gift_account_management",
          title: "Account management",
          answer: "Please contact international support."
        }
      ]
    },
    {
      id: "gift_suspicious_email",
      title: "Suspicious e-mail received",
      answer: "Orders can be changed within 24 hours."
    },
    {
      id: "gift_data_privacy",
      title: "Data privacy queries",
      answer: "Orders can be changed within 24 hours."
    }
  ]
}