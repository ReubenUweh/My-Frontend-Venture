//JS for weather app

// 🌤️ Selecting important DOM elements
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector(".searchBtn");
const weatherInfo = document.querySelector("#weatherInfo");
const searchCity = document.querySelector("#searchCity");
const notFound = document.querySelector("#notFound");

// 🔍 Elements to display current weather details
const countryCapital = document.querySelector(".country-capital");
const temp = document.querySelector(".temp");
const condition = document.querySelector(".condition");
const humidity = document.querySelector(".humidity-txt");
const wind = document.querySelector(".wind-txt");
const weatherSummary = document.querySelector(".weatherSummary");
const date = document.querySelector(".date");

// 📅 Forecast container
const forecast = document.querySelector(".forecast");

// 🔐 API key for OpenWeatherMap (do not expose in production)
const apiKey = "732306cfd96dac6057fcfd3163de38c5";

// 📦 Event: When search button is clicked
searchBtn.addEventListener("click", () => {
  if (searchInput.value.trim() != "") {
    updateWeatherData(searchInput.value); // Fetch and display weather
  }
});

// 📦 Event: When Enter key is pressed in the input field
searchInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter" && searchInput.value.trim() != "") {
    updateWeatherData(searchInput.value); // Trigger search
  }
});

// 🌐 Fetch data from OpenWeatherMap API (weather or forecast)
async function fetchWeatherData(endPoint, city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
  const responseStatus = await fetch(apiUrl);
  return responseStatus.json();
}

// 🌤️ Return appropriate weather icon based on weather condition ID
function getWeatherIcon(id) {
  if (id <= 232) return "thunderstorm-removebg-preview.png";
  if (id <= 321) return "drizzle.png";
  if (id <= 531) return "rain.png";
  if (id <= 622) return "snow.png";
  if (id <= 781) return "mist.png";
  if (id <= 800) return "clear.png";
  return "clouds.png";
}

// 📆 Get formatted current date (e.g., "Sat, 14 Jun")
function getCurrentDate() {
  const currentDate = new Date();
  const dateOptions = {
    weekday: "short",
    day: "2-digit",
    month: "short",
  };
  return currentDate.toLocaleDateString("en-GB", dateOptions);
}

// 🔄 Main function to update current weather and forecast
async function updateWeatherData(city) {
  const weatherData = await fetchWeatherData("weather", city);

  // ❌ If city not found or request failed
  if (weatherData.cod != 200) {
    notFound.style.display = "flex";
    searchCity.style.display = "none";
    weatherInfo.style.display = "none";
    return;
  }

  // ✅ Destructure useful weather data
  const {
    name,
    main: { temp: temperature, humidity: humidityValue },
    weather: [{ id, main: conditionText }],
    wind: { speed: windSpeed },
  } = weatherData;

  // 🖼️ Update UI with weather data
  countryCapital.textContent = name;
  temp.textContent = `${Math.round(temperature)}°C`;
  condition.textContent = conditionText;
  humidity.textContent = `${humidityValue} %`;
  wind.textContent = `${windSpeed} km/h`;
  date.textContent = getCurrentDate();
  weatherSummary.src = `${getWeatherIcon(id)}`;

  // 📊 Update forecast for next few days
  await forecastData(city);

  // 🖼️ Show weather section, hide others
  showDisplayPage(weatherInfo);

  // 💾 Store weather data in localStorage
  localStorage.setItem("lastWeatherData", JSON.stringify(weatherData));
}

// 📊 Fetch and process forecast data (5-day, every 3 hours)
async function forecastData(city) {
  const forecastData = await fetchWeatherData("forecast", city);

  forecast.innerHTML = ""; // Clear previous forecast
  const seenDates = new Set(); // Avoid duplicate days

  // Loop through forecast list (every 3 hours)
  forecastData.list.forEach((forecastWeather) => {
    const [dateStr, timeStr] = forecastWeather.dt_txt.split(" "); // Split datetime

    // ⏰ Only take the first entry for each date, excluding 12:00
    if (timeStr !== "12:00:00" && !seenDates.has(dateStr)) {
      seenDates.add(dateStr);
      updateForecastItems(forecastWeather); // Add to UI
    }
  });

  // 💾 Store last searched city
  localStorage.setItem("lastSearchedCity", city);
}

// ➕ Create and append one forecast card
function updateForecastItems(weatherData) {
  const {
    dt_txt: date,
    weather: [{ id }],
    main: { temp },
  } = weatherData;

  const dateTaken = new Date(date);
  const dateOptions = { day: "2-digit", month: "short" };
  const dateResult = dateTaken.toLocaleDateString("en-GB", dateOptions);

  // ⛅ Forecast card HTML
  const forecastInfo = `
        <div class="forecast-info">
            <h5>${dateResult}</h5>
            <img src="${getWeatherIcon(id)}" alt="" width="145px">
            <h5 class="temp">${Math.round(temp)}°C</h5>
        </div>
  `;
  forecast.insertAdjacentHTML("beforeend", forecastInfo); // Append to forecast
}

// 🎯 Control which section to display (weather, search, or not found)
function showDisplayPage(rowToShow) {
  const allRow = [weatherInfo, searchCity, notFound];
  allRow.forEach((row) => (row.style.display = "none"));
  rowToShow.style.display = "flex";
}

// 🚀 On page load: check if data is stored in localStorage
document.addEventListener("DOMContentLoaded", () => {
  const storedWeather = JSON.parse(localStorage.getItem("lastWeatherData"));
  const lastCity = localStorage.getItem("lastSearchedCity");

  // 📝 If we have both weather and city, show them
  if (storedWeather && lastCity) {
    displayStoredWeather(storedWeather);
    forecastData(lastCity);
    showDisplayPage(weatherInfo);
  } else {
    // 🔍 Show search page if no data is saved
    showDisplayPage(searchCity);
  }
});

// 🧾 Render previously stored weather data on UI
function displayStoredWeather(data) {
  const {
    name,
    main: { temp: temperature, humidity: humidityValue },
    weather: [{ id, main: conditionText }],
    wind: { speed: windSpeed },
  } = data;

  countryCapital.textContent = name;
  temp.textContent = `${Math.round(temperature)}°C`;
  condition.textContent = conditionText;
  humidity.textContent = `${humidityValue} %`;
  wind.textContent = `${windSpeed} km/h`;
  weatherSummary.src = `${getWeatherIcon(id)}`;
  date.textContent = getCurrentDate();
}
