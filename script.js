// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// my-ap dad23db72868013ba51c43609d5df773

// const api = {
//     key: "dad23db72868013ba51c43609d5df773",
//     base: "https://api.openweathermap.org/data/2.5/weather"
// }

// const searchbox = document.querySelector('.search-box');
// searchbox.addEventListener('keypress', setQuery);

// function setQuery(evt) {
//     if (evt.keyCode == 13) {
//         getResults(searchbox.value);
//     }
// }

// function getResults(query) {
//     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//         .then(weather => {
//             return weather.json();
//         }).then(displayResults);
// }

// function displayResults(weather) {
//     let city = document.querySelector('.location .city');
//     city.innerText = `${weather.name}, ${weather.sys.country}`;

//     let now = new Date();
//     let date = document.querySelector('.location .date');
//     date.innerText = dateBuilder(now);

//     let temp = document.querySelector('.current .temp');
//     temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

//     let weather_el = document.querySelector('.current .weather');
//     weather_el.innerText = weather.weather[0].main;

//     let hilow = document.querySelector('.hi-low');
//     hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
// }

// function dateBuilder(d) {
//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()];
//     let year = d.getFullYear();

//     return `${day} ${date} ${month} ${year}`;
// }


let API_KEY = "dad23db72868013ba51c43609d5df773";

getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";

    const Full_Url = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;

    const weatherPromise = fetch(Full_Url);
    console.log(city);

    return weatherPromise.then((response) => {
        return response.json()
    })
}


function searchCity() {
    const city = document.getElementById("city-input").value;

    getWeatherData(city)
        .then((response) => {
            showWeatherData(response)
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })

}

showWeatherData = (weatherData) => {


    document.getElementById("city").innerText = weatherData.name;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("weather").innerText = weatherData.weather[0].main;
    document.getElementById("humidity").innerText = weatherData.main.humidity;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}