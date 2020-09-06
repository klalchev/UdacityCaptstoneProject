// Setup empty JS object to act as endpoint for all routes
projectData = {}; // can not be cost because it is being reassigned each time we fetch a new zip code object

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)

// Initialize the main project folder
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile('client/views/index.html', {root: __dirname + '/..'})
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(4040, function () {
    console.log('Example app listening on port 4040!')
})

// Setup Server

/*
const port = 3000;

const server = app.listen(port, listening); // listen method- when the server has been activated, log the `running on localhost: ${port}`message
function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
    console.log('hello');
};
*/

//GET Route

app.get('/all', getData) //In this case get sends the data to the app.js. Every GET request produces a request, which is the data provided by the GET request, and a response, which is the data returned to the GET request

function getData(req, res){
    res.send(projectData)
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
res.send(projectData) //send projectData to the server
console.log(projectData)
}