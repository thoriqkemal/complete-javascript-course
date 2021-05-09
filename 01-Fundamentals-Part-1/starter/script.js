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
/**
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
 */

// Taking Decisions: if /else Statements
/**
const age = 15;

// Control Structure
if (age >= 18) {
  console.log('Sarah can start driving license 🚙');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1998;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
 */

// Coding Challenge #2
/**
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

1. Print a nice output to the console, saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.Example: "Mark's BMI(28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 😉

GOOD LUCK 😀
 */
/**
// Data 1
// const massMark = 78,
//   heightMark = 1.69;
// const massJohn = 92,
//   heightJohn = 1.95;

// Data 2
const massMark = 95,
  heightMark = 1.88;
const massJohn = 85,
  heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2,
  BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

// Template Literals
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI(${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI(${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
 */

// Type Conversion and Coercion
/**
// Type Conversion is when we manually convert from one type to another
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion is when javascript automatically convert type behind the scenes
console.log('I am ' + 23 + ' years old');
// all math operators work except +
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1;  // '11'
n = n - 1;        // 11 - 1
console.log(n);
 */

// Truthy and Falsy Values
/**
// 5 Falsy values: 0, '', undefined, null, NaN
// Truthy values: empty object, any number that is not zero and any string that is not an empty string

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
 */

// Equality Operators: == vs. ===
/**
const age = '18';
if (age === 18) console.log('You became an adult :D (strict)');
if (age == 18) console.log('You became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

// loose equality always do type coercion
if (favourite === 23) {  // '23' === 23
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else if (favourite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');
 */

// Logical Operators
/**
const hasDriversLicense = true;   // A
const hasGoodVision = true;       // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive ...');
// }

const isTired = false;            // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive ...');
}
 */

// Coding Challenge #3
/**
There are two gymnastics teams, Dolphins and Koalas.They compete against each other 3 times.The winner with the highest average score wins a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console.Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.Hint: Use a logical operator to test for minimum score, as well as multiple else -if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points.Otherwise, no team wins the trophy

Test data:
- Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
- Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
- Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
 */

/**
// Data 1
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreDolphins < scoreKoalas) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// Bonus
// Test Data 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// Test Data 2
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}
 */

// The switch Statement
/**
const day = 'thursday';

switch (day) {
  case 'monday':  // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
    break;
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}
 */

// Statements and Expressions
/**
// Expression is a piece of code that produces a value
// 3 + 4
// 1991
// true && false && !false

// Statement is a bigger piece of code that is executed and which does not produce a value on itself

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);
 */

// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink green tea 🍵') : console.log('I like to drink water 🥛');

const drink = age >= 18 ? 'green tea 🍵' : 'water 🥛';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'green tea 🍵';
} else {
  drink2 = 'water 🥛';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'green tea 🍵' : 'water 🥛'}`);