import "./globals.css";
import { CartProvider } from '@/features/cart';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <CartProvider>
      <body>{children}</body>
    </CartProvider>
    </html>
  );
}
