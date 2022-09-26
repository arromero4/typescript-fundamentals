"use strict";
function greet(name) {
    console.log(`Hello ${name}`);
}
greet('Max');
function getNumber() {
    return Math.floor(Math.random() * 10);
}
console.log(getNumber());
//el ? es una propiedad opcional
function printPosition(position) {
    console.log(`Lat: ${position.lat} Long: ${position.long}`);
}
printPosition({ lat: 3, long: 5 });
