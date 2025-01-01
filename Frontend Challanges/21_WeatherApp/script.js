const apiKey = "caac5acb19ea1c30c9bf5940ed9bb7b5";

let temp = document.querySelector("#temp");
let max = document.querySelector("#max");
let min = document.querySelector("#min");
let city = document.querySelector("#city");
let desc = document.querySelector("#desc");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log("Weather Data:", data);
          console.log(data.name);
          city.textContent = data.name;
          temp.textContent = Math.trunc(data.main.temp);
          min.textContent = Math.trunc(data.main.temp_min);
          max.textContent = Math.trunc(data.main.temp_max);

          desc.textContent = data.weather[0].description;
        })
        .catch((error) => console.error("Error fetc h weather data:", error));
    },
    (error) => {
      console.error("Error getting location:", error);
    }
  );
} else {
  console.log("Geolocation is not supported by this browser.");
}
