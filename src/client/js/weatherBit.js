/*
function weatherBit () {
    getCoordinates ()
    .then(function(data){
    getWeatherForecast(myUrl)


    })
}

const getCoordinates = async () => {
    const request = await fetch('/all')
    try{
        const myData = await request.json();
        console.log(myData);
        const latCoordinate = myData.lat;
        const lngCoordinate = myData.lng;
        myApiKey = '7fa5a67defbd48f8a9001a8eff943b3a';
        let myUrl = `https://api.weatherbit.io/v2.0/current?&lat=${latCoordinate}&lon=${lngCoordinate}&key=${myApiKey}`;

    }catch(error){
        console.log("error", error)
    }
}

const getWeatherForecast = async (baseURL)=>{
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
*/