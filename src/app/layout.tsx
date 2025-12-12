import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "RSL/A | Intelligent Marketing Systems",
  description: "We architect intelligent marketing systems. Paid Ads, AI Automation, and Smart Infrastructure for scaling businesses.",
  metadataBase: new URL('https://rsla.io'),
  icons: {
    icon: [
      { url: '/logomark.png', sizes: '32x32', type: 'image/png' },
      { url: '/logomark.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/logomark.png',
    shortcut: '/logomark.png',
  },
  openGraph: {
    title: 'RSL/A | Intelligent Marketing Systems',
    description: 'We architect intelligent marketing systems. Paid Ads, AI Automation, and Smart Infrastructure for scaling businesses.',
    url: 'https://rsla.io',
    siteName: 'RSL/A',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RSL/A - Intelligent Marketing Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RSL/A | Intelligent Marketing Systems',
    description: 'We architect intelligent marketing systems. Paid Ads, AI Automation, and Smart Infrastructure for scaling businesses.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} bg-black text-white antialiased`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
