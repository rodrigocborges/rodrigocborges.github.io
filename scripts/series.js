const baseGenres = [
  {
    id: 10759,
    name: "Action & Adventure"
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
    id: 10762,
    name: "Kids"
  },
  {
    id: 9648,
    name: "Mistério"
  },
  {
    id: 10763,
    name: "News"
  },
  {
    id: 10764,
    name: "Reality"
  },
  {
    id: 10765,
    name: "Sci-Fi & Fantasy"
  },
  {
    id: 10766,
    name: "Soap"
  },
  {
    id: 10767,
    name: "Talk"
  },
  {
    id: 10768,
    name: "War & Politics"
  },
  {
    id: 37,
    name: "Faroeste"
  }
];

const [upcoming, popular] = document.getElementsByTagName('button');

const token = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGNjNmVkMzEwMzQyNGNkZDkzNzI0MWEyZjFiMDA5NyIsInN1YiI6IjYwZTYyNTdkY2QyMDQ2MDA1YzVmYjNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0paEQhuV_l_nlXwStyfkrGtAkwGKktTbbdXirV181TM`;

const headers = {
  Authorization: token
}

async function formatRequestData(data) {
  const topResults = data.results.filter(top => top.poster_path);
  const promises = topResults.map(({ poster_path }) => fetch(`http://image.tmdb.org/t/p/w342${poster_path}`));

  const resolvedImages = await Promise.all(promises);

  const innerHTML = topResults.map((
    { 
      first_air_date, 
      genre_ids,
      overview,
      popularity,
      name,
      origin_country,
      original_name,
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
          <h2>${name}</h2>
        </div>
        <img src="${resolvedImages[index] && resolvedImages[index].url}" alt="Imagem ${name}">
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
                <p>${new Date(first_air_date).toLocaleDateString('pt-BR')}</p>
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
              <div>
                <h3>Nome original</h3>
                <p>${original_name}</p>
              </div>
              <div>
                <h3>País de origem</h3>
                <p>${origin_country.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }).join('');

  const [section] = document.getElementsByClassName('content-section');

  section.innerHTML = innerHTML;
}

async function popularClick() {
  try {
    loadingDisabled(true);
    const response = await fetch('https://api.themoviedb.org/3/tv/popular?language=pt-BR&page=1', { headers });
    const data = await response.json();
    
    await formatRequestData(data);
    resetMainHeight();
  } catch (error) {
    console.error(error);
  } finally {
    loadingDisabled(false);
  }
};

function resetMainHeight() {
  const [main] = document.getElementsByTagName('main');

  main.style = 'height: auto;'
}

const oldNames = [];

function loadingDisabled(active) {
  const btn1 = document.getElementById('btn1');
  
  oldNames.push(btn1.innerText);
  
  if (active) {
    btn1.innerText = 'Carregando...';
    btn1.setAttribute('disabled', true);
  } else {
    btn1.removeAttribute('disabled');
    btn1.innerText = oldNames[0];
    oldNames = [];
  }
}