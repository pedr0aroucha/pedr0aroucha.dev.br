import Link from 'next/link';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <div>
        <h1>Desenvolvedor de Software</h1>
        <p>
          Desenvolvo e crio soluções de forma rápida, simplificada, funcional e
          eficiente que facilitam sua vida !!!
        </p>

        <Link href="/contact">Falar com Pedro</Link>
      </div>

      <img src="pedr0_dev.png" />
    </div>
  );
}
