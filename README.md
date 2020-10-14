# FEND Capstone - Travel App

## Description
This projects targets the DOM working with objects and retrieving data from minimum 3 different APIs- Weatherbit, Geonames, Pixabay that are dependant on one another to work. The goal is to connect the 3 API using async Javascript. For this project you will be sending data from client to server side and back using request and routes. Finally, the project will be executed in a Webpack environment, using an express server with service workers. The project requires that you create a simple form where the user enters the location they are traveling to and the date they are leaving on. If the trip is within a week, the app will fetch the current Weather API. If the trip is in the future (aka >7 days from now), the API will fetch the Forecast API(16day/ daily). Once we have this data, the app will display an image of the location entered using the Pixabay API.

## Installation & Configuration Instructions
### Step 1: Set up your project environment
To set up your environment, begin with installing Node. Then Install the Express server, Body-Parser, and Cors Middleware from the npm terminal and then require them in the server.js file. Finally,  designate what port the app server will listen to for incoming requests and add a console.log() to the server callback function to test if your server is running. Last but not least, it is recommended to to split server side code into 2 files: one that sets up the endpoints and another one that starts the server so you can Jest test server endpoints.
### Step 2: Set up your webpack environments
- Create your src folder architecture first. Then create prod and dev webpack environments and install dependencies for each environment- babel, babel loader, css loader, file loader, html loader, html webpack plugin, node sass, sass loader, style loader, webpack, webpack cli, CleanWebpackPlugin (for hot reloading) and webpack dev server. Fur a full list of dependencies visit package.json file. Finally, convert css files to scss.
### Step 3: Create script commands in package.json
+ You will want to have test, dev, start, and build commands. NOTE: Start will be for your express server (using starter.js file), dev will be so that you can take advantage of web dev server.
+ To start the project run the command `<npm start>` in the command center. This will start the server in a prod environment
+ To start the project in a dev environment, run the command `<npm run build-dev>`
+ To recreate the dist folder, run the command `<npm run build-prod>` from the command center
+ To delete the dist folder, run the command `<rm -rf dist>`
+ If you are interested in testing the app functions, run the command `<npm test>', which uses the Jest framework for testing
### Step 4: Create accounts with Geonames, Weatherbit and Pixabay and integrate the APIs
### Step 5: Use Jest to test express server and application javascript
+ First you will need to install Jest framework using the command `<npm install jest --save-dev>` and Supertest to test server endpoints using the command `<npm install supertest --save-dev>`
### Step 6: Add in service workers
+ At the end, when you are done with your project, add in service works by installing and requiring the WorkboxPlugin. Make sure to check that the service workers are supported in index.html
## Extended Options Added:
+ Integrate the REST Countries API to pull in data for the country being visited.
+ Use Local Storage to save the data so that when they close, then revisit the page, their information is still there.
+ Incorporate icons into forecast
+ Allow user to Print their trip and/or export to PDF
+ Allow the user to add a todo list and/or packing list for their trip

### Jest Client.Spec.js Test Clarification
+ Client.Spec.js test needs the express server up to test the getWeatherDemo functionality from app.js. GetWeatherDemo function sends a GET request to the '/test' server endpoint.

## App Features
+ App allows user to print the details of their trip using the window.print() method
+ App allows user to save/ delete their trip entry using the localStorage to store the data and event listener to show stored data when page reloaded
+ App shows forecast icons extracting that data from the Weatherbit API
+ App allows the user to create a ToDo List and add/ remove items by using the javascript event.target method
+ App fetches data from the Rest Countries API using async/await

## License: MIT

## Author: Kostadin Lalchev, all rights reserved.