//Object Destructuring 
/*
const person = {
    name: "John",
    age : 30,
};

const {name, age} = person;
console.log(name, age); // Output: John 30 
*/

//Array Destructuring
/*
const nums = [1, 2, 3, 4];
const [a, b, c, d, e] = nums;
console.log(a, b); // Output: 1 2
*/

//add two array
/*
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
 
let res = [...num1,...num2];    //... is spread operator
// res = res.reverse();
console.log(res);
*/

let nums1 = [1, 2, 3, 4];
let nums2 = [, 5, 6, 7, 8]
// let res = [...nums1, ...nums2];  //... is spread operator
let [a, b, ...abc] = nums1; // rest operator
console.log(abc);
