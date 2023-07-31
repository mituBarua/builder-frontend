import "@/styles/globals.css";
import Navbar from "@/components/Layout/Navbar";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/Layout/Footer";
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer/>
      </>
    </SessionProvider>
  );
}
