/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let res = arr.map(function (num){
    return num + 1;
});

console.log(res); // Output: [2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let evennums = arr.filter(function (num){
    return num % 2 === 0;
});

console.log(evennums); // Output: [2, 4, 6, 8]