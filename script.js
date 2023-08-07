//let myApiKey = "51e95e4f7bc194421cb48021aec89f8b";

fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=51e95e4f7bc194421cb48021aec89f8b")
.then(Response => Response.json())
.then(data=>{
    console.log(data);
})

fetch("api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=51e95e4f7bc194421cb48021aec89f8b")
.then(Response => Response.json())
.then(data => {
    console.log(data)
})