// script.js
async function getWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'your_api_key_here'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById('weather-result').innerHTML = "<p>City not found.</p>";
            return;
        }

        const weatherResult = `
            <p><strong>City:</strong> ${data.name}</p>
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;

        document.getElementById('weather-result').innerHTML = weatherResult;
    } catch (error) {
        document.getElementById('weather-result').innerHTML = "<p>Error fetching data.</p>";
    }
}
