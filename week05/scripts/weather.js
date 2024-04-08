const currentTemp = document.querySelector('#current-temp'); 
const weatherIcon = document.querySelector('#weather-icon'); 
const captionDesc = document.querySelector('figcaption');

let key = "f4020f49719cc815617a223c13df5681" ;
let lat = "-12.094816" ;
let lon = "-76.756737";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch (url); 
        if (response.ok) {
            const data = await response.json (); 
            displayResults (data);
        }else {
            throw Error (await response.text());
        } 
    }catch (error) {
        console.log(error);
    }   
}


function displayResults(data) { 
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',desc); 
    captionDesc.textContent = `${desc}`;
}
apiFetch();