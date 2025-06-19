function add(a, b){
    console.log(a + b);
};

function sub(a, b){
    console.log(a - b);
};

function multiply(a, b){
    console.log(a * b);
};

function divide(a, b){
    if(b === 0){
        console.log("Error: Division by zero is not allowed");
    }else{
        console.log(a / b);
    }
};

function modulus(a, b){
    console.log(a % b);
};

function power(a, b){
    console.log(Math.pow(a, b));
};


// Higher order function example

/*function calculator(add, sub, multiply, divide, modulus, power){
    add(5, 3);
    sub(10, 5);
    multiply(2, 3);
    divide(10, 2);
    modulus(10, 3);
    power(2, 3);
};

calculator(add, sub, multiply, divide, modulus, power);
*/

function calculator(add, sub, multiply, divide, modulus, power, a, b){
    add(a, b);
    sub(a, b);
    multiply(a, b);
    divide(a, b);
    modulus(a, b);
    power(a, b);
};

calculator(add, sub, multiply, divide, modulus, power, 5, 3);