const apiKey = '6e6f9659fef62e5c5d1103979100d281'; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById('city').value;
  if (city === '') {
    document.getElementById('error-message').textContent = 'Please enter a city name.';
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod === '404') {
        document.getElementById('error-message').textContent = 'City not found.';
        document.getElementById('weather-info').style.display = 'none';
      } else {
        document.getElementById('error-message').textContent = '';
        document.getElementById('weather-info').style.display = 'block';
        document.getElementById('city-name').textContent = data.name;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
      }
    })
    .catch(error => {
      document.getElementById('error-message').textContent = 'Failed to fetch data. Try again later.';
    });
}
