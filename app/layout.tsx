import '@/assets/css/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SkillSage - Freelance Services Marketplace',
  description: 'Next freelance services marketplace app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <main>{children}</main>
      </body>
    </html>
  );
}
