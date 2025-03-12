/**
 * Reverses a given string
 * @param {string} str - The string to reverse
 * @returns {string} The reversed string
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Checks if a string is a palindrome
 * @param {string} str - The string to check
 * @returns {boolean} True if the string is a palindrome, false otherwise
 */
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

/**
 * Calculates the factorial of a number
 * @param {number} n - The number to calculate factorial for
 * @returns {number} The factorial of the number
 */
function calculateFactorial(n) {
  if (n < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
}

/**
 * Finds the maximum number in an array
 * @param {number[]} arr - The array of numbers
 * @returns {number} The maximum number in the array
 */
function findMaxNumber(arr) {
  if (arr.length === 0) {
    throw new Error('Cannot find maximum of empty array');
  }
  return Math.max(...arr);
}

/**
 * Filters out even numbers from an array
 * @param {number[]} arr - The array of numbers
 * @returns {number[]} A new array containing only odd numbers
 */
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}

module.exports = {
  reverseString,
  isPalindrome,
  calculateFactorial,
  findMaxNumber,
  filterEvenNumbers
}; 