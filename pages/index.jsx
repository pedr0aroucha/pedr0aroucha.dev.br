import Link from 'next/link';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Desenvolvedor de Software</h1>
      <Link href="about-me">Ver mais</Link>
      <main>
        <div>
          <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
          <h1>pedr0aroucha</h1>
        </div>
        <p>
          Desenvolvo e crio soluções de forma rápida, simplificada, funcional e
          eficiente que facilitam sua vida !!!
        </p>

        <a>Falar Pedro</a>
      </main>
    </div>
  );
}
