//fizz buzz
let a = "dfg";
if(isNaN(a)){
    console.log("invalid input");
}else if(a % 3 === 0 && a % 5 === 0){
    console.log("fizzbuzz");
}else if(a % 3 === 0 ){
    console.log("fizz");
}else if(a % 5 === 0){
    console.log("buzz");
}else{
    console.log(a, " Not divisible by both 3 and 5");
}