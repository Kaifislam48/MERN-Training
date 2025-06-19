//Logic for timer 

/*
let sec = 0;
function timer(){
    sec += 1;
    console.log("countdown: " + sec);
}

setInterval(timer, 1000);
*/


let sec = 0;
let min = 0;

function timer(){
    sec += 1;
    if(sec == 60){
        sec = 0;
        min += 1;
    }
    console.log("Time: " + min + " minutes and " + sec + " seconds");
}
setInterval(timer, 100);