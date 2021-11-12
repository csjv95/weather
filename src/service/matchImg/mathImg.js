const matchImg = (weatherNum) => {
  const thunderstorm = /[200-299]/;
  const drizzle = /[300-399]/;
  const rain = /[500-599]/;
  const snow = /[600-699]/;
  const atmosphere = /[700-799]/;

  if (thunderstorm.test(weatherNum)) {
    return "https://openweathermap.org/img/wn/11d@2x.png";
  } else if (drizzle.test(weatherNum)) {
    return "https://openweathermap.org/img/wn/09d@2x.png";
  } else if (rain.test(weatherNum)) {
    return "https://openweathermap.org/img/wn/10d@2x.png";
  } else if (snow.test(weatherNum)) {
    return "https://openweathermap.org/img/wn/13d@2x.png";
  } else if (atmosphere.test(weatherNum)) {
    return "https://openweathermap.org/img/wn/50d@2x.png";
  } else {
    return "not recording weather num";
  }
};

export default matchImg;
