import "@/styles/style.scss";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pixel & Hue</title>
        <meta
          name="description"
          content="creative agency landing page with sass and nextjs"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
