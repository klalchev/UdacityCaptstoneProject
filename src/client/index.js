import {performAction} from './js/app'
import {func} from './js/countdown'
import {distance} from './js/countdown'
import {newElement} from './js/ToDoList'
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
});

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

export {
    performAction,
    func,
    distance,
    newElement,
    //addCloseButton,
    //removeList,
    //checkItem
}