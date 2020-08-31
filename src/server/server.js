// Setup empty JS object to act as endpoint for all routes
projectData = {}; // can not be cost because it is being reassigned each time we fetch a new zip code object

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies*/
const bodyParser = require('body-parser');

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// Setup Server
const port = 3000;

const server = app.listen(port, listening); // listen method- when the server has been activated, log the `running on localhost: ${port}`message
function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
    console.log('hello');
};

//GET Route

app.get('/all', getData) //In this case get sends the data to the app.js. Every GET request produces a request, which is the data provided by the GET request, and a response, which is the data returned to the GET request

function getData(req, res){
    res.send(projectData)
    console.log(projectData)
}

// POST Route

app.post('/addWeather', addWeather); //post data from app.js to server.js

function addWeather(req, res){ //each route (post or get) callback function has a request (in this case req) and respond (res) parameters. Request requests/accesses data from the app. Respond sends data to the app

    newEntry = {
        city: req.body.city, //In the app file we attached our data to the body of our POST request, so to receive that data and make it actionable we can use req.body
        date: req.body.date,
        temp: req.body.temp,
        description: req.body.description, // when you add a new element to the server, you have to rerun the server to show the new element
        fav: req.body.fav
    }

projectData = newEntry; // projectData can not be of type const, because we are updating it each time a new zip is fetched. projectDate will be reassigned the value of newEntry each time and hence it will only store the last entry, whereas an array with a push method would store alll entries. Since the object stores the last entry, it is light weight- does not occupy memory!
res.send(projectData) //send projectData to the server
console.log(projectData)
}