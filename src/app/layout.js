import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "femboi.vip",
  description: "It is a biography site created by Klofrox, I change it when I get bored and I close it whenever I feel like it, so it is none of your business what this site is.",
  icons: {
    icon: '/hearth.svg',
    shortcut: '/hearth.svg',
    apple: '/hearth.svg',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-neutral-950">
      <body className="bg-neutral-950 min-h-screen">
        {children}
      </body>
    </html>
  );
}
