import type { Metadata } from "next";
import "../css/tailwind.css";
import WhatsApp from "../components/whatsapp";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Gold Crown Africa | Premium Mineral Sourcing & Services",
  description:
    "Gold Crown Africa is the leading mineral sourcing company in Africa, specializing in gold, diamonds, and copper cathodes with ethical practices and professional services.",
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
