import type { Metadata } from "next";
import { Jura, Geist } from "next/font/google";
import "./globals.css";

const jura = Jura({
  variable: "--font-jura", // Define a variável CSS para a fonte
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio Víctor Santucci",
  description: "O meu portfólio online",
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
