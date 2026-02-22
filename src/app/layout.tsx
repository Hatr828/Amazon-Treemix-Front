import "./globals.css";
import { CartProvider } from "@/app/cart/misc/CartContext";
import { Header } from "@/widgets/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <CartProvider>
      {/*TODO: rework for redux*/}

      <body>
        <Header/>
        {children}
      </body>

    </CartProvider>
    </html>
  );
}
