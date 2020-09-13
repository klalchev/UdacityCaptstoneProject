import {performAction} from './js/app'
import {func} from './js/countdown'
import {distance} from './js/countdown'

document.addEventListener('DOMContentLoaded', (event) => {
    // install listeners here
    document.getElementById('generate').addEventListener('click', () => {
        performAction();
        func();
});
});

import './styles/style.scss'

export {
    performAction,
    func,
    distance
}