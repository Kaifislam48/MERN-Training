/*
let arr = [];
console.log(typeof arr); // Output: object
*/

// JavaScript array is dynamic and can store elements of different data types.
let arr = []; // Creating an empty array
arr.push(3);  // Adding a number to the array
arr.push("Hello"); // Adding a string to the array
arr.push(true);    // Adding a boolean to the array
arr.push({name: "John", age: 25 });   // Adding an object to the array
arr.pop(); // Removing the last element from the array
arr.unshift("New Element"); // Adding a new element at the beginning of the array
console.log(arr); // Output: ["New Element", 3, "Hello", true, {name: "John", age: 25}]
arr.shift(); // Removing the first element from the array
console.log(arr); // Output: [3, "Hello", true, {name: "John", age: 25}]