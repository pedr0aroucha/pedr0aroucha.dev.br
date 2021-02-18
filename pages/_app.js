import Head from 'next/head';
import dynamic from 'next/dynamic';

import Header from '../src/components/patterns/Header';
import Footer from '../src/components/patterns/Footer';
import Social from '../src/components/patterns/Social';

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
        <meta httpEquiv="Content-Type" charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Desenvolvedor de Software - Pedro Aroucha. Crio e desenvolvo soluções que facilitam sua vida. Pedro Lucas de Aroucha Monteiro - Anápolis Goiás."
        />
        <meta
          name="copyright"
          content="Feito por Pedro Lucas de Aroucha Monteiro"
        />
        <meta
          name="keywords"
          content="Programador, Web, sites, websites, Desenvolvedor,
          Desenvolvedor Web, Programador JavaScript, 
          Programador Python, Programador Web"
        />
        <meta
          name="DOC.title"
          content="Pedro Aroucha - Programador Web - Desenvolvedor de Software"
        />
        <title>Pedro Aroucha</title>
        <link rel="icon" href="/pedr0_dev.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Social />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
