"use strict";
const userName = 'andres';
//basic types
let myTypeString = 'Hello World';
let myTypeNumer = 33;
let myTypeBoolean = true;
myTypeString = '33';
//Array
let arrNumber = [1, 2, 3];
//Segunda forma de declarar el arreglo:
//let arrNumber2: Array<number> = [1,2,3]
let arrString = ['a', 'b', 'c'];
//tipo Any - cualquier cosa
let arrAny = ['hola', 343, false];
//Tupla
let tuplaPlayer = ['Checo', 11, true];
//Tupla Array
let tuplaPlayer2;
tuplaPlayer2 = [
    [1, 'Max'],
    [2, 'Charles'],
    [3, 'Checo']
];
//Inferencia de tipos
let myVariable;
let myVariable2 = 'hello world';
//Composicion de tipo
//Unions 
let myVariable3;
myVariable3 = 11;
