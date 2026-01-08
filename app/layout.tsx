import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/NavBar/ResponsiveNav";
import Footer from "@/components/Footer";
import PageAnimate from "@/components/Animations/PageAnimate";

const font = Lato({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Catholic Diocese of Nsukka",
    template: "%s | Catholic Diocese of Nsukka",
  },
  description: "Official website of the Catholic Diocese of Nsukka - Proclaiming the Gospel, building community, and serving people in faith.",
  keywords: ["Catholic", "Diocese", "Nsukka", "Church", "Enugu", "Nigeria", "Bishop Godfrey Onah", "Faith", "Evangelization"],
  authors: [{ name: "Catholic Diocese of Nsukka" }],
  creator: "Catholic Diocese of Nsukka",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://catholic-diocese-of-nsukka.vercel.app",
    title: "Catholic Diocese of Nsukka",
    description: "Welcome to the official portal of the Catholic Diocese of Nsukka.",
    siteName: "Catholic Diocese of Nsukka",
    images: [
      {
        url: "/images/IHS_Logo.jpg",
        width: 1200,
        height: 630,
        alt: "Catholic Diocese of Nsukka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catholic Diocese of Nsukka",
    description: "Official website of the Catholic Diocese of Nsukka.",
    images: ["/images/IHS_Logo.jpg"],
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
        <link rel="icon" href="/IHS_Logo.svg" />
      </head>
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav />
        <PageAnimate>
          <main className="grow">
            {children}
          </main>
        </PageAnimate>
        <Footer />
      </body>
    </html>
  );
}
