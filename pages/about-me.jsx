import styles from '../styles/pages/About_me.module.css';

export default function About_me() {
  return (
    <div className={styles.about_me}>
      <h1>sobre </h1>

      <div className={styles.I}>
        <p>
          <b>Olá</b>, Sou o Pedro, escrevo códigos desde 2017, mas entrei no
          mercado em 2019. Faço vários trabalhos como freelancer, mas estou
          atualmente trabalhando na Soft News - Anápolis Goiás como
          Desenvolvedor Jr e na Integra como Desenvolvedor Full Stack. <br />
          Quando não estou no computador gosto de tocar violão ou qualquer outro
          instrumento que estiver disponível, ver séries, jogar online ou
          praticar algum esporte.
          <br />
          <br />
          <b>Conhecimentos sólido em: </b>
          Desenvolvimento Web, Código Limpo, Arquitetura Limpa, SOLID, REST FULL
          API, Regexp, Programação Orientada a Objetos e Programação Funcional.
          <br /> <br />
          <b>Eu estou estudando:</b>
          UI/UX designer, SEO, Testes de Software e Designer Patterns.
        </p>
      </div>
      <div className={styles.skills}>
        <h1>Pilha de Tecnologias</h1>
        <ul>
          <div className={styles.skillCard} name="javascript">
            <figure>
              <img src="https://img.icons8.com/color/2x/javascript.png" />
              <figcaption>Javascript</figcaption>
            </figure>
          </div>
          <div className={styles.skillCard} name="sql">
            <figure>
              <img src="https://img.icons8.com/ios-filled/2x/sql.png" />
              <figcaption>SQL</figcaption>
            </figure>
          </div>
          <div className={styles.skillCard} name="python">
            <figure>
              <img src="https://img.icons8.com/color/2x/python.png" />
              <figcaption>Python</figcaption>
            </figure>
          </div>
          <div className={styles.skillCard} name="html">
            <figure>
              <img src="https://img.icons8.com/color/2x/html-5.png" />
              <figcaption>HTML5</figcaption>
            </figure>
          </div>
          <div className={styles.skillCard} name="css">
            <figure>
              <img src="https://img.icons8.com/color/2x/css3.png" />
              <figcaption>CSS3</figcaption>
            </figure>
          </div>
        </ul>
      </div>
      <div className={styles.tools}>
        <h1>Bibliotecas, Frameworks e outras Ferramentas</h1>
        <ul>
          <div className={styles.skillCard} name="react">
            <figure>
              <img src="https://img.icons8.com/officel/2x/react.png" />
              <figcaption>ReactJS</figcaption>
            </figure>
          </div>
          <div className={styles.skillCard} name="nodejs">
            <figure>
              <img src="https://img.icons8.com/color/2x/nodejs.png" />
              <figcaption>NodeJS</figcaption>
            </figure>
          </div>
          <div className={styles.skillCard} name="angularjs">
            <figure>
              <img src="https://img.icons8.com/color/2x/angularjs.png" />
              <figcaption>Angular</figcaption>
            </figure>
          </div>
          <div className={styles.skillCard} name="django">
            <figure>
              <img src="https://img.icons8.com/color/2x/django.png" />
              <figcaption>Django</figcaption>
            </figure>
          </div>
          <div className={styles.skillCard} name="figma">
            <figure>
              <img src="https://img.icons8.com/windows/2x/figma.png" />
              <figcaption>Figma</figcaption>
            </figure>
          </div>
        </ul>
      </div>
    </div>
  );
}
