import {performAction} from './js/app'

document.addEventListener('DOMContentLoaded', (event) => {
    // install listeners here
    document.getElementById('generate').addEventListener('click', performAction);
});

import './styles/style.scss'

export {
    performAction
}