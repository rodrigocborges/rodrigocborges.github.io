const mainCards = [
  {
    "img": "/public/home/main-cards/madmax.png",
    "subtitle": "Filmes mais comentados em junho"
  },
  {
    "img": "/public/home/main-cards/it.png",
    "subtitle": "IT 3 pode realmente acontecer?"
  },
  {
    "img": "/public/home/main-cards/remote.png",
    "subtitle": "Lista para maratonar"
  },
  {
    "img": "/public/home/main-cards/netflix.png",
    "subtitle": "Netflix aumenta o catálogo, confira"
  },
  {
    "img": "/public/home/main-cards/hollywood.png",
    "subtitle": "O que está por vir na terra dos filmes?"
  },
  {
    "img": "/public/home/main-cards/thanos.png",
    "subtitle": "Thanos, um vilão que marcou todos"
  }
]

const section1 = document.getElementById('section1');

section1.innerHTML = mainCards.map(({ img, subtitle }) => 
 `<div class="card">
    <img src=${img} alt="Cartão de notícia">
    <div id="subtitle">
      <p>${subtitle}</p>
    </div>
</div>`
).join('');

const longCards = [
  {
    "img": "/public/home/long-cards/spiderman.png",
    "title": "O que podemos esperar do próximo Homem-Aranha?",
    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus laoreet iaculis nisl eget diam libero dui. Nullam urna enim sed turpis a magna sagittis. Posuere tellus quam hendrerit ultricies tincidunt. Massa sit elit tincidunt adipiscing. Quam vulputate a accumsan consequat, ac. Amet interdum arcu."
  },
  {
    "img": "/public/home/long-cards/random.png",
    "title": "Enim egestas neque sed tristique aliquet malesuada. ",
    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus laoreet iaculis nisl eget diam libero dui. Nullam urna enim sed turpis a magna sagittis. Posuere tellus quam hendrerit ultricies tincidunt. Massa sit elit tincidunt adipiscing. Quam vulputate a accumsan consequat, ac. Amet interdum arcu."
  },
  {
    "img": "/public/home/long-cards/man.png",
    "title": "Cras porta sit nulla amet quis diam facilisis nascetur.",
    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus laoreet iaculis nisl eget diam libero dui. Nullam urna enim sed turpis a magna sagittis. Posuere tellus quam hendrerit ultricies tincidunt. Massa sit elit tincidunt adipiscing. Quam vulputate a accumsan consequat, ac. Amet interdum arcu."
  },
  {
    "img": "/public/home/long-cards/building.png",
    "title": "Viverra turpis cras lobortis urna auctor at tellus.",
    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus laoreet iaculis nisl eget diam libero dui. Nullam urna enim sed turpis a magna sagittis. Posuere tellus quam hendrerit ultricies tincidunt. Massa sit elit tincidunt adipiscing. Quam vulputate a accumsan consequat, ac. Amet interdum arcu."
  }
];

const section2MainContainer = document.getElementById('section2-main-container');

section2MainContainer.innerHTML = longCards.map(({ img, title, subtitle }) => 
 `<div class="long-card-container">
    <img src=${img} alt="Cartão útlimas notícias">
    <div class="long-card-content">
      <h4 class="title">${title}</h4>
      <p class="synopsis">${subtitle}</p>
      <div id="read-more">
        <a href="#">Leia mais...</a>
      </div>
  </div>
</div>`
).join('');