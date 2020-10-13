// Setup empty JS object to act as endpoint for all routes
let projectData = {}; // can not be const because it is being reassigned each time we fetch a new zip code object

var path = require('path')
const express = require('express')

//Middleware
const bodyParser = require('body-parser');
const cors = require("cors");

const mockAPIResponse = require('./mockAPI.js'); //we can require it because of 'module.exports = json' in mockAPI.js - that is how we export the mockAPI json object
//The dotenv package and the associated process.env object can only be done in the express server file
//you cannot do this on the frontend code. To use the dotenv, you will need to move the API calls to the server

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)

/*
// Initialize the main project folder- The express app is already serving the dist folder using express.static call above. It will automatically present the dist/index.html file when visiting the / endpoint. Unless you plan to serve something other than dist/index.html, you can remove this GET endpoint statement.
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
*/

/*
// designates what port the app server will listen to for incoming requests
app.listen(4040, function () {
    console.log('Example app listening on port 4040!')
})
*/

// Setup Server
app.post('/addWeatherBit', getWeatherData)

function getWeatherData(req, res){
   projectData.temp= req.body.temp; // How to add a new key to the projectdata object
   projectData.description= req.body.description;
   projectData.icon= req.body.icon;

   res.send(projectData) //send projectData to the server
   console.log(projectData)
}

// POST Route

app.post('/addCity', addCity); //post data from app.js to server.js

function addCity(req, res){ //each route (post or get) callback function has a request (in this case req) and respond (res) parameters. Request requests/accesses data from the app. Respond sends data to the app

    newEntry = {
        lat: req.body.lat, //In the app file we attached our data to the body of our POST request, so to receive that data and make it actionable we can use req.body
        lng: req.body.lng,
        country: req.body.country,
      // when you add a new element to the server, you have to rerun the server to show the new element
      // fav: req.body.fav,
        date: req.body.date,
        trip: req.body.trip
    }

projectData = newEntry; // projectData can not be of type const, because we are updating it each time a new zip is fetched. projectDate will be reassigned the value of newEntry each time and hence it will only store the last entry, whereas an array with a push method would store alll entries. Since the object stores the last entry, it is light weight- does not occupy memory!
res.send(projectData) //send projectData back to client side
console.log(projectData)
}

app.post('/addPixabayData', getPixabayData);

function getPixabayData (req, res){
    projectData.image = req.body.image;
    res.send(projectData) //send projectData to the server
    console.log(projectData)
}

app.post('/addCountryData', getCountryData);

function getCountryData (req, res){
    projectData.currency = req.body.currency;
    projectData.region = req.body.region;
    projectData.language = req.body.language;

    res.send(projectData) //send projectData to the server
    console.log(projectData)
}

/*
app.post('/myList', getList);

function getList (req, res){
    projectData.list = req.body.list;

    res.send(projectData)
    console.log(projectData)
}
*/

app.get('/all', getData) //In this case get sends the data to the app.js. Every GET request produces a request, which is the data provided by the GET request, and a response, which is the data returned to the GET request

function getData(req, res){
    res.send(projectData)
    console.log(projectData)
}

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

module.exports = app
//You want to allow each test file to start a server on their own. To do this,
//you need to export app express server without listening to it. Exported app will be used in server.spec.js