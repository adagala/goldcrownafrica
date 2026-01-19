import type { Metadata } from "next";
import "../css/tailwind.css";
import WhatsApp from "../components/whatsapp";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Providers } from "./providers";
import { siteConfig } from "../lib/config";

export const metadata: Metadata = {
  metadataBase: new URL("https://goldcrownafrica.com"),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "gold trading",
    "diamonds",
    "copper cathodes",
    "mineral sourcing",
    "Africa mining",
    "precious metals",
    "certified diamonds",
    "gold refining",
    "assaying services",
    "mineral mining",
    "Gold Crown Africa",
  ],
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="lg:px-20">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20 lg:pt-24">{children}</main>
            <WhatsApp />
          </div>
        </Providers>
      </body>
    </html>
  );
}
