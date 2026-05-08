async function getWeather(event) {
    event.preventDefault();
    const cityInput = document.getElementById('city');
    const city = cityInput.value.trim();
    const resultDiv = document.getElementById('weatherResult');
    if (!city) {
      resultDiv.textContent = "Please enter a city.";
      return;
    }
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'; 
     const apiKey = `eb26f71e736fc2957719c54fa61f617b`; 
    const url = `${baseURL}?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
    resultDiv.textContent = "Fetching weather data...";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const weatherData = await response.json();
      console.log(weatherData);
      const { name, main, weather } = weatherData;
      resultDiv.textContent=`
        Weather in: ${name}
       ${weather[0].description}
       Temperature: ${main.temp}°C
       Humidity: ${main.humidity}%`
    //   resultDiv.textContent = `Weather in ${city}: ${weatherData.weather[0]} - ${weatherData.temperature}°C`;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      resultDiv.textContent = `Error: ${error.message}`;
    }
  }
//   function displayWeather(data) {
//     const { name, main, weather } = data;
//     document.getElementById().innerHTML = 
//       `<h2>${name}</h2>
//       <p>${weather[0].description}</p>
//       <p>Temperature: ${main.temp}°C</p>
//       <p>Humidity: ${main.humidity}%</p>`
//   }

//   const baseURL = 'https://api.openweathermap.org/data/2.5/weather'; 
//     const apiKey = `eb26f71e736fc2957719c54fa61f617b`; 
//     const url = `${baseURL}?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;