
function getWeather() {
    let cityName = document.getElementById("city").value;
    let apiKey = "ca82f7d78d1f3e26f28c2f185b077a93"; 
   
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=metric";
   
    fetch(url)
   
    .then(function (response) { 
    return response.json();
    })
    .then(function (data) {
    let temp = data.main.temp;
    let condition = data.weather[0].main;
    let name = data.name;
   
    document.getElementById("output").innerHTML =
    "<b>📍City:</b> " + name + "<br>" +
    "<b>🌡️Temperature:</b> " + temp + "°C<br>" +
    "<b>🌈 Weather:</b> " + condition;
    })
    .catch(function () {
    document.getElementById("output").innerHTML = "❌ City not found!";
    });
   }