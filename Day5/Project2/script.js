let root = document.getElementById("root");
console.log(root);

// Create and append a heading
let h1 = document.createElement("h1");
h1.textContent = "Dynamic Content";
console.log(h1);
root.appendChild(h1);

// Create and append a button
let button = document.createElement("button");
button.textContent = "Click Me";
root.appendChild(button);

// Create and append an input field
let input = document.createElement("input");
input.type = "text";
input.placeholder = "Type something...";
root.appendChild(input);

// Button click handler
button.addEventListener("click", () => {
    let p = document.createElement("p");
    p.textContent = "Button Clicked! You typed: " + input.value;
    root.appendChild(p); // Appending paragraph to the root instead of button
});
