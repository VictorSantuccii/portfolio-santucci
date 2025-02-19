import type { Metadata } from "next";
import { Jura, Geist, Poppins, Quicksand, Pacifico, Geist_Mono } from "next/font/google";
import "./globals.css";

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const quicksand = Quicksand({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-quicksand',
});

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio de Víctor Santucci",
  description: "Conheça um pouco mais da minha experiência profissional como um desenvolvedor full stack web.",
  icons: {
    icon: '/icon.png'
  },
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
      <body className={`${jura.variable} ${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${quicksand.variable} ${pacifico.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}