const mainCards = [
  {
    "img": "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    "subtitle": "Filmes que não saem de moda",
    "url": "/trending/filmes-classicos.html",
  },
  {
    "img": "https://images.unsplash.com/photo-1601513445498-5dbffc8d5d5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80",
    "subtitle": "Terror: dos clássicos aos mais atuais",
    "url": "/trending/terror-lista.html",
  },
  {
    "img": "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80",
    "subtitle": "Lista para maratonar",
    "url": "/trending/lista-maratona.html",
  },
  {
    "img": "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80",
    "subtitle": "Netflix aumenta o catálogo, confira",
    "url": "/trending/netflix-catalogo.html",
  },
  {
    "img": "https://images.unsplash.com/photo-1593361351718-6b853f7b3431?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80",
    "subtitle": "Comparativo dos serviços de streaming",
    "url": "/trending/comparativo-streamings.html",
  },
  {
    "img": "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHR2JTIwc2hvd3N8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80",
    "subtitle": "Um pouco mais sobre Star Wars",
    "url": "/trending/mais-sobre-star-wars.html",
  }
]

const section1 = document.getElementById('section1');

section1.innerHTML = mainCards.map(({ img, subtitle, url }) => 
 `<a class="card" href=${url}>
    <img src=${img} alt="Cartão de notícia">
    <div id="subtitle">
      <p>${subtitle}</p>
    </div>
  </a>`
).join('');

const longCards = [
  {
    "img": "https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVyJTIwbWFufGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=60",
    "title": "O que podemos esperar do próximo Homem-Aranha?",
    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus laoreet iaculis nisl eget diam libero dui. Nullam urna enim sed turpis a magna sagittis. Posuere tellus quam hendrerit ultricies tincidunt. Massa sit elit tincidunt adipiscing. Quam vulputate a accumsan consequat, ac. Amet interdum arcu.",
    "url": "#",
  },
  {
    "img": "https://leakpt-a790.kxcdn.com/wp-content/uploads/2021/01/black.jpg",
    "title": "Enim egestas neque sed tristique aliquet malesuada. ",
    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus laoreet iaculis nisl eget diam libero dui. Nullam urna enim sed turpis a magna sagittis. Posuere tellus quam hendrerit ultricies tincidunt. Massa sit elit tincidunt adipiscing. Quam vulputate a accumsan consequat, ac. Amet interdum arcu.",
    "url": "#",
  },
  {
    "img": "/public/home/long-cards/man.png",
    "title": "Cras porta sit nulla amet quis diam facilisis nascetur.",
    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus laoreet iaculis nisl eget diam libero dui. Nullam urna enim sed turpis a magna sagittis. Posuere tellus quam hendrerit ultricies tincidunt. Massa sit elit tincidunt adipiscing. Quam vulputate a accumsan consequat, ac. Amet interdum arcu.",
    "url": "#",
  },
  {
    "img": "/public/home/long-cards/building.png",
    "title": "Viverra turpis cras lobortis urna auctor at tellus.",
    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus laoreet iaculis nisl eget diam libero dui. Nullam urna enim sed turpis a magna sagittis. Posuere tellus quam hendrerit ultricies tincidunt. Massa sit elit tincidunt adipiscing. Quam vulputate a accumsan consequat, ac. Amet interdum arcu.",
    "url": "#",
  }
];

const section2MainContainer = document.getElementById('section2-main-container');

section2MainContainer.innerHTML = longCards.map(({ img, title, subtitle, url }) => 
 `<div class="long-card-container">
    <img src=${img} alt="Cartão útlimas notícias">
    <div class="long-card-content">
      <h4 class="title">${title}</h4>
      <p class="synopsis">${subtitle}</p>
      <div id="read-more">
        <a href=${url}>Leia mais...</a>
      </div>
    </div>
  </div>`
).join('');