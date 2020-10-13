import {performAction, updateUI, getWeatherDemo, restCountries, pixabay} from './js/app'
import {func} from './js/countdown'
import {distance} from './js/countdown'
import {newElement, myFunction, todoTextID, todoEntryDeleteElementID} from './js/ToDoList'
import {saveTrip, deleteTrip, checkStorage} from './js/localStorage'
import {printPage} from './js/print'

import './styles/style.scss'
import './styles/toDoStyling.scss'
import './styles/dropdownList.scss'
import './styles/media.scss'

document.addEventListener('DOMContentLoaded', (event) => {

    //call function to check localStorage content
    const storedData = JSON.parse(checkStorage()) // parses checkStorage() returned data from a string to an object and returns {"lat":"42.25", "lng":"-71.06", "trip": etc. } object, but does not return the 'items' key. That is why, in index.js we use lat and lng keys to access data and not 'items' key
    console.log(storedData);
    if (storedData != null) {
        document.getElementById('city').value = storedData.trip; // checkStorage() returns just the object value, without the 'items' key
        document.getElementById('departure').value = storedData.date;
        //document.getElementById('myUL').value = storedData.list;
        document.getElementById('country').innerHTML = 'Country: ' + storedData.country;
        document.getElementById('image').innerHTML= `<img src=${storedData.image} alt="trip destination" width=480px and height=309px></img>`;
        document.getElementById('desc').innerHTML =`Forecast: ${storedData.description} <img src= https://www.weatherbit.io/static/img/icons/${storedData.icon}.png></img>`;
    }

    // install listeners here
    document.getElementById('generate').addEventListener('click', () => {
        performAction();
        func();
    });

    document.querySelector('.addBtn').addEventListener('click', () => {
        newElement();
    });

    document.querySelector('.dropdown').addEventListener('click', () => {
        myFunction();
    });

    document.getElementById('save').addEventListener('click', () => {
        saveTrip();
    });

    document.getElementById('delete').addEventListener('click', () => {
        deleteTrip();
    });

    document.querySelector('.print').addEventListener('click', () => {
        printPage();
    })

});

// Putting a click event listener on the whole document so we can target specific target elements later on
document.addEventListener('click', (event) => {
    if(event.target.id === todoEntryDeleteElementID) {
        event.target.parentElement.style.display = "none";
    }
    if(event.target.id === todoTextID) {
        event.target.parentElement.classList.toggle('checked');
    }
})

export {
    performAction,
    updateUI,
    getWeatherDemo,
    restCountries,
    pixabay,
    func,
    distance,
    newElement,
    myFunction,
    checkStorage,
    saveTrip,
    deleteTrip,
    printPage
}