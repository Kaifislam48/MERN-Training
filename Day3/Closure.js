//Closures example
/*
function greet(){
    let name = "John Doe";

    return function(){
        console.log("Hello, " + name);
    };
};

const greetFunc = greet();
greetFunc();  // Output: Hello, John Doe
*/

/*
function restarant(){
    let order = "a burger";

    function waiter(){
        console.log(order + "delivered");
    }
}

let res = restarant();
console.log(res); // undefined
*/

function restarant(){
    let order = "a burger";

    return function waiter(){
        console.log(order + "delivered");
    }
}

let res = restarant();
res();  // Output: a burger delivered