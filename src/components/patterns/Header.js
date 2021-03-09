import Link from 'next/link';

export default function Header() {
  function closeBar() {
    var menuButton = document.querySelector('#menuButton');
    if (menuButton) menuButton.click();
  }

  return (
    <header id="header">
      <div className="wrapper">
        <label id="menuButton" htmlFor="menu">
          {' '}
        </label>
        <input type="checkbox" name="menu" id="menu" />

        <nav>
          <main>
            <Link href="/">
              <a onClick={closeBar}>início</a>
            </Link>
            <Link href="/about-me">
              <a onClick={closeBar}>sobre</a>
            </Link>
            <Link href="/work">
              <a onClick={closeBar}>trabalhos</a>
            </Link>
            <Link href="/blog">
              <a onClick={closeBar}>blog</a>
            </Link>
            <Link href="/contact">
              <a onClick={closeBar}>contato</a>
            </Link>
          </main>
        </nav>
      </div>
    </header>
  );
}
