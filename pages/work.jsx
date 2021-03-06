import { FiArrowDown } from 'react-icons/fi';
import styles from '../styles/pages/Work.module.css';

export default function Work() {
  return (
    <div className={styles.work}>
      <h1>portfólio</h1>

      <p>meus trabalhos</p>

      <a href="#works">
        <FiArrowDown />
      </a>

      <div className={styles.works} id="works">
        <a
          target="_blank"
          href="https://guilhermefotos.online"
          className={styles.item}
        >
          <span> Gulherme Fotógrafo </span>
          <img
            src="/images/works/guilhermefotos.online.png"
            alt="guilhermefotos"
          />
        </a>
      </div>
    </div>
  );
}
