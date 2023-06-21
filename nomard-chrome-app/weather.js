function ok(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3801568f196051b33a8d2e6deaca50f3
`;
  console.log(url);
}

function error() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(ok, error);
