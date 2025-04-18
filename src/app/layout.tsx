import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YuXuan Lin (林育瑄, Tina Lin)｜NoZ Portfolio",
  description: "Hi，我是YuXuan Lin (林育瑄, Tina Lin)，這是我的前後端開發個人網站專案展示與個人網站。",
  keywords: [
    "作品集",
    "前端開發",
    "後端開發",
    "全端開發",
    "個人網站",
    "林育瑄",
    "YuXuan Lin",
    "Tina Lin",
    "Tina",
    "NoZ",
    "NoZ Portfolio"
  ],
  openGraph: {
    title: "YuXuan Lin's Portfolio",
    description: "展示個人專案與技能的網站",
    url: "https://noz.vercel.app/",
    siteName: "YuXuan Lin's Portfolio",
    images: [
      {
        url: "https://noz.vercel.app/NoZ_opengraph.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "zh-TW",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
        {/* google search console */}
        <meta name="google-site-verification" content="hrG7cYdeih23ZbxIYj-g4wlIzJ-Mnperayth55x0TsA" />
        {/* google analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V9RMHD1FLP"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-V9RMHD1FLP');
    `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}