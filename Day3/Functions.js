//functions statement,

function hello(){
    console.log("hello");
};

//functions expression
const hai = function(){
    console.log("hai");
};

// Arrow function
const hru = () => {
    console.log("how are you?");
};

//higher order function
function hof(hello, hai, hru){
    hello();
    hai();
    hru();
};

hof(hello, hai, hru);