const [_body] = document.getElementsByTagName('body');

const footer = document.createElement('footer');

footer.innerHTML = `
  <div id="footer-contact">
    <div>
      <a href="/contato.html" class="footer-text">Contato</a>
      <a href="#" class="footer-text">Termos</a>
      <a href="#" class="footer-text">Privacidade</a>
    </div>
    <div id="trademark">${new Date().getFullYear()} MeIndicaAi</div>
  </div>
`;

_body.append(footer);