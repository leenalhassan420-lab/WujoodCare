import type React from "react";
import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "./globals.css";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo2",
});

export const metadata: Metadata = {
  title:
    "Wujood Care | Virtual Reality Medical Training & Healthcare Solutions",
  description:
    "Wujood Care delivers innovative VR medical training solutions that transform healthcare education. Experience virtual joy that heals with our cutting-edge medical simulation technology. Your Presence, Our Care.",
  keywords: [
    "VR medical training",
    "virtual reality healthcare",
    "medical simulation",
    "healthcare VR solutions",
    "medical education technology",
    "VR therapy",
    "medical training software",
    "healthcare innovation",
    "Wujood Care",
    "virtual medical training",
  ],
  authors: [{ name: "Raed Shafeek" }, { name: "Wujood Care" }],
  creator: "Raed Shafeek",
  metadataBase: new URL("https://wujoodcare.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wujoodcare.com",
    title:
      "Wujood Care | Virtual Reality Medical Training & Healthcare Solutions",
    description:
      "Transform healthcare education with Wujood Care's innovative VR medical training solutions. Virtual joy that heals. Your Presence, Our Care.",
    siteName: "Wujood Care",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wujood Care - VR Medical Training Solutions",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Healthcare Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={baloo2.variable}>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
