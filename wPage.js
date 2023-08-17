
let button1 = document.querySelector("button");
let input = document.querySelector("#search-input");
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");
let box5 = document.querySelector("#box5");
let searchedCities = document.querySelector("#searchedCities")
//grab text from text box
let textContent = input.textContent;
let cityArray = JSON.parse(localStorage.getItem("cities")) || []
//add the click ability to the button
button1.addEventListener("click", function(event){
event.preventDefault();
let cityName = input.value
if (!cityArray.includes(cityName)){
    cityArray.push(cityName)
    localStorage.setItem("cities",JSON.stringify(cityArray))
}
getCities()
getWeather(cityName)
});

function getCities(){
    let cityArray = JSON.parse(localStorage.getItem("cities")) || []
    searchedCities.textContent=""
    for(let i = 0; i < cityArray.length; i++){
        let cityBtn = document.createElement('button')
        cityBtn.textContent = cityArray [i]
        searchedCities.appendChild(cityBtn)

    }
}
function getWeather(cityName){

//retrieve data from API
fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=5&appid=51e95e4f7bc194421cb48021aec89f8b")
.then(response => response.json())
.then(citiesFound =>{
    let firstCity = citiesFound[0];
    console.log(firstCity.lat);
    console.log(firstCity.lon);

    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=51e95e4f7bc194421cb48021aec89f8b`)
})

//return the promise
.then(response => response.json())
.then(data => {
    console.log(data)
    city.textContent = data.city.name
    temp.textContent = "Temperature: " + data.list[0].main.temp
    wind.textContent = "Wind: " + data.list[0].wind.speed
    humidity.textContent = "Humidity: " + data.list[0].main.humidity
    box1.textContent = "box1: " + data.list[0].main.temp + data.list[0].wind.speed + data.list[0].main.humidity
    box2.textContent = "box2: " + data.list[8].main.temp + data.list[8].wind.speed + data.list[8].main.humidity
    box3.textContent = "box3: " + data.list[16].main.temp + data.list[16].wind.speed + data.list[16].main.humidity
    box4.textContent = "box4: " + data.list[24].main.temp + data.list[24].wind.speed + data.list[24].main.humidity
    box5.textContent = "box5: " + data.list[32].main.temp + data.list[32].wind.speed + data.list[32].main.humidity


});

//store the value of button and input
let citiesFound = {
    button1: button1.value,
    input: input.value.trim()

}
//store data in local storage
localStorage.setItem("citiesFound", JSON.stringify(citiesFound));
renderMessage();
}

//retrieve data from local storage
function renderMessage() {
  let cities = JSON.parse(localStorage.getItem("citiesFound"));
}
getCities()