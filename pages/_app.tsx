import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import WhatsApp from "../components/whatsapp";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <WhatsApp />
    </ThemeProvider>
  );
}

export default MyApp;
