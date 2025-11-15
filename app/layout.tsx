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
    "Wujood Care | Calming Virtual Reality for Pediatric Care Teams",
  description:
    "Wujood Care is an AI-enhanced virtual reality platform that surrounds hospitalized children with adaptive, soothing worlds so they can face treatment with more calm, curiosity, and control.",
  keywords: [
    "pediatric virtual reality",
    "child life support",
    "hospital calming VR",
    "pain management for kids",
    "VR for medical procedures",
    "pediatric anxiety reduction",
    "therapeutic VR experiences",
    "child-friendly healthcare tech",
    "Wujood Care",
    "virtual comfort for patients",
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
      "Wujood Care | Calming Virtual Reality for Pediatric Care Teams",
    description:
      "Where calm, play, and presence support children through every procedure. Partner with Wujood Care to bring adaptive VR comfort to your patients and care teams.",
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
