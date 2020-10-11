const fetch = require('node-fetch') //Since jest run on node environment which does not have fetch API like in a browser, it is producing referenceError. To fix this I used node-fetch module to require fetch in app.js (check the updated answer)

async function performAction(e){

    // Create a new date instance dynamically with JS
    let d = new Date();
    let newDate = (d.getMonth() + 1) + '.'+ d.getDate()+'.'+ d.getFullYear(); //0= january, so adding 1 to show the correct month
    console.log(newDate);

    // Declare apiKey
    let userName = 'lalchev88';
    const weatherBitKey = '7fa5a67defbd48f8a9001a8eff943b3a';
    let pixabayKey = '18282634-3d2c7001ec6e069609dd56f71';

    // Select the actual value of an HTML input to include in POST
    const newCity = document.getElementById('city').value;
    const date = document.getElementById('departure').value;

    let url = `http://api.geonames.org/searchJSON?q=${newCity}&maxRows=1&username=${userName}`; // could also be declared this way: `https://api.openweathermap.org/data/2.5/weather?zip=${newWeather},${countryCode}&appid=${apiKey}` countryCode will need to be declared as a variable in the performAction function

    const newCityEncode = encodeURI(newCity);
    const uriPixabay = `https://pixabay.com/api/?key=${pixabayKey}&q=${newCityEncode}&category=travel&image_type=photo`;

    const geonamesData =await getWeatherDemo(url);
    const res = await postData('/addCity', {lat: geonamesData.geonames[0].lat, lng: geonamesData.geonames[0].lng, country: geonamesData.geonames[0].countryName, date: date, trip: newCity});

    Client.func(); // exporting a function to index.js and accessing it using client library has the potential to break jest tests. Jest does not use webpack and has no idea of what Client is. It is hence generally a better proposal to import the function directly into your top level JS and use it there. So we would use sth like this in countdown.js export const func = ... and in app.js import {func} from "countdown.js"
                  // Also, you want to do a func call before performAction reaches the if conditional on Client.distance to avoid another potential race condition. Note that I forced a func call right before comparison kicks in. That way, you are sure that the thing actually got a calculation once before other JS kicked in
    if (Client.distance> 604800000) {
       const myData = await updateWeather(res);
       const weatherBitInfo = await postData('/addWeatherBit', {temp: myData.data[14].high_temp, description: myData.data[14].weather.description, icon: myData.data[14].weather.icon});

       console.log(Client.distance);
       console.log(myData);
       console.log(weatherBitInfo);
    }
    else {
       const myDailyForecast = await dailyForecast(res);
       const weatherBitDaily = await postData('/addWeatherBit', {temp: myDailyForecast.data[0].temp, description: myDailyForecast.data[0].weather.description, icon: myDailyForecast.data[0].weather.icon});

       console.log(Client.distance);
       console.log(myDailyForecast);
       console.log(weatherBitDaily);
    }

    const countryData = await restCountries (res);
    const myCountryData = await postData ('/addCountryData', {currency: countryData[0].currencies[0].name, region: countryData[0].subregion, language: countryData[0].languages[0].name});

    const pixabayData= await pixabay (uriPixabay);
    const myPixabayData = await postData('/addPixabayData', {image: pixabayData.hits[0].webformatURL});

    console.log(pixabayData);
    console.log(myPixabayData);

    updateUI();
}

//there are 2 ways to do the chained promises: 1) To use async and await; 2) to use async and .then chained promises

/* POST Example */
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', //*GET, POST, PUT, DELETE - we could get data, post data, put or delete data
    credentials: 'same-origin', //include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content- Type ". Here we attach our data to the body of our POST request
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
    console.log("error", error);
    //appropriately handle the error
    }
}

const getWeatherDemo = async (baseURL)=>{
    //1.
    const res = await fetch(baseURL)

    try {

        const data = await res.json(); // res.json() is the data you fetch
        console.log(data)
        return data;
        // 1. We can do sth with our returned data here-- like chain promises

    }   catch(error) {
        // appropriately handle the error
        console.log("error", error);
    }
}
//getWeatherDemo is async because it fetches the API and waits its response

const updateWeather = async (weatherData)=>{
    //1.
    const weatherBitKey = '7fa5a67defbd48f8a9001a8eff943b3a';
    const res = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${weatherData.lat}&lon=${weatherData.lng}&key=${weatherBitKey}`) //forecastAPI

    try {

        const data = await res.json(); // res.json() is the data you fetch
        console.log(data)
        return data;
        // 1. We can do sth with our returned data here-- like chain promises

    }   catch(error) {
        // appropriately handle the error
        console.log("error", error);
    }
}

const dailyForecast = async (dailyForecastData)=>{
    //1.
    const weatherBitKey = '7fa5a67defbd48f8a9001a8eff943b3a';
    const res = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${dailyForecastData.lat}&lon=${dailyForecastData.lng}&key=${weatherBitKey}`) //dailyAPI

    try {

        const data = await res.json(); // res.json() is the data you fetch. If the API response is successful assign it to const data
        console.log(data)
        return data; //return const data when function is called
        // 1. We can do sth with our returned data here-- like chain promises

    }   catch(error) {
        // appropriately handle the error
        console.log("error", error);
    }
}

const pixabay = async (pixabayURL)=>{
    //1.
    const res = await fetch(pixabayURL)

    try {

        const data = await res.json(); // res.json() is the data you fetch
        console.log(data)
        return data;
        // 1. We can do sth with our returned data here-- like chain promises

    }   catch(error) {
        // appropriately handle the error
        console.log("error", error);
        alert('destination not found');
    }
}

const restCountries = async (countriesData)=>{
    //1.
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${countriesData.country}`) //dailyAPI

    try {

        const data = await res.json(); // res.json() is the data you fetch
        console.log(data)
        return data;
        // 1. We can do sth with our returned data here-- like chain promises

    }   catch(error) {
        // appropriately handle the error
        console.log("error", error);
    }
}

/* Update UI Demo */
const updateUI = async () => {
    const request = await fetch('/all')
    try{
        const allData = await request.json();
        console.log(allData);

        document.getElementById('date').innerHTML ='Departing: ' + allData.date;
        document.getElementById('temp').innerHTML ='Typical Temperature for this day is: ' + allData.temp;
        document.getElementById('trip').innerHTML ='My trip is to: ' + allData.trip + ', ' +allData.country;
        document.getElementById('desc').innerHTML =`Forecast: ${allData.description} <img src= https://www.weatherbit.io/static/img/icons/${allData.icon}.png></img>`;
        document.getElementById('image').innerHTML = `<img src=${allData.image} alt="trip destination"></img>`; // you can also add width=480px and height=309px- see NASA API fetch
        document.getElementById('region').innerHTML = "Region: " + allData.region;
        document.getElementById('language').innerHTML = "Language: " + allData.language;
        document.getElementById('currency').innerHTML = "Currency: " + allData.currency;

    }catch(error){
        console.log("error", error)
    }
}

export {performAction, updateUI, getWeatherDemo, restCountries, pixabay}