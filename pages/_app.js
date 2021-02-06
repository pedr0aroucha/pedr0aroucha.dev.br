import Head from 'next/head';
import dynamic from 'next/dynamic';

import Header from '../src/components/patterns/Header';
import Footer from '../src/components/patterns/Footer';

import '../public/nprogress/styles.css';

const TopProgressBar = dynamic(
  () => {
    return import('../src/components/patterns/TopProgressBar');
  },
  { ssr: false }
);

import '../styles/globals.css';
import '../styles/components/Header.css';
import '../styles/components/Footer.css';

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <TopProgressBar />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Desenvolvedor de Software - Pedro Aroucha. Crio e desenvolvo soluções que facilitam sua vida. Pedro Lucas de Aroucha Monteiro - Anápolis Goiás."
        />
        <title>Pedro Aroucha</title>
        <link rel="icon" href="/pedr0_dev.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
