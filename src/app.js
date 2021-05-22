import {calculateButton} from './js/calculate-button';
import {activateToday} from './js/activate-today';
import {benefits} from './js/benefits';

import './scss/main.scss';

window.addEventListener('load', () => {
    calculateButton.init();
    activateToday.init();
    benefits.init();
});

window.addEventListener('resize', () => {
    benefits.resize();
})
