let APIkey = "f8e83b3343995f0c6013870b38fdf02e";
// let cityName = document.querySelector("#cityName");
let weatherBtn = document.querySelector("#weather-btn");
let weatherData = document.querySelector(".weather-data");
const getWeather = async () => {
    let cityName = document.querySelector("#cityName").value.trim();
    if(cityName === ""){
        weatherData.innerHTML= `<p>Enter a city name to search weather!</p>`;
        return
    }
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`
    try {
        let response = await fetch(api);
        console.log(response);
        if(!response.ok){
            weatherData.innerHTML = `<p>City Not found </p>`;
            return;
        }
        let data = await response.json();
        weatherData.innerHTML = `<h2>${data.name}, ${data.sys.country} </h2>
        <p> Temperature: ${data.main.temp}</p>
        <p> Wind Speed: ${data.wind.speed}m/s </p>
        <p> Weather Description: ${data.weather[0].description}</p>`

    } catch (error) {
        console.log(error, "something went wrong");
        
    }
};

weatherBtn.addEventListener("click", getWeather);


