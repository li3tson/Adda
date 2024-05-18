import { CountriesAPI, WeatherAPI } from './api.js'
import { RenderCard, RenderDateCard } from './card.js'
import { paginationControls, state, update } from './pagination.js'

const cardWrapperElement  = document.getElementById('content__list')

const validCountriesList = [
  'France', 'Spain', 'United States', 'China', 'Italy', 'Mexico', 'United Kingdom',
  'Germany', 'Thailand', 'Turkey', 'Russia', 'Japan', 'Austria', 'Greece', 'Indonesia',
  'Croatia', 'Portugal', 'Israel', 'South Africa', 'Angola', 'Canada', 'Switzerland',
  'Brazil', 'India'
]

const countriesDataAPI = await CountriesAPI()
const countries        = countriesDataAPI.filter(item => validCountriesList.includes(item.name.common))

state.totalPages = Math.ceil(countries.length / state.perPage)

export const renderPageItems = {
  async create(item) {
    let capital = item.capital[0]
    let latlng  = item.capitalInfo.latlng

    let weatherDataAPI = await WeatherAPI(latlng)

    RenderDateCard(cardWrapperElement)

    if (weatherDataAPI.cod !== '404') {
      let temperature = Math.ceil(weatherDataAPI.main.temp)
      let weather     = weatherDataAPI.weather[0].description

      RenderCard(cardWrapperElement, capital, temperature, weather)
    }
  },

  update() {
    cardWrapperElement.innerHTML = ''

    let page              = state.currentPage - 1
    let start             = page * state.perPage
    let end               = start + state.perPage
    const paginatedItems  = countries.slice(start, end)

    paginatedItems.forEach(renderPageItems.create)
  }
}

function init() {
  update()
  paginationControls.createListeners()
}

init()

// nstl s<0-0>s && 01001000 01100101 01101100 01101100 01101111 00101100 00100000 01010111 01101111 01110010 01101100 01100100 00100001
