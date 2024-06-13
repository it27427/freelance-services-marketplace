import '@/assets/css/globals.css';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';

const mulish = Mulish({ subsets: ['latin'] });

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
      <body className={mulish.className} suppressHydrationWarning={true}>
        <main>{children}</main>
      </body>
    </html>
  );
}
