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
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,500;1,600;1,700;1,800;1,900&display=swap"
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
