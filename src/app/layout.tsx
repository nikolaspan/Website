import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { IntroSplash } from "@/components/layout/IntroSplash";

// Body / UI typeface — clean cross-platform stand-in for Helvetica.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Display typeface — geometric, airy, the brand's effective display face.
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sail-e.com"),
  title: "SAIL-E · Sea mobility, simplified.",
  description:
    "SAIL-E helps hotels, DMCs, travel pros, boat partners, and destinations book and manage trusted sea mobility with clarity, speed, and care. One platform for every sea journey.",
  keywords: [
    "sea mobility",
    "boat transfers",
    "hospitality",
    "DMC",
    "Mediterranean",
    "Greece",
  ],
  openGraph: {
    title: "SAIL-E · Sea mobility, simplified.",
    description:
      "One platform for every sea journey — built for hotels, DMCs, travel pros, boat partners, marinas, and coastal destinations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jost.variable}`}>
      <body className="min-h-screen bg-sea-950 font-sans antialiased">
        <ScrollProgress />
        <IntroSplash />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
