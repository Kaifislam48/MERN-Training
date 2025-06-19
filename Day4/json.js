/*
let JsObj = {
    name : "Suresh",
}

let json = JSON.stringify(JsObj); //Convert object to JSON string
console.log(typeof json);

console.log(json);
*/

let jsobj = {
    name:"kaif",
}
// jsobj to JSON string
let jsonString = JSON.stringify(jsobj); //while sending data to server, convert it to JSON string
console.log(jsonString); // Output: {"name":"kaif"}

// JSON string to jsobj
let jsObj2 = JSON.parse(jsonString); //Convert JSON string back to object // while receiving data from server, parse it back to object
console.log(typeof jsObj2);
console.log(jsObj2); // Output: {name: "kaif"}
