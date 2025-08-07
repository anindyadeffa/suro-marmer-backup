import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import * as React from 'react';
import { Suspense } from 'react';

import '@/styles/globals.css';

import Layouting from '@/components/generals/Layouting';
import { Loading } from '@/components/Loading';
import Provider from '@/components/provider';
import { ThemeProvider } from '@/components/theme-provider';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.png`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.png`],
    creator: '@rizki.kii',
  },
  authors: [
    {
      name: 'Rizki Pratama',
      url: 'https://github.com/rizki1912',
    },
  ],
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<Loading />}>
            <Provider>
              <Layouting>{children}</Layouting>
            </Provider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
