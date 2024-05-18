async function CountriesAPI() {
  const data = fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .catch((error) => console.log(error))

  return await data
}

async function WeatherAPI(latlng) {
  const API_KEY = 'a50bb90c6ea05c834220da4dc30e7a7a'

  const data =
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&units=metric&appid=${API_KEY}`)
      .then((response) => response.json())
      .catch((error) => console.log(error))

  return await data
}

export { CountriesAPI, WeatherAPI }
