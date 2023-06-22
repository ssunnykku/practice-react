require("dotenv").config();

function ok(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`;
  fetch(url).then((res) =>
    res.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const temp = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:nth-child(3)");
      const country = document.querySelector("#weather span:nth-child(4)");

      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
      country.innerText = data.sys.country;
      c = String(data.main.temp - 273.15);
      temp.innerText = c.substr(0, 4);
    })
  );
}
function error() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(ok, error);
