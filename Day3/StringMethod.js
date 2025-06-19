let username = "suresh";
console.log(username.length); // Output: 6
console.log(username.toUpperCase()); // Output: SURESH
console.log(username.toLowerCase()); // Output: suresh
console.log(username.trim()); // Output: suresh---->this removes whitespaces from both ends of the string
console.log(username.slice(2, 5)); // Output: resh
console.log(username.includes("sh")); // Output: true);
console.log(username.indexOf("h")); // Output: 5
console.log(username.replace("s", "S")); // Output: Suresh
console.log(username.split("")); // Output: ["s", "u", "r", "e", "s", "h"]
console.log(username.concat(" Kumar")); // Output: suresh Kumar 