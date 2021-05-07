// Linking a JavaScript File
/**
let js = 'amazing';
console.log(40 + 8 + 23 - 10);
 */

// Values and Variables
/**
console.log('Jonas');
console.log(23);

let firstName = 'Matilda';  // camelCase notation

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = 'JM';
let $function = 27;

let person = 'Jonas';
const PI = 3.14;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);
 */

// Data Types
/**
let javascriptIsFun = true;
console.log(true);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
// console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
 */

// let, const and var
/**
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;  // const values can't change
// const job;         // const values must be initialized

var job = 'programmer';   // don't use var
job = 'teacher';

lastName = 'Schmedtmann';   // never declare variable like this
console.log(lastName);
 */

// Basic Operators
// Mathematical Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment Operators = Operator proceedings
let x = 10 + 5; // 15
x += 10;        // x = x + 10 => 25
x *= 4;         // x = x * 4 => 100
x++;            // x = x + 1
x--;            // x = x - 1
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah);  // >, < , >= <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
