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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/pedr0_dev.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <meta charSet="utf-8" />
        <meta name="language" content="pt-BR" />
        <title>Pedro Aroucha - Desenvolvedor Web</title>
        <meta
          name="description"
          content="Desenvolvo e crio soluções de forma rápida, simplificada, funcional e eficiente que facilitam sua vida !!!"
        />
        <meta name="robots" content="all" />
        <meta name="author" content="Pedro Aroucha" />
        <meta
          name="keywords"
          content="pedr0aroucha. programador, web, sites, sistemas web, SEO, API, integrações, Pedro Aroucha, desenvolvimento de software, códigos, algoritmos, ciência da computação, engenharia de software, engenharia da computação, programador web"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pedr0aroucha.dev.br" />
        <meta property="og:title" content="Pedro Aroucha - Desenvolvedor Web" />
        <meta
          property="og:image"
          content="https://github.com/pedr0aroucha.png"
        />
        <meta
          property="og:description"
          content="Desenvolvo e crio soluções de forma rápida, simplificada, funcional e eficiente que facilitam sua vida !!!"
        />

        <meta property="article:author" content="Pedro Aroucha" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@pedr0aroucha" />
        <meta name="twitter:title" content="pedr0aroucha" />
        <meta name="twitter:creator" content="@pedr0aroucha" />
        <meta
          name="twitter:description"
          content="Desenvolvo e crio soluções de forma rápida, simplificada, funcional e eficiente que facilitam sua vida !!!"
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
