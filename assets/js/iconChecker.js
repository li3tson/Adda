function iconChecker(description) {
  switch(description) {
    case 'clear sky':
      return './assets/icons/clear_sky.png'
    // Clouds
    case 'few clouds':
    case 'few clouds: 11-25%':
      return './assets/icons/few_cloud.png'
    case 'broken clouds':
    case 'broken clouds: 51-84%':
      return './assets/icons/broken_clouds.png'
    case 'scattered clouds':
    case 'scattered clouds: 25-50%':
      return './assets/icons/scattered_clouds.png'
    case 'overcast clouds':
    case 'overcast clouds: 85-100%':
      return './assets/icons/overcast_clouds.png'
    // Snow
    case 'snow':
    case 'sleet':
    case 'light snow':
    case 'heavy snow':
    case 'shower snow':
    case 'shower sleet':
    case 'rain and snow':
    case 'heavy shower snow':
    case 'light shower snow':
    case 'light shower sleet':
    case 'light rain and snow':
      return './assets/icons/snow.png'
    // Drizzle
    case 'drizzle':
    case 'drizzle rain':
    case 'shower drizzle':
    case 'shower rain and drizzle':
    case 'light intensity drizzle':
    case 'heavy intensity drizzle':
    case 'light intensity drizzle rain':
    case 'heavy intensity drizzle rain':
    case 'heavy shower rain and drizzle':
      return './assets/icons/drizzle.png'
    // Rain
    case 'rain':
    case 'squalls':
    case 'light rain':
    case 'shower rain':
    case 'extreme rain':
    case 'moderate rain':
    case 'freezing rain ':
    case 'very heavy rain':
    case 'ragged shower rain':
    case 'heavy intensity rain':
    case 'light intensity shower rain':
    case 'heavy intensity shower rain':
      return './assets/icons/rain.png'
    // Thunderstorm
    case 'thunderstorm':
    case 'heavy thunderstorm':
    case 'ragged thunderstorm':
    case 'thunderstorm with rain':
    case 'thunderstorm with drizzle':
    case 'thunderstorm with light rain':
    case 'thunderstorm with heavy rain':
    case 'thunderstorm with light drizzle':
    case 'thunderstorm with heavy drizzle':
      return './assets/icons/thunderstorm.png'
    // Atmosphere
    case 'mist':
      return './assets/icons/mist.png'
    case 'fog':
      return './assets/icons/fog.png'
    case 'tornado':
      return './assets/icons/tornado.png'
    case 'smoke':
      return './assets/icons/smoke.png'
    case 'volcanic ash':
      return './assets/icons/volcano.png'
    case 'haze':
    case 'dust':
    case 'sand':
    case 'sand/dust whirls':
      return './assets/icons/dust.png'
    default:
      return './assets/icons/sun.png'
  }
}

export { iconChecker }
