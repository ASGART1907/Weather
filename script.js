const input = document.querySelector("input");
const button = document.querySelector("button");
const city = document.querySelector(".city");
const degree = document.querySelector(".degree");
const minMax = document.querySelector("strong");
const lotLan = document.querySelector("span");
const main = document.querySelector(".main");
const description = document.querySelector(".description");

button.addEventListener("click",getContent);

function getContent(){
    let value = input.value;
    if(value === "") return;
        getValue(value);
        input.value = "";    
}


let key = "I can't share for security reasons.";

async function getValue(value){
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&lang=tr&&appid=${key}`);

    const result = await data.json();
    getWeather(result);
}

function getWeather(result){
    console.log(result);
    city.innerHTML = `${result.name},${result.sys.country}`;

    degree.innerHTML = `${Math.round(result.main.temp)}°C`;

    main.innerHTML = result.weather[0].main;

   description.innerHTML = result.weather[0].description;

    minMax.innerHTML = `Min: ${Math.round(result.main.temp_min)}°C / Max: ${Math.round(result.main.temp_max)}°C`;

    lotLan.innerHTML = `Longitude:${result.coord.lon} / Latitude:${result.coord.lat}`;

}

