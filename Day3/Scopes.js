//Global Scope
/*
let name = "John Doe";
function greet() {
    console.log("Hello, " + name);
}

greet(); // Output: Hello, John Doe
console.log(name); // Output: John Doe
*/
//Local Scope
function greet(){
    let name = "Jane Doe";
    console.log(name);
}

greet(); // Output: Hello, Jane Doe
