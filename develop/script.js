// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
console.log('hi')

$('#locationBtn').click(getApi);
  // var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=06d6972d9ab98e2a5159408e1850243a"
  
  function getApi() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=06d6972d9ab98e2a5159408e1850243a")
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
        console.log(data)
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
  }


  
  // getApi(requestUrl);
  

var apiKey = "06d6972d9ab98e2a5159408e1850243a"
"https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"