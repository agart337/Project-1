const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

letmouseMoved = false;

const pointer = {
    x: 0.5 * window.innerWidth,
    y: 0.5 * window.innerHeight,
}

const params = {
    pointsNumber: 40,
    widthFactor: 10,
    mouseThreshold: 0.5,
    spring: 0.25,
    friction: 0.5,
};

const trail = new Array(params.pointsNumber);
for (let i = 0; i < params.pointsNumber; i++) {
    trail[i] = {
        x: pointer.x,
        y: pointer.y,
        dx: 0,
        dy: 0,
    };
}

// https://www.youtube.com/watch?v=lsP_ZVtlySc start at 3:15 //
window.addEventListener("click", (e) => { })