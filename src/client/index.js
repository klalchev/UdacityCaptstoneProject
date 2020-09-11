import {performAction} from './js/app'
import {countClock} from './js/countdown'
import {distance} from './js/countdown'

document.addEventListener('DOMContentLoaded', (event) => {
    // install listeners here
    document.getElementById('generate').addEventListener('click', () => {
        performAction();
        countClock();
});
});

import './styles/style.scss'

export {
    performAction,
    countClock,
    distance
}