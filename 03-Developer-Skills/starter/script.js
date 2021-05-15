// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const calcAge = (birthYear) => 2037 - birthYear;
// console.log(calcAge(1991));

// PROBLEM #1;
/**
 We worl for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."


const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and mon temperatures?
// - What' a sensor error? and what to do?

// 2. Breaking up into sub-problems
// - How to ignore errors?
// - find max value in temp array
// - find min value in temp array
// - subtract min from max (amplitude)   and return it

const calcAmplitude = function (temps) {
  let min = temps[0];
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;

    if (currTemp < min) min = currTemp;
    if (currTemp > max) max = currTemp;
  }
  console.log(min, max);
  return max - min;
}

// calcAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcAmplitude(temperature);
console.log(amplitude);
 */


// PROBLEM #2;
/**
Function should now receive 2 arrays of temps

// 1. Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2. Breaking uo into sub-problems
//  - How to merge 2 arrays?

const calcTempAmplitude = function (temp1, temp2) {
  const merge = temp1.concat(temp2);

  return calcAmplitude(merge);
}

const tempAmplitude = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
console.log(tempAmplitude);
*/

// Debugging
/**
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C. FIX
    // value: Number(prompt('Degrees celsius')),
    value: 10
  };

  // B. FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
}

// A. IDENTIFY
console.log(measureKelvin());


const calcTempBug = function (temp1, temp2) {
  const temps = temp1.concat(temp2);

  let min = 0;
  let max = 0;
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;

    debugger;
    if (currTemp < min) min = currTemp;
    if (currTemp > max) max = currTemp;
  }
  console.log(min, max);
  return max - min;
}

const tempAmplitude = calcTempBug([3, 5, 1], [9, 0, 5]);
console.log(tempAmplitude);
 */

// Coding Challenge #1
/**
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures.Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs astring like the above to the console.Try it with both test datasets.
2. Use the problem - solving framework: Understand the problem and break it up into sub - problems!

Test data:
- Data 1: [17, 21, 23]
- Data 2: [12, 5, -5, 0, 4]

GOOD LUCK 😀
 */

// const temperatures = [17, 21, 23];
const temperatures = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '...';
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}ºC in ${i + 1} days ... `;
  }
  return str;
}

console.log(printForecast(temperatures));
