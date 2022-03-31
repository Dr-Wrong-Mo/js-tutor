// Create a function that returns the first element in a given array
// Given the array [2,4,6,8], your function should return '2'
// Given the array ['Brad', 'Shawn', 'Jon'], your function should return 'Brad'
function getFirstArrayElement(arr) {}

// Create a function that will return an array of three provided arguments
// e.g. Your parameters may be 'Brad', 'Shawn', and 'Jon' or '$8.00', '$12.00' and '$20.00'.
// Your return should be ['Brad', 'Shawn', 'Jon'] or ['$8.00', '$12.00', '$20.00']
function createArray(a, b, c) {}

// Create a function that will return an array in reverse order
// Given the array [2,4,6,8], your function should return [8,6,4,2]
// Given the array ['Brad', 'Shawn', 'Jon'], your function should return ['Jon', 'Shawn', 'Brad']
function reverseArray(arr) {}

// Create a function that will increase the value of each item in an array by 1
// Given the array [2,4,6,8], your function should return [3,5,7,9]
// Given the array [0,-1,-2,-3], your function should return [1,0,-1,-2]
function incrementArray(arr) {}

// Create a function that takes an array and a string as arguments and returns the index of the string.
// Given the parameters (["Brad", "Shawn", "Jon", "Rocky"], "Jon") you should return an index value of 2
// Given the parameters (["Red", "blue", "Blue", "Green"], "blue") you should return an index value of 1
function findIndex(arr, str) {}

// Create a function that sorts an array in order
// Given an array of [9,5,3,1] you should return an array of [1,3,5,9]
// Given an array of ['Jon', 'Shawn', 'Brad'] you should return an array of ['Brad', 'Jon', 'Shawn']
function sortArray(arr) {}

module.exports = {
  getFirstArrayElement,
  createArray,
  reverseArray,
  incrementArray,
  findIndex,
  sortArray,
};
