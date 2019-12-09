const fetchData = async (searchTerm) => {
  const res = await axios.get('https://www.omdbapi.com/', {
    params: {
      apikey: 'c49531a8',
      s: searchTerm
    }
  })

  return res.data.Search
}

const onInput = async e => {
  const movies = await fetchData(e.target.value)

  for (let movie of movies) {
    const div = document.createElement('div')

    div.innerHTML = `
      <img src="${movie.Poster}" />
      <h1>${movie.Title}</h1>

    `

    document.querySelector('#target').appendChild(div)
  }
}

const input = document.querySelector('input')
input.addEventListener('input', debounce(onInput, 500))