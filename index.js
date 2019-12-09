const fetchData = async (searchTerm) => {
  const res = await axios.get('https://www.omdbapi.com/', {
    params: {
      apikey: 'c49531a8',
      s: searchTerm
    }
  })

  console.log(res.data)
}

const debounce = (func) => {
  let timeoutId

  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func()
    }, 1000)
  }
}

let timeoutId

const onInput = e => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  timeoutId = setTimeout(() => {
    fetchData(e.target.value)
  }, 500)
}

const input = document.querySelector('input')
input.addEventListener('input', onInput)