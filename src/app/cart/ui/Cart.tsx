'use client'
import {useState, Suspense, useEffect} from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import '@/app/cart/css/cart.css'
import '@/app/cart/css/cart_item.css'

import { useCart } from "@/app/cart/misc/CartContext"
import { RecentlyViewedItemCard } from "@/app/cart/lib/RecentlyViewedItemCard"
import ShoppingCart from "@/app/cart/ui/ShoppingCart"
import Subtotal from "@/app/cart/ui/Subtotal"
import SavedAddressesCart from "@/app/cart/ui/SavedAddressesCart"
import ShippingInfoCart from "@/app/cart/ui/ShippingInfoCart"
import ThankYouPageCart from "@/app/cart/ui/ThankYouPageCart"
import PaymentMethod from "@/app/cart/ui/PaymentMethodCart";
import AddressFormCart from "@/app/cart/ui/ShippingPaymant";
import PaymentListCart from "@/app/cart/ui/SavedPaymentMethodCart";
import {useRecentlyViewed} from "@/app/product_page/hooks/useRecentlyViewed";
import {CartItem} from "@/app/cart/misc/types";
import Link from "next/link";

const STEPS = ['cart', 'saved_addresses', 'address_form', 'payment_list', 'payment_method', 'shipping_info', 'thank_you'];

const BASE_URL = process.env.NEXT_PUBLIC_AMZN_API_BASE!;

export function CartContent() {
  const { items, addToCart, increaseQuantity, decreaseQuantity, toggleItem, selectAll, calcSubtotal } = useCart()
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentStep = searchParams.get('step') || 'cart';

  const [addresses, setAddresses] = useState<any[]>([]);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const [editingAddress, setEditingAddress] = useState<any>(null);

  const [paymentMethods, setPaymentMethods] = useState<any[]>([]);
  const [selectedPaymentIndex, setSelectedPaymentIndex] = useState(0);

  const selectedQuantity = items.filter(item => item.selected).length

  const { getProducts } = useRecentlyViewed();

  const goToStep = (stepName: string) => {
    router.push(`/cart?step=${stepName}`, { scroll: false });
  };

  const handleNextStep = () => {
    if (currentStep === 'address_form' || currentStep === 'payment_method') {
      alert("Please use the button inside the form to save your details.");
      return;
    }

    if (currentStep === 'cart') {
      if (selectedQuantity === 0) return alert("Select items");
      addresses.length === 0 ? goToStep('address_form') : goToStep('saved_addresses');
      return;
    }

    if (currentStep === 'saved_addresses') {
      paymentMethods.length === 0 ? goToStep('payment_method') : goToStep('payment_list');
      return;
    }

    if (currentStep === 'payment_list') {
      goToStep('shipping_info');
      return;
    }

    const currentIndex = STEPS.indexOf(currentStep);
    if (currentIndex < STEPS.length - 1) {
      goToStep(STEPS[currentIndex + 1]);
    }
  };

  const handleSavePayment = (cardData: any) => {
    const newMethods = [...paymentMethods, cardData];
    setPaymentMethods(newMethods);
    setSelectedPaymentIndex(newMethods.length - 1);
    goToStep('payment_list');
  };

  const handleSaveAddress = (formData: any) => {
    if (editingAddress !== null) {
      const updated = [...addresses];
      updated[editingAddress.index] = formData;
      setAddresses(updated);
    } else {
      const newAddresses = [...addresses, formData];
      setAddresses(newAddresses);
      setSelectedAddressIndex(newAddresses.length - 1);
    }
    setEditingAddress(null);
    goToStep('saved_addresses');
  };

  const isMainCart = currentStep === 'cart';
  const isThankYouPage = currentStep === 'thank_you';
  const showSubtotal = !isThankYouPage;

  const [recentlyItems, setRecentlyItems] = useState<CartItem[]>([]);

  const mapRecentlyViewed = (item: any) => {
    return {
      id: item.id,
      title: item.title,
      image: item.image?.url ?? "/fallback.png",
      price: item.price?.current ?? item.price,
      rating: item.rating ?? 0,
    };
  };

  useEffect(() => {
    const fetchRecentlyViewed = async () => {
      try {
        const ids = getProducts();
        const params = new URLSearchParams();

        ids.forEach(id => {
          params.append("ProductIds", id);
        });

        const res = await fetch(
            `${BASE_URL}/api/home/last-viewed?${params.toString()}`
        );

        if (!res.ok) throw new Error("Failed");

        const data = await res.json();
        const mapped = data.map(mapRecentlyViewed);

        setRecentlyItems(mapped);
      } catch (e) {
        console.error("recently viewed error", e);
      }
    };

    fetchRecentlyViewed();
  }, []);

  return (
      <div className="cart_wrapper">
        <div className="super_mega_wrapper">
          <div className="main_content_area" key={currentStep}>
            {currentStep === 'cart' && <ShoppingCart items={items} toggleItem={toggleItem} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} selectAll={selectAll} />}
            {currentStep === 'saved_addresses' && (
                <SavedAddressesCart
                    addresses={addresses}
                    selected={selectedAddressIndex}
                    onSelect={setSelectedAddressIndex}
                    onAdd={() => { setEditingAddress(null); goToStep('address_form'); }}
                    onEdit={(addr: any, idx: number) => { setEditingAddress({...addr, index: idx}); goToStep('address_form'); }}
                />
            )}
            {currentStep === 'address_form' && <AddressFormCart initialData={editingAddress} onSave={handleSaveAddress} />}
            {currentStep === 'payment_list' && (
                <PaymentListCart
                    cards={paymentMethods}
                    selected={selectedPaymentIndex}
                    onSelect={setSelectedPaymentIndex}
                    onAdd={() => goToStep('payment_method')}
                />
            )}
            {currentStep === 'payment_method' && (
                <PaymentMethod
                    onSave={handleSavePayment}
                />
            )}
            {currentStep === 'shipping_info' && <ShippingInfoCart />}
            {currentStep === 'thank_you' && <ThankYouPageCart />}
          </div>

          {!isThankYouPage && (
              <div className="subtotal_recently_viewid_wrapper">
                {showSubtotal && <Subtotal selectedQuantity={selectedQuantity} calcSubtotal={calcSubtotal} onNavigate={handleNextStep} disabled={currentStep === 'address_form' || currentStep === 'payment_method'} />}
                {isMainCart && (
                    <div className="recently_viewed">
                      <h2>Your recently viewed items</h2>
                      <ul className="recently_viewed_list">
                        {recentlyItems.slice(0, 4).map((item) => (
                            <li key={item.id}>
                              <Link
                                  href={`/product_page/${item.id}`}
                                  style={{ textDecoration: "none", color: "inherit" }}
                              >
                                <RecentlyViewedItemCard
                                    item={item}
                                    addToCart={addToCart}
                                />
                              </Link>
                            </li>
                        ))}
                      </ul>
                    </div>
                )}
              </div>
          )}
        </div>

        {isMainCart && (
            <div className="sign_in_footer">
              <span>See personalized recommendations</span>
              <button onClick={() => goToStep('saved_addresses')}>
                <span className='sign_in_footer_button_text'>Continue</span>
              </button>
              <div className="new_customer">
                <span>New Customer?</span>
                <a href="">Start here.</a>
              </div>
            </div>
        )}
      </div>
  );
}

export function CartPage() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <CartContent />
      </Suspense>
  );
}