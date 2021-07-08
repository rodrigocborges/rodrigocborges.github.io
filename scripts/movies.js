const baseGenres = [
  {
    id: 28,
    name: "Ação"
  },
  {
    id: 12,
    name: "Aventura"
  },
  {
    id: 16,
    name: "Animação"
  },
  {
    id: 35,
    name: "Comédia"
  },
  {
    id: 80,
    name: "Crime"
  },
  {
    id: 99,
    name: "Documentário"
  },
  {
    id: 18,
    name: "Drama"
  },
  {
    id: 10751,
    name: "Família"
  },
  {
    id: 14,
    name: "Fantasia"
  },
  {
    id: 36,
    name: "História"
  },
  {
    id: 27,
    name: "Terror"
  },
  {
    id: 10402,
    name: "Música"
  },
  {
    id: 9648,
    name: "Mistério"
  },
  {
    id: 10749,
    name: "Romance"
  },
  {
    id: 878,
    name: "Ficção científica"
  },
  {
    id: 10770,
    name: "Cinema TV"
  },
  {
    id: 53,
    name: "Thriller"
  },
  {
    id: 10752,
    name: "Guerra"
  },
  {
    id: 37,
    name: "Faroeste"
  }
];

const baseImgURL = '';

const headers = {
  Authorization: ''
}

const [upcoming, popular] = document.getElementsByTagName('button');

async function formatRequestData(data) {
  const topResults = data.results;
  const promises = topResults.map(({ poster_path }) => fetch(`http://image.tmdb.org/t/p/w342${poster_path}`));

  const resolvedImages = await Promise.all(promises);

  const innerHTML = topResults.map((
    { 
      adult, 
      genre_ids,
      overview,
      popularity,
      release_date,
      title,
      vote_average,
      vote_count 
    }, index) => {
    const genres = genre_ids.map(id => 
      `<div>
        ${baseGenres.find(g => g.id === id)['name']}
      </div>`
    ).join('');

    return `
      <div class="card-container">
        <div class="card-title-container">
          <h2>${title}</h2>
        </div>
        <img src="${resolvedImages[index].url}" alt="Imagem ${title}">
        <div class="card-content">
          <div class="card-genres">
            <h3>Gêneros</h3>
            <div class="genres-toats">
              ${genres}
            </div>
          </div>
          <div class="card-synopsis">
            <h3>Sinopse</h3>
            <p>${overview !== '' ? overview : 'Não há uma sinopse disponível...'}</p>
          </div>
          <div class="card-infos">
            <div>
              <div>
                <h3>Data de lançamento</h3>
                <p>${new Date(release_date).toLocaleDateString('pt-BR')}</p>
              </div>
              <div>
                <h3>Popularidade</h3>
                <p>${popularity}</p>
              </div>
            </div>
            <div>
              <div>
                <h3>Avaliação média</h3>
                <p>${vote_average === 0 ? '-' : vote_average}</p>
              </div>
              <div>
                <h3>Quantidade de votos</h3>
                <p>${vote_count === 0 ? '-' : vote_count}</p>
              </div>
            </div>
            <div>
              <h3>Adulto</h3>
              <p>${adult ? 'Sim' : 'Não'}</p>
            </div>
          </div>
        </div>
      </div>
    `
  }).join('');

  const [section] = document.getElementsByClassName('content-section');

  section.innerHTML = innerHTML;
}

async function upcomingClick() {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=pt-BR', { headers });
    const data = await response.json();
  
    await formatRequestData(data);
  } catch (error) {
    console.error(error);
  }
};

async function popularClick() {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR', { headers });
    const data = await response.json();
  
    await formatRequestData(data);
  } catch (error) {
    console.error(error);
  }
};
