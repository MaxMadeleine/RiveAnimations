import { isFeed } from "./riveController.js"

import {isHaha} from "./riveController.js"

import { ioSocket } from "./socket/socketController.js"

let feedButton = document.getElementById('feedButton')

let angryButton = document.getElementById('hahaButton')

const feed = () => {
    isFeed.fire();
    ioSocket.emit("feed");
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

