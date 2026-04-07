import "./globals.css";
import Navbar from "./components/Navbar";
import type { ReactNode } from "react";
import Footer from "./components/Footer";

export const metadata = {
  title: "Learn Italiano with Sonia",
  description: "Learn Italian with Sonia in Urdu & Hindi.",
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V012XKZGQK"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V012XKZGQK');
            `,
          }}
        />
      </head>
      <body className="bg-slate-950 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
