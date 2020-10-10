# FEND Capstone - Travel App

## Overview
This project aims to give you the opportunity to put all of the skills you have learned into one project to build your own custom travel app. Due to the nature of this course, it is very JavaScript heavy, but it is still expected you create clean and appealing HTML/CSS.

## Instructions
This will require modifying the `server.js` file and the `app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.scss` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `mockAPI.js` as a template for writing and running some basic tests for your code.

## Description
For this project you will also be targeting the DOM, working with objects, and retrieving data from 3 APIs(Weatherbit, Geonames, Pixabay) in which one of those is reliant on another to work. Finally, this is all going to be done in a Webpack environment, using an express server, and wrapped up with service workers. The project will include a simple form where you enter the location you are traveling to and the date you are leaving. If the trip is within a week, you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast. Once we have all of this data, we’ll want to display an image of the location entered; for this, we will be using the Pixabay API.

## Installation & Configuration Instructions
### Step 1: Set up project environment
Make sure Node is installed from the terminal. Install the packages Express, Body-Parser, and Cors from the terminal and them include them your server.js file. Create a server running on the port of your choosing. Add a console.log() to the server callback function, and test that your server is running using Node in the terminal to run the file server.js
### Step 2: Get webpack set up to work with this project
- Create your src folder architecture first. The src folder should contain a client folder and a server folder. Your server folder should contain your server.js content. Your client folder should contain a js folder, media folder, styles folder, and views folder, as well as an index.js file. Your application js should go into the js file, your css into styles, and your index.html into views.
- Convert your stylesheet from a .css file to a .scss file
- Create a prod and dev webpack environments
- Install dependencies to get webpack going- babel, babel loader, css loader, file loader, html loader, html webpack plugin, node sass, sass loader, style loader, webpack, webpack cli, and webpack dev server. Fur a full list of dependencies visit package.json file
### Step 3: Update the scripts in package.json
+ You will want to have test, dev, start, and build. NOTE: Start will be for your express server, dev will be so that you can take advantage of web dev server. It is possible depending on your setup to run both of these with one command.
+ To start the project run the command `<npm start>` in the command center. This will start the server in a prod environment
+ To start the project in a dev environment, run the command `<npm run build-dev>`
+ To recreate the dist folder, run the command `<npm run build-prod>` from the command center
+ If you are interested in testing the app functions, run the command `<npm test>', which uses the Jest framework for testing
### Step 4: Create accounts with Geonames, Weatherbit and Pixabay and integrate the APIs
### Step 5: Use Jest to test express server and application javascript
### Step 6: Add in service workers

## Extended Options Added:
+ Integrate the REST Countries API to pull in data for the country being visited.
+ Use Local Storage to save the data so that when they close, then revisit the page, their information is still there.
+ Incorporate icons into forecast
+ Allow user to Print their trip and/or export to PDF
+ Allow the user to add a todo list and/or packing list for their trip

## License: MIT

## Author: Kostadin Lalchev, all rights reserved.