import Link from 'next/link';

export default function Header() {
  function closeBar() {
    var menuButton = document.querySelector('#menuButton');
    if (menuButton) menuButton.click();
  }

  return (
    <header>
      <div className="wrapper">
        <label id="menuButton" htmlFor="menu">
          {' '}
        </label>
        <input type="checkbox" name="menu" id="menu" />

        <nav>
          <Link href="/">pedr0aroucha</Link>
          <main>
            <Link href="/about-me">
              <a onClick={closeBar}>sobre</a>
            </Link>
            <Link href="/work">
              <a onClick={closeBar}>trabalhos</a>
            </Link>
            <Link href="/contact">
              <a onClick={closeBar}>contato</a>
            </Link>
            <Link href="/blog">
              <a onClick={closeBar}>blog</a>
            </Link>
          </main>
          <div>
            <a href="https://instagram.com/pedr0aroucha" target="_blank">
              <img src="/images/instagram.png" alt="instagram logo" />
            </a>
            <a href="https://github.com/pedr0aroucha" target="_blank">
              <img src="/images/github.png" alt="github logo" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
