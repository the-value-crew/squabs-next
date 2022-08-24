import Head from "next/head";
import Script from "next/script";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Squabs</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {children}

      <Footer>
      </Footer>
    </>
  );
}
