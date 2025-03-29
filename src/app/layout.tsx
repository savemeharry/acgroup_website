import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartWidget } from '@/components/CartWidget';
import { CartProvider } from '@/context/CartContext';

export const metadata: Metadata = {
  title: 'AC Group - Профессиональное оборудование для энергетики',
  description: 'AC Group - поставщик электротехнической продукции и профессиональных решений в области энергетики и автоматизации',
  keywords: 'AC Group, электротехническая продукция, источники бесперебойного питания, автоматические выключатели, молниезащита, заземление',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="flex flex-col min-h-screen bg-background text-text">
        <CartProvider>
          <div className="flex flex-col min-h-screen bg-gradient-to-b from-background via-background to-background-dark">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <CartWidget />
          </div>
        </CartProvider>
      </body>
    </html>
  );
} 