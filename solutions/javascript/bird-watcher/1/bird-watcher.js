// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */

export function totalBirdCount(birdsPerDay) {
  var tbc = 0;
  for (let index = 0; index < birdsPerDay.length ; index++) {
    tbc+=birdsPerDay[index]
  }
  return tbc
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  var tbc = 0;
  let startIndex=7*(week-1);
  let endIndex=startIndex+6;
  for (let index = startIndex; index < endIndex+1 ; index++) {
    tbc+=birdsPerDay[index]
  }
  return tbc
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  var fixArray=[];
  for (let index = 0; index < birdsPerDay.length; index++) {
    if (index%2==0) {
      fixArray.push(birdsPerDay[index]+=1)
    }
    else{
      fixArray.push(birdsPerDay[index])
    }
  }
  return birdsPerDay
}
