import { GrLinkedin, GrInstagram, GrGithub } from 'react-icons/gr';

import styles from '../../../styles/components/Social.module.css';

export default function Header() {
  return (
    <nav className={styles.social}>
      <a href="https://instagram.com/pedr0aroucha" target="_blank">
        <GrInstagram />
      </a>
      <a href="https://github.com/pedr0aroucha" target="_blank">
        <GrGithub />
      </a>
      <a href="https://www.linkedin.com/in/pedr0aroucha/" target="_blank">
        <GrLinkedin />
      </a>
    </nav>
  );
}
