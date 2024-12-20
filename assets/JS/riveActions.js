import { isFeed } from "./riveController.js"

import {isHaha} from "./riveController.js"

let feedButton = document.getElementById('feedButton')

let angryButton = document.getElementById('hahaButton')

const feed = () => {
    isFeed.fire();
};

const haha = () => {
    isHaha.fire()
}

feedButton.addEventListener("click", () => {
feed()
});

angryButton.addEventListener("click", () => {
    haha()
});

