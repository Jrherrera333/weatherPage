//let myApiKey = "51e95e4f7bc194421cb48021aec89f8b";
let button1 = document.querySelector("button");
let input = document.querySelector("#search-input");

let textContent = input.textContent;

button1.addEventListener("click", function(event){
event.preventDefault();
})

fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=51e95e4f7bc194421cb48021aec89f8b")
.then(response => response.json())
.then(citiesFound =>{
    let firstCity = citiesFound[0];
    console.log(firstCity.lat);
    console.log(firstCity.lon);

    return fetch('https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=51e95e4f7bc194421cb48021aec89f8b')
})


.then(response => response.json())
.then(data => {
    console.log(data)
});

// fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=51e95e4f7bc194421cb48021aec89f8b")
//   .then(response => response.json())
//   .then(citiesFound => {
//     let firstCity = citiesFound[0];
//     console.log(firstCity.lat);
//     console.log(firstCity.lon);

//     return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=51e95e4f7bc194421cb48021aec89f8b`);
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


let citiesFound = {
    lat: lat.value,
    lon: lon.value,

}

localStorage.setItem("citiesFound", JSON.stringify(studentGrade));
renderMessage();

;

function renderMessage() {
  var lastGrade = JSON.parse(localStorage.getItem("citiesFound"));
  if (lastGrade !== null) {
    document.querySelector(".message").textContent = lastGrade.student + 
    " received a/an " + lastGrade.grade
  }
}
