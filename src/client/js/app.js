function performAction(e){
    // event.preventdefault()

    // Create a new date instance dynamically with JS
    let d = new Date();
    let newDate = (d.getMonth() + 1) + '.'+ d.getDate()+'.'+ d.getFullYear(); //0= january, so adding 1 to show the correct month
    console.log(newDate);

    // Declare apiKey
    let userName = 'lalchev88';

    // Select the actual value of an HTML input to include in POST
    const newCity = document.getElementById('city').value;
    const fav = document.getElementById('feelings').value;

    let url = `http://api.geonames.org/searchJSON?q=${newCity}&maxRows=1&username=${userName}`; // could also be declared this way: `https://api.openweathermap.org/data/2.5/weather?zip=${newWeather},${countryCode}&appid=${apiKey}` countryCode will need to be declared as a variable in the performAction function

    getWeatherDemo(url)
    .then(function(data){   // the variable data declared in getWeatherDemo function. These are chained promises. function(data) passes the received data to the postData request

        console.log(data);
        postData('/addCity', {lat: data.geonames[0].lat, lng: data.geonames[0].lng, country: data.geonames[0].countryName, fav: fav, date: newDate, trip: newCity} ) //HOW TO ACCESS AN OBJECT WITHIN AN ARRAY WITHIN AN OBJECT: description: data.weather[2].description https://stackoverflow.com/questions/11922383/how-can-i-access-and-process-nested-objects-arrays-or-json

    // We can do this because of Async!
    updateUI()
})

}

/* POST Example */
const postData = async ( url = '', data = {})=>{
    //console.log(data);
    const response = await fetch(url, { // url indicates where we want to post the data to;
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

/* Update UI Demo */
const updateUI = async () => {
    const request = await fetch('/all')
    try{
        const allData = await request.json();
        console.log(allData);

        document.getElementById('date').innerHTML ='Date: ' + allData.date;
        document.getElementById('lat').innerHTML ='Latitude: ' + allData.lat;
        document.getElementById('trip').innerHTML ='My trip is to: ' + allData.trip + ',' +allData.country;
        document.getElementById('lng').innerHTML = 'Longtitude: ' + allData.lng;
        document.getElementById('country').innerHTML ='Country: ' + allData.country;
        document.getElementById('content').innerHTML = 'Feeling: ' + allData.fav;
    }catch(error){
        console.log("error", error)
    }
}

export {performAction}