'use client'
import { useState, useMemo, Suspense } from 'react'
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
import AuthForm from "@/app/cart/ui/LogInSignIn";
import AddressFormCart from "@/app/cart/ui/ShippingPaymant";
import PaymentListCart from "@/app/cart/ui/SavedPaymentMethodCart";

const STEPS = ['cart', 'auth', 'saved_addresses', 'address_form', 'payment_list', 'payment_method', 'shipping_info', 'thank_you'];

export function CartContent() {
  const { items, addToCart, increaseQuantity, decreaseQuantity, toggleItem, selectAll, recentlyItems, calcSubtotal } = useCart()
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentStep = searchParams.get('step') || 'cart';

  const [addresses, setAddresses] = useState<any[]>([]);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const [editingAddress, setEditingAddress] = useState<any>(null);

  const [paymentMethods, setPaymentMethods] = useState<any[]>([]);
  const [selectedPaymentIndex, setSelectedPaymentIndex] = useState(0);

  const selectedQuantity = items.filter(item => item.selected).length

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
      goToStep('auth');
      return;
    }

    if (currentStep === 'auth') {
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
  const showSubtotal = currentStep !== 'auth' && !isThankYouPage;

  return (
      <div className="cart_wrapper">
        <div className="super_mega_wrapper">
          <div className="main_content_area" key={currentStep}>
            {currentStep === 'cart' && <ShoppingCart items={items} toggleItem={toggleItem} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} selectAll={selectAll} />}
            {currentStep === 'auth' && <AuthForm onNavigate={handleNextStep}/>}
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
                        {recentlyItems.map((item) => <li key={item.id}><RecentlyViewedItemCard item={item} addToCart={addToCart} /></li>)}
                      </ul>
                    </div>
                )}
              </div>
          )}
        </div>

        {isMainCart && (
            <div className="sign_in_footer">
              <span>See personalized recommendations</span>
              <button onClick={() => goToStep('auth')}>
                <span className='sign_in_footer_button_text'>Sign in</span>
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
