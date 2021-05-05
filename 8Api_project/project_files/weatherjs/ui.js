class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint= document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    console.log(weather);
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather.description;
    this.string.textContent = weather.main.temp + " Celsius";
    // this.icon.setAttribute('src', weather.icon);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`; 
    this.wind.textContent = `Wind speed: ${weather.wind.speed} m/s`;
  }
}