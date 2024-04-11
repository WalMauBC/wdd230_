//Navbar Constant
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

//Navbar 
hamButton.addEventListener("click", () =>{
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})

// Display Todays date:
const lastModification = document.querySelector('#modification');
const lastStamp = document.querySelector('#timeStamp');
var date = new Date(document.lastModified);
var day = String(date.getDate()).padStart(2, '0');
var month = String(date.getMonth() + 1).padStart(2, '0'); 
var year = date.getFullYear();
date = month + '/' + day + '/' + year;
lastModification.textContent = date;


//weather Api:
//API constants and information :
const api_key = 'f4020f49719cc815617a223c13df5681';
const weather_div = document.querySelector("#weather_info"); 
const icon = document.querySelector("#icon-weather");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description-weather");

async function fetchData(){
    var cityname = document.querySelector("#city").value
    if(cityname !==''){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${api_key}&units=imperial`;
    const response = await fetch(url);
    if(response.ok){
        const data = await response.json();
        displayData(data);
    }else{
        console.log("error");
    }
}
}
function displayData(data){
    temperature.innerHTML = `${data.main.temp} F`;
    const icon_url =`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description
    icon.setAttribute("src",icon_url);
    icon.setAttribute("alt", desc);
    description.innerHTML = `${desc}`;
}

document.querySelector("#getData").addEventListener('click', fetchData);
