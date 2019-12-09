const fetchData = async () => {
  const res = await axios.get('https://www.omdbapi.com/', {
    params: {
      apikey: 'c49531a8',
      s: 'avengers'
    }
  })

  console.log(res.data)
}

fetchData()