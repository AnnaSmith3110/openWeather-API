//store weather img
//sunny, rainy, clear, snow, haze, cloudy, default
const img = ['https://github.com/AnnaSmith3110/openWeather-API/blob/main/sunny%20png.png?raw=true', 'https://github.com/AnnaSmith3110/openWeather-API/blob/main/rainy%20png.png?raw=true', 'https://github.com/AnnaSmith3110/openWeather-API/blob/main/clear%20png.png?raw=true','https://github.com/AnnaSmith3110/openWeather-API/blob/main/snow%20png.png?raw=true','https://github.com/AnnaSmith3110/openWeather-API/blob/main/haze%20png.png?raw=true','https://github.com/AnnaSmith3110/openWeather-API/blob/main/cloudy%20png.png?raw=true', '' ];
//get vars
const bg = document.querySelector(".app");
const input = document.querySelector("#input");
const desc = document.querySelector("#desc");
const temp = document.querySelector("#temp");
const wind = document.querySelector("#wind");
const humid = document.querySelector("#humidity");
const status = document.querySelector("#weather-status-icon");

//fetch API
input.addEventListener("input", function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=412d12d981a20fc78e27a8684c2a0ecd')
  .then(response => response.json())
  .then(data => {
     var description = data['weather'][0]['description'];
     var Temp = data['main']['temp'];
    var windspeed = data['wind']['speed'];
    var Humidity = data['main']['humidity'];
    
    desc.innerHTML = description;
    temp.innerHTML = Temp;
    wind.innerHTML = windspeed;
    humid.innerHTML = Humidity;
    
    //change pic according to weather data
    let weather = data['weather'][0]['main'];
    //valid status = sunny, rainy, clear, snow, haze, cloudy
    switch (weather) {
      case "Sunny":
        status.src = img[0];
        bg.style.background = "var(--sunny)";
        break;
      case "Rain":
        status.src = img[1];
        bg.style.background = "var(--rain)";
        break;
      case "Clear":
        status.src = img[2];
        bg.style.background = "var(--clear)";
        break;
      case "Snow":
        status.src = img[3];
        bg.style.background = "var(--snow)";
        break;
      case "Haze":
        status.src = img[4];
        bg.style.background = "var(--hazy)";
        break;
      case "Clouds":
        status.src = img[5];
        bg.style.background = "var(--cloudy)";
        break;
      default:
        status.src = img[6];
    }
  })
  .catch(err => console.log("error"));
})
