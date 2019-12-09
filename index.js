const fetchData = async (searchTerm) => {
  const res = await axios.get('https://www.omdbapi.com/', {
    params: {
      apikey: 'c49531a8',
      s: searchTerm
    }
  })

  console.log(res.data)
}

const debounce = (func, delay = 1000) => {
  let timeoutId

  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args)
    }, delay)
  }
}

const onInput = e => {
  fetchData(e.target.value)
}

const input = document.querySelector('input')
input.addEventListener('input', debounce(onInput, 500))