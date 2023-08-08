
let button1 = document.querySelector("button");
let input = document.querySelector("#search-input");
//grab text from text box
let textContent = input.textContent;
//add the click ability to the button
button1.addEventListener("click", function(event){
event.preventDefault();

//retrieve data from API
fetch("http://api.openweathermap.org/geo/1.0/direct?q=Dallas&limit=5&appid=51e95e4f7bc194421cb48021aec89f8b")
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
});

//store the value of button and input
let citiesFound = {
    button1: button1.value,
    input: input.value.trim()

}
//store data in local storage
localStorage.setItem("citiesFound", JSON.stringify(citiesFound));
renderMessage();

});
//retrieve data from local storage
function renderMessage() {
  let cities = JSON.parse(localStorage.getItem("citiesFound"));
}
