import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { ReactElement } from 'react';

import Providers from '^/components/Providers';
import Navbar from '^/components/Navbar';
import IBaseComponentProps from '^/types/IBaseComponentProps';
import getCurrentEmploymentFormatted from '^/utils/getCurrentEmploymentFormatted';

import './globals.css';

const font = Open_Sans({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `Ivan Tsybulin | ${getCurrentEmploymentFormatted()}`,
};

export default function RootLayout({
  children,
}: Readonly<Omit<IBaseComponentProps, 'className'>>): ReactElement {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <Navbar />

          <div className="overflow-x-hidden">
            {children}
          </div>
        </Providers>

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
