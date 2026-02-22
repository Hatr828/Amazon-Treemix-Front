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

      <head>
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        {/* Bootstrap Icons */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        {/* Bootstrap JS */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>
      </head>
        
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
