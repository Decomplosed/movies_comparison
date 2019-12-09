const fetchData = async (searchTerm) => {
  const res = await axios.get('https://www.omdbapi.com/', {
    params: {
      apikey: 'c49531a8',
      s: searchTerm
    }
  })

  console.log(res.data)
}

const input = document.querySelector('input')
input.addEventListener('input', (e) => {
  fetchData(e.target.value)
})