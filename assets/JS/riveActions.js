import { isWave } from "./riveController.js"

import {isSeizure} from "./riveController.js"

let waveButton = document.getElementById('waveButton')

let seizureButton = document.getElementById('seizureButton')

const wave = () => {
    isWave.fire();
};

const seizure = () => {
    isSeizure.fire()
}

waveButton.addEventListener("click", () => {
wave()
});

seizureButton.addEventListener("click", () => {
    seizure()
});