// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let array1Num = array1.join('')
  let array2Num = array2.join('')
  return (Number(array1Num)+Number(array2Num))
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let digitsArray = [];
  let num = String(value);
  for (let index = 0; index < num.length; index++) {
    digitsArray.push(num[index]);
  }
  for (let index = 0; index < digitsArray.length; index++) {
    if (digitsArray[index]==digitsArray.reverse()[index]) {
        continue
    }
    else{
        return false
        break
    }
  }

  if (digitsArray === digitsArray.reverse()) {
    console.log(digitsArray);
    console.log(digitsArray.reverse());
    return true;
  } 
  else {
    return false;
  }
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  // input is alwasys a string
  if (input == null || input =="undefined"  || input ==`''` || input=='') {
    return "Required field";
  } else if ( isNaN(input)|| input =='0') {
    return "Must be a number besides 0";
  } else {
    return "";
  }
}
