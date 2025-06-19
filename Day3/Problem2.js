let Correct_username = "admin123";
let Correct_password = "password";

let username = "admin123 ";
let password = "  password ";

if(username.trim() === Correct_username && password.trim() === Correct_password){
    console.log("Login Successful");
} else if (username.trim() === Correct_username && password.trim()!== Correct_password){
    console.log("Incorrect Password");
} else if (username.trim()!== Correct_username && password.trim() === Correct_password){
    console.log("Incorrect Username");
} else {
    console.log("Incorrect Username and Password");
}