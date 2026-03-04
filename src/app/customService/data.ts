export type SupportNode = {
  id: string
  title: string
  children?: SupportNode[]
  answer?: string
}

export const internationalTree: SupportNode = {
  id: "root",
  title: "Pick what you need help with",
  children: [
    {
      id: "free_shipping",
      title: "Free shipping and other promotions",
      children: [
        {
          id: "eligibility",
          title: "Didn’t get free international shipping",
          answer: "Not all items qualify for free international shipping. Look for messaging in the product page announcing free shipping to your shipping destination."
        },
        {
          id: "contact",
          title: "Change an order with free international shipping",
          answer: "Please contact international support."
        },
        {
          id: "contact",
          title: "Free shipping eligibility",
          answer: "Please contact international support."
        },
        {
          id: "contact",
          title: "Other promotions",
          answer: "Please contact international support."
        }
      ]
    },
    {
      id: "customs",
      title: "Customs, import fees and documentation",
      answer: "Orders can be changed within 24 hours."
    },
    {
      id: "currency",
      title: "Currency settings",
      answer: "Free shipping depends on country and product."
    },
    {
      id: "language",
      title: "Language settings",
      answer: "Visit the promotions page."
    }
  ]
}

export const paymentTree: SupportNode = {
  id: "root",
  title: "Update payment methods",
  children: [
    {
      id: "free_shipping",
      title: "Update payment methods",
      children: [
        {
          id: "eligibility",
          title: "Update shipping addresses",
          answer: "Not all items qualify for free international shipping. Look for messaging in the product page announcing free shipping to your shipping destination."
        },
        {
          id: "contact",
          title: "Default and 1-Click payment settings",
          answer: "Please contact international support."
        },
        {
          id: "contact",
          title: "Tax exemption information",
          answer: "Please contact international support."
        }
      ]
    },
    {
      id: "customs",
      title: "Unknown or incorrect charges",
      answer: "Orders can be changed within 24 hours."
    },
    {
      id: "currency",
      title: "Payment in local currently",
      answer: "Free shipping depends on country and product."
    },
    {
      id: "language",
      title: "Payment declined",
      answer: "Visit the promotions page."
    }
  ]
}

export const loginTree: SupportNode = {
  id: "root",
  title: "Login",
  children: [
    {
      id: "free_shipping",
      title: "Login",
      children: [
        {
          id: "eligibility",
          title: "Close my account",
          answer: "Not all items qualify for free international shipping. Look for messaging in the product page announcing free shipping to your shipping destination."
        },
        {
          id: "contact",
          title: "Adding an address, payment",
          answer: "Please contact international support."
        },
        {
          id: "contact",
          title: "Account management",
          answer: "Please contact international support."
        }
      ]
    },
    {
      id: "customs",
      title: "Addresses",
      answer: "Orders can be changed within 24 hours."
    }
  ]
}

export const securityTree: SupportNode = {
  id: "root",
  title: "Security",
  children: [
    {
      id: "free_shipping",
      title: "Security",
      children: [
        {
          id: "eligibility",
          title: "Close my account",
          answer: "Not all items qualify for free international shipping. Look for messaging in the product page announcing free shipping to your shipping destination."
        },
        {
          id: "contact",
          title: "Adding an address, payment",
          answer: "Please contact international support."
        },
        {
          id: "contact",
          title: "Account management",
          answer: "Please contact international support."
        }
      ]
    },
    {
      id: "customs",
      title: "Suspicious e-mail received",
      answer: "Orders can be changed within 24 hours."
    },
    {
      id: "customs",
      title: "Data privacy queries",
      answer: "Orders can be changed within 24 hours."
    }
  ]
}

export const giftTree: SupportNode = {
  id: "root",
  title: "Security",
  children: [
    {
      id: "free_shipping",
      title: "Security",
      children: [
        {
          id: "eligibility",
          title: "Close my account",
          answer: "Not all items qualify for free international shipping. Look for messaging in the product page announcing free shipping to your shipping destination."
        },
        {
          id: "contact",
          title: "Adding an address, payment",
          answer: "Please contact international support."
        },
        {
          id: "contact",
          title: "Account management",
          answer: "Please contact international support."
        }
      ]
    },
    {
      id: "customs",
      title: "Suspicious e-mail received",
      answer: "Orders can be changed within 24 hours."
    },
    {
      id: "customs",
      title: "Data privacy queries",
      answer: "Orders can be changed within 24 hours."
    }
  ]
}