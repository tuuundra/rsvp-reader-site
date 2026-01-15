import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RSVP Reader - Speed Read Anything",
  description: "Free macOS app for speed reading. Read 500+ WPM with RSVP technology.",
  openGraph: {
    title: "RSVP Reader - Speed Read Anything",
    description: "Free macOS app for speed reading. Read 500+ WPM with RSVP technology.",
    type: "website",
    images: ["/screenshot.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "RSVP Reader - Speed Read Anything",
    description: "Free macOS app for speed reading. Read 500+ WPM with RSVP technology.",
    images: ["/screenshot.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0D0D0D] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
