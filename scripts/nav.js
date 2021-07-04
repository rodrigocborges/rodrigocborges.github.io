const [body] = document.getElementsByTagName('body');
const [main] = document.getElementsByTagName('main');

const nav = document.createElement('nav');

const pathname = window.location.pathname;

const findActive = (path) => {
  return pathname === path ? 'isActive' : '';
}

const menuOptions = [
  {
    name: 'INÍCIO',
    path: '/'
  },
  {
    name: 'FILMES',
    path: '/filmes.html'
  },
  {
    name: 'SÉRIES',
    path: '/series.html'
  },
  {
    name: 'CONTATO',
    path: '/contato.html'    
  }
].map(({name, path}) => 
  `<li class="menu-item">
    <a href="${path}" class="${findActive(path)}">${name}</a>
  </li>
`)

nav.innerHTML = `
  <section class="hamburger">
    <div id="navbar" class="navigation" role="navigation">
      <input id="toggle" type="checkbox" />
      <label class="hamburger-label" for="toggle">
        <div class="top"></div>
        <div class="meat"></div>
        <div class="bottom"></div>
      </label>
    
      <div class="menu">
        <a class="link" href="/">Início</a>
        <a class="link" href="/filmes.html">Filmes</a>
        <a class="link" href="/series.html">Séries</a>
      </div>
    </div>
  </section>
  <section class="normal-menu">
    <div id="logo-container">
      <a href="/">
        <img src="/public/logo.svg" alt="Me Indica Aí Logo">
      </a>
    </div>
    <ul>
      ${menuOptions}
    </ul>
  </section>
`;

body.insertBefore(nav, main)