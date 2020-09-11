async function performAction(e){
    // event.preventdefault()



    // Create a new date instance dynamically with JS
    let d = new Date();
    let newDate = (d.getMonth() + 1) + '.'+ d.getDate()+'.'+ d.getFullYear(); //0= january, so adding 1 to show the correct month
    console.log(newDate);

    // Declare apiKey
    let userName = 'lalchev88';
    const weatherBitKey = '7fa5a67defbd48f8a9001a8eff943b3a';

    // Select the actual value of an HTML input to include in POST
    const newCity = document.getElementById('city').value;
    const date = document.getElementById('departure').value;

    let url = `http://api.geonames.org/searchJSON?q=${newCity}&maxRows=1&username=${userName}`; // could also be declared this way: `https://api.openweathermap.org/data/2.5/weather?zip=${newWeather},${countryCode}&appid=${apiKey}` countryCode will need to be declared as a variable in the performAction function

    /*
    getWeatherDemo(url)
    .then(function(data){   // the variable data declared in getWeatherDemo function. These are chained promises. function(data) passes the received data to the postData request

    console.log(data);
    postData('/addCity', {lat: data.geonames[0].lat, lng: data.geonames[0].lng, country: data.geonames[0].countryName, date: newDate, trip: newCity} ) //HOW TO ACCESS AN OBJECT WITHIN AN ARRAY WITHIN AN OBJECT: description: data.weather[2].description https://stackoverflow.com/questions/11922383/how-can-i-access-and-process-nested-objects-arrays-or-json
    })
        .then(res=>updateWeather(res))
            .then(function(myData){
            postData('/addWeatherBit', {temp: myData.data[0].temp, description: myData.data[0].weather.description})

            updateUI()
        })
*/

   const geonamesData =await getWeatherDemo(url);
   const res = await postData('/addCity', {lat: geonamesData.geonames[0].lat, lng: geonamesData.geonames[0].lng, country: geonamesData.geonames[0].countryName, date: date, trip: newCity});

   if (Client.distance> 604800000) {
       const myData = await updateWeather(res);
       const weatherBitInfo = await postData('/addWeatherBit', {temp: myData.data[0].high_temp, description: myData.data[0].weather.description});

       console.log(Client.distance);
       console.log(myData);
       console.log(weatherBitInfo);
   }
   else {
       const myDailyForecast = await dailyForecast(res);
       const weatherBitDaily = await postData('/addWeatherBit', {temp: myDailyForecast.data[0].temp, description: myDailyForecast.data[0].weather.description});

       console.log(Client.distance);
       console.log(myDailyForecast);
       console.log(weatherBitDaily);
   }

   // const myData = await updateWeather(res);

   // const weatherBitInfo = await postData('/addWeatherBit', {temp: myData.data[0].high_temp, description: myData.data[0].weather.description});

   // console.log(myData);
   // console.log(weatherBitInfo);

   updateUI();
}

/* POST Example */
const postData = async ( url = '', data = {})=>{
    //console.log(data);
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
    //2. Call Fake API
    //const res = await fetch('/fakePictureData')
    try {

        const data = await res.json(); // res.json() is the data you fetch
        console.log(data)
        return data;
        // 1. We can do sth with our returned data here-- like chain promises

        // 2.
        // postData('/addAnimal', data)
    }   catch(error) {
        // appropriately handle the error
        console.log("error", error);
    }
}


const updateWeather = async (weatherData)=>{
    //1.
    const weatherBitKey = '7fa5a67defbd48f8a9001a8eff943b3a';
    const res = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${weatherData.lat}&lon=${weatherData.lng}&key=${weatherBitKey}`) //forecastAPI
    //2. Call Fake API
    //const res = await fetch('/fakePictureData')
    try {

        const data = await res.json(); // res.json() is the data you fetch
        console.log(data)
        return data;
        // 1. We can do sth with our returned data here-- like chain promises

        // 2.
        // postData('/addAnimal', data)
    }   catch(error) {
        // appropriately handle the error
        console.log("error", error);
    }
}


const dailyForecast = async (dailyForecastData)=>{
    //1.
    const weatherBitKey = '7fa5a67defbd48f8a9001a8eff943b3a';
    const res = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${dailyForecastData.lat}&lon=${dailyForecastData.lng}&key=${weatherBitKey}`) //dailyAPI
    //2. Call Fake API
    //const res = await fetch('/fakePictureData')
    try {

        const data = await res.json(); // res.json() is the data you fetch
        console.log(data)
        return data;
        // 1. We can do sth with our returned data here-- like chain promises

        // 2.
        // postData('/addAnimal', data)
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
        document.getElementById('temp').innerHTML ='Temperature: ' + allData.temp;
        document.getElementById('trip').innerHTML ='My trip is to: ' + allData.trip + ', ' +allData.country;
        document.getElementById('desc').innerHTML = 'Forecast: ' + allData.description;
        document.getElementById('country').innerHTML ='Country: ' + allData.country;
        //document.getElementById('content').innerHTML = 'Feeling: ' + allData.fav;
    }catch(error){
        console.log("error", error)
    }
}

export {performAction}