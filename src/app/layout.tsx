import type { Metadata } from "next";
import {
  Jura,
  Geist,
  Poppins,
  Quicksand,
  Pacifico,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
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
  title: "Víctor Santucci | Dev",
  description:
    "Conheça um pouco mais da minha experiência profissional como um desenvolvedor full stack web.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    images: [
      {
        url: "/victor-dev-bg.svg",
        width: 1200,
        height: 630,
        alt: "Victor Santucci's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/victor-dev-bg.svg",
        width: 1200,
        height: 630,
        alt: "Victor Santucci's Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${jura.variable} ${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${quicksand.variable} ${pacifico.variable} antialiased`}
      >
        <div className="relative min-h-screen">
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat opacity-[0.04] md:opacity-[0.28]"
            style={{ backgroundImage: "url('/victor-dev-bg.svg')" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(14,165,164,0.12),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(2,132,199,0.10),transparent_32%),linear-gradient(180deg,rgba(248,250,252,0.94),rgba(241,245,249,0.96))]"
          />
          {children}
        </div>
      </body>
    </html>
  );
}
