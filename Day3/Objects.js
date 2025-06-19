let students = {
    name:"suresh",
    age:20,
    subjects:["Maths", "Science", "English"],
    address:{
        city:"Mumbai",
        state:"Maharashtra"
    },
};
//console.log(students);     
//console.log(students.name);

//console.log(students["name"]);

//students.name = "John";     //updates the value of name
//console.log(students.name); //prints updated value of name

//students["name"] = "Jane";    //updates the value of name using bracket notation
//console.log(students["name"]); //prints updated value of name

//console.log(students.subjects.length); //prints the length of subjects array
//console.log(students.subjects[0]); //prints the first subject
//console.log(students.address["city"])  //prints the value of city in address object

console.log(Object.keys(students)); //prints all keys in the object
console.log(Object.values(students)); //prints all values in the object
console.log(Object.entries(students)); //prints all key-value pairs in the object
