function getWeather() {
  const apiKey = "8847319cee15d94eca2a8d1354c6b478"; // Replace with your actual API key
  const cityInput = document.getElementById("cityInput");
  const cityName = cityInput.value.trim();
  const weatherInfo = document.getElementById("weatherInfo");

  // Check if the input is empty
  if (cityName === "") {
    weatherInfo.innerText = "Please enter a city name.";
    return;
  }

  // Fetch weather data from the API
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        const weatherMain = data.weather[0].main;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;

        // Display weather information
        weatherInfo.innerHTML = `
            <h2>${cityName}</h2>
            <p>Weather: ${weatherMain}</p>
            <p>Temperature: ${temperature}°C</p>
            <p>Humidity: ${humidity}%</p>
          `;
      } else {
        weatherInfo.innerText = "City not found.Please try again.";
      }
    })
    .catch((error) => {
      weatherInfo.innerText = "An error occurred. Please try again later.";
      console.error(error);
    });
}
