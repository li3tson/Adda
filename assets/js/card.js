import { iconChecker } from './iconChecker.js'

function RenderCard( targetContainer, capital, temperature, weather) {
  const capitalCityNameShortener =
    capital.length >= 10 ? `${capital.slice(0, 9)}...` : capital

  const listItemElement = document.createElement('li')
  listItemElement.classList.add('list__item')

  let background = `./assets/images/${capital}.webp`

  listItemElement.style.backgroundImage     = `url('${background}')`
  listItemElement.style.backgroundRepeat    = 'no-repeat'
  listItemElement.style.backgroundPosition  = 'center center'
  listItemElement.style.backgroundSize      = 'cover'

  const weatherIconElement = document.createElement('img')
  weatherIconElement.classList.add('item__icon')
  weatherIconElement.src    = iconChecker(weather)
  weatherIconElement.alt    = weather
  weatherIconElement.title  = weather

  const temperatureElement = document.createElement('p')
  temperatureElement.classList.add('bottom__temperature')
  temperatureElement.title        = 'Temperature'
  temperatureElement.textContent  = temperature

  const temperatureUnitElement = document.createElement('sup')
  temperatureUnitElement.classList.add('temperature__celsius')
  temperatureUnitElement.textContent = '°C'

  const capitalElement = document.createElement('p')
  capitalElement.classList.add('bottom__state')
  capitalElement.title        = capital
  capitalElement.textContent  = capitalCityNameShortener

  const bottomSpanElement = document.createElement('span')
  bottomSpanElement.classList.add('item__bottom')

  temperatureElement.appendChild(temperatureUnitElement)

  bottomSpanElement.appendChild(temperatureElement)
  bottomSpanElement.appendChild(capitalElement)

  listItemElement.appendChild(weatherIconElement)
  listItemElement.appendChild(bottomSpanElement)

  targetContainer.appendChild(listItemElement)
}

function RenderDateCard(targetContainer) {
  const listItemElement = document.createElement('li')
  listItemElement.classList.add('list__item')
  listItemElement.setAttribute('id', 'list__item--date')

  const textElement = document.createElement('p')
  textElement.classList.add('item__text')
  textElement.textContent = 'Today'

  listItemElement.appendChild(textElement)

  targetContainer.appendChild(listItemElement)
}

export { RenderCard, RenderDateCard }
