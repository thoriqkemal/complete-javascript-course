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
/**
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
 */

// Operator Precedence
/**
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;  // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
 */

// Coding Challenge #1
/**
Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula(you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
Test Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m tall.
Test Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
 */
/**
// Data 1
const massMark = 78,
  heightMark = 1.69;
const massJohn = 92,
  heightJohn = 1.95;

// Data 2
// const massMark = 95,
//   heightMark = 1.88;
// const massJohn = 85,
//   heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2,
  BMIJohn = massJohn / heightJohn ** 2,
  markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
 */

// Strings and Template Literals
const firstName = 'Jonas';
const job = 'Teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');
console.log(`String with
multiple
lines`);