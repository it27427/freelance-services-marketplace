import '@/assets/css/globals.css';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TaskWave - Freelance Services Marketplace',
  description: 'Next freelance services marketplace app',
};

import ThemeProvider from '@/provider/ThemeProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${mulish.className} m-0 p-0`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
