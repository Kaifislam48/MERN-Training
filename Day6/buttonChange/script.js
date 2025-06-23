let root = document.getElementById("root");
let button = document.createElement("button");

button.textContent = "Login";
root.appendChild(button);

let isLogged = true;
button.onclick = function(){
    // if(isLogged){
    //     button.textContent = "Logout";
    //     isLogged = false;
    // }else{
    //     button.textContent="login";
    //     isLogged = true;
    // }

    button.textContent = isLogged ? "Logout" : "Login";
    isLogged = !isLogged;
};


















// button.onclick = function(){
//     alert("login button clicked");
// };

// button.onclick = function(){
//     alert("second button clicked");
// };

// button.addEventListener("click", function() {
//     alert("button clicked again");
// });

// button.addEventListener("click", function() {
//     alert("clicked again");
// })

