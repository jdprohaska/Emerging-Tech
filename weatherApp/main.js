//api information
const api = {
  key: "b09b6457b5063de60a859dec3b84eadd",
  base: "https://api.openweathermap.org/data/2.5/",
};
//search 
const searchbox = document.querySelector(".searchBox");
searchbox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
      
    })
    .then(displayResults);
}
//display weather results
function displayResults(weather) {
  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerText = dateBuilder(now);
//change background depending on temp range
  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;
  if(weather.main.temp > 80) {
    document.body.style.backgroundImage = "url('./corgiSummer.jpg')";
  } else  if(weather.main.temp > 60) {
    document.body.style.backgroundImage = "url('./corgi.jpg')";
  } else  if(weather.main.temp > 40) {
    document.body.style.backgroundImage = "url('./corgiFall.jpg')";
  } else  if(weather.main.temp < 40) {
    document.body.style.backgroundImage = "url('./corgiWinter.jpg')";
  } else {
    document.body.style.backgroundImage = "url('./corgiDefault.jpg')";
  } 
  

  let weather_el = document.querySelector(".current .weather");
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector(".hi-low");
  hilow.innerText = `${Math.round(weather.main.temp_min)}°F / ${Math.round(
    weather.main.temp_max
  )}°F`;

  let humidity = document.querySelector(".humidity");
  humidity.innerText = `${(weather.main.humidity)}%`;
}



function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  

  
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${month} ${date} ${year}`;
}
