const API_KEY = "a99b7b1d1bb556520484f9b28b4c80b1";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        
        city.innerText = data.name;
        // weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
        weather.innerText = `${data.weather[0].main}`;
        city.innerText = `${data.main.temp}℃ @ ${data.name}`;
        

    });
}

function onGeoError(){
    const weather = document.querySelector("#weather span:first-child");
    // alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
