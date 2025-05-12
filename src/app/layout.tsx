import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SessionProvider from '@/components/providers/SessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SchoolMall - Premium Technology Store in Kenya',
  description: 'A modern e-commerce site offering high-quality laptops, phones, and tech accessories in Kenya',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <div className="min-h-screen bg-white">
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
} 