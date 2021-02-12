import { GrInstagram, GrGithub } from 'react-icons/gr';

export default function Footer() {
  return (
    <footer>
      <div>
        <a href="https://instagram.com/pedr0aroucha" target="_blank">
          <GrInstagram />
        </a>
        <a href="https://github.com/pedr0aroucha" target="_blank">
          <GrGithub />
        </a>
      </div>
      <p>todos os direitos reservados</p>
    </footer>
  );
}
