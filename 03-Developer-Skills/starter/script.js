// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const calcAge = (birthYear) => 2037 - birthYear;
// console.log(calcAge(1991));

// PROBLEM #1;
/**
 We worl for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
 */

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


// PROBLEM #2;
/**
Function should now receive 2 arrays of temps
*/

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