import {performAction} from './js/app'
import {func} from './js/countdown'
import {distance} from './js/countdown'
import {newElement, myFunction, todoTextID, todoEntryDeleteElementID} from './js/ToDoList'

//import {myFunction} from './js/ToDoList'
//import {addCloseButton} from './js/ToDoList'
//import {removeList} from './js/ToDoList'
//import {checkItem} from './js/ToDoList'

document.addEventListener('DOMContentLoaded', (event) => {
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
    func,
    distance,
    newElement,
    myFunction
    //addCloseButton,
    //removeList,
    //checkItem
}