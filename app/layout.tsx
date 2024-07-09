import '@/assets/css/globals.css';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TaskWave - Freelance Services Marketplace',
  description: 'Next freelance services marketplace app',
};

import LayoutProvider from '@/provider/LayoutProvider';
import ThemeProvider from '@/provider/ThemeProvider';
import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={`${mulish.className} m-0 p-0 overflow-x-hidden`}
          suppressHydrationWarning={true}
        >
          <ThemeProvider>
            <LayoutProvider>{children}</LayoutProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
