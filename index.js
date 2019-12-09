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
  console.log(movies)
}

const input = document.querySelector('input')
input.addEventListener('input', debounce(onInput, 500))