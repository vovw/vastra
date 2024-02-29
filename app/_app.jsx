import GlobalStyles from "./GlobalStyles";
import Head from 'next/head';

function Home({ Component, pageProps }) {
  return (
    <>
      <Head>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default Home;