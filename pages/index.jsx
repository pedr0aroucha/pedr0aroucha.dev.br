import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  const router = useRouter();

  function playSound() {
    document.querySelector('audio').play();
  }

  function stopSound() {
    document.querySelector('audio').pause();
  }

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

      <img
        onMouseOver={playSound}
        onMouseLeave={stopSound}
        onClick={() => router.push('blog/hello-world')}
        src="pedr0_dev.png"
      />
      <audio src="/sounds/Kai Sa Palette 2_50k.mp3"></audio>
    </div>
  );
}
