import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import WhatsApp from "../components/whatsapp";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 lg:pt-24">
          <Component {...pageProps} />
        </main>
        <WhatsApp />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
