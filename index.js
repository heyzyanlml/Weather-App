const searchInput = document.querySelector(".search__input");
const locationButton = document.querySelector(".location__button");
const currentWeatherDiv = document.querySelector(".current-weather");
const hourlyWeatherList = document.querySelector(".hourly-weather__list");

const api_Key = "350662a539d94d74b3970520243009";

//Weather code for changing custom icons
const weatherCodes = {
  clear: [1000],
  clouds: [1003, 1006, 1009],
  mist: [1030, 1135, 1147],
  rain: [
    1063, 1150, 1153, 1168, 1171, 1180, 1183, 1198, 1201, 1240, 1243, 1246,
    1273, 1276,
  ],
  moderate_heavy_rain: [1186, 1189, 1192, 1195, 1243, 1246],
  snow: [
    1066, 1069, 1072, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222,
    1225, 1237, 1249, 1252, 1255, 1258, 1261, 1264, 1279, 1282,
  ],
  thunder: [1087, 1279, 1282],
  thunder_rain: [1273, 1276],
};

// Show and Hide 'No Result' message
const showNoResult = () => {
  const noResults = document.querySelector(".no-results");
  const weatherSection = document.querySelector(".weather");

  noResults.classList.add("no-results_active");
  weatherSection.classList.add("weather_hidden");
};

const hideNoResult = () => {
  const noResults = document.querySelector(".no-results");
  const weatherSection = document.querySelector(".weather");

  noResults.classList.remove("no-results_active");
  weatherSection.classList.remove("weather_hidden");
};

const displayHourlyForecast = (hourlyData) => {
  // Get the current date and time
  const currentHour = new Date();

  const next24Hours = new Date();
  next24Hours.setHours(currentHour.getHours() + 24); // Add 24 hours to the current time.

  // Filter the hourly data to only include those within the next 24 hours.
  const next24HoursData = hourlyData.filter(({ time }) => {
    // Convert the time string ('time') into a Date object to allow comparisons.
    const forecastTime = new Date(time);

    // Return true if the forecast time is within the next 24 hours.
    // forecastTime >= currentHour: Ensures the time is equal to or after the current time.
    // forecastTime <= next24Hours: Ensures the time is before or equal to 24 hours in the future.
    return forecastTime >= currentHour && forecastTime <= next24Hours;
  });

  // Generate HTML for each hourly forecast and add it to DOM
  hourlyWeatherList.innerHTML = next24HoursData
    .map((item) => {
      const temperature = item.temp_c;
      const time = item.time.split(" ")[1]; // Divide the string and extract just time.
      const weatherIcon = Object.keys(weatherCodes).find((icon) =>
        weatherCodes[icon].includes(item.condition.code)
      );

      return `<li class="hourly-weather__item">
              <p class="hourly-weather__time">${time}</p>
              <img src="./images/${weatherIcon}.svg" class="hourly-weather__icon" />
              <p class="hourly-weather__temperature">${temperature}°</p>
            </li>`;
    })
    .join("");
};

const getWeatherDetails = (api_Url) => {
  hideNoResult();

  let weatherData;
  let temperature;
  let description;
  let weatherIcon;

  fetch(api_Url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      weatherData = data;

      // Extract the current weather details
      temperature = data.current.temp_c;
      description = data.current.condition.text;
      weatherIcon = Object.keys(weatherCodes).find((icon) =>
        weatherCodes[icon].includes(data.current.condition.code)
      );

      // Update the current weather display
      currentWeatherDiv.querySelector(
        ".current-weather__temperature"
      ).innerHTML = `${temperature}<span>°C</span>`;
      currentWeatherDiv.querySelector(
        ".current-weather__description"
      ).textContent = description;
      currentWeatherDiv.querySelector(
        ".current-weather__icon"
      ).src = `./images/${weatherIcon}.svg`;

      //Combine hourly data from today and tomorrow
      const combinedHourlyData = [
        ...data.forecast.forecastday[0].hour,
        ...data.forecast.forecastday[1].hour,
      ];

      displayHourlyForecast(combinedHourlyData);

      searchInput.value = data.location.name; // Muestra en el input el nombre de la location mostrada
    })
    .catch((error) => {
      showNoResult();
    });
};

// handle user search input
searchInput.addEventListener("keyup", (e) => {
  const cityName = searchInput.value.trim(); // trim() function removes extra whitespaces

  if (e.key == "Enter" && cityName) {
    setupWeatherRequest(cityName);
  }
});

// Set up the weather request with an specific city
const setupWeatherRequest = (cityName) => {
  const api_Url = `https://api.weatherapi.com/v1/forecast.json?key=${api_Key}&q=${cityName}&days=2`;
  getWeatherDetails(api_Url);
};

// Get User's Current Coordinates
locationButton.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const api_Url = `https://api.weatherapi.com/v1/forecast.json?key=${api_Key}&q=${latitude},${longitude}&days=2`;
      getWeatherDetails(api_Url);
    },
    (error) => {
      alert(
        "Location access denied. Please enable permissions to use this feature."
      );
    }
  );
});

// Set 'Guadalajara' as default city
setupWeatherRequest("Tokio");
