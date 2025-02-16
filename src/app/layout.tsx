import type { Metadata } from "next";
import { Jura, Geist } from "next/font/google";
import "./globals.css";

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio de Víctor Santucci",
  description: "Conheça um pouco mais da minha experiência profissional como um desenvolvedor full stack web.",
  openGraph: {
    images: [
      {
        url: "/victorsantucci.png", 
        width: 1200, 
        height: 630, 
        alt: "Victor Santucci's Portfolio",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/victorsantucci.png", 
        width: 1200, 
        height: 630,
        alt: "Victor Santucci's Portfolio",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jura.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}