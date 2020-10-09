import {performAction, updateUI, getWeatherDemo, restCountries, pixabay} from './js/app'
import {func} from './js/countdown'
import {distance} from './js/countdown'
import {newElement, myFunction, todoTextID, todoEntryDeleteElementID} from './js/ToDoList'
import {saveTrip, deleteTrip, checkStorage} from './js/localStorage'

//import {myFunction} from './js/ToDoList'
//import {addCloseButton} from './js/ToDoList'
//import {removeList} from './js/ToDoList'
//import {checkItem} from './js/ToDoList'

document.addEventListener('DOMContentLoaded', (event) => {
    //call function to check localStorage content
    const storedData = JSON.parse(checkStorage()) // parses checkStorage() returned data from a string to an object and returns {"lat":"42.25", "lng":"-71.06", "trip": etc. } object, but does not return the 'items' key. That is why, in index.js we use lat and lng keys to access data and not 'items' key
    console.log(storedData);
    if (storedData != null) {
        document.getElementById('city').value = storedData.trip; // checkStorage() returns just the object value, without the 'items' key
        document.getElementById('departure').value = storedData.date;
        document.getElementById('country').innerHTML = 'Country: ' + storedData.country;
    }

    // install listeners here
    document.getElementById('generate').addEventListener('click', () => {
        performAction();
        func();
    });

    document.querySelector('.addBtn').addEventListener('click', () => {
        newElement();
    // addCloseButton();
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

/*
    document.querySelector('.close').addEventListener('click', () => {
        removeList();
    }); //event listener for checked and removed

    document.getElementById('myUL').addEventListener('click', () => {
        checkItem();
    });


}); // Event listeners do not affect DOM Loading. It is the other way around. If your JS kicks into action before DOM Loading is done, it can mess up the functions. For instance, imagine trying to install event listener on a button when it is not yet available in DOM. It simply won't work. It is hence advisable to install event listeners only once DOM is do

*/

import './styles/style.scss'
import './styles/toDoStyling.scss'
import './styles/dropdownList.scss'

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
    //addCloseButton,
    //removeList,
    //checkItem
}