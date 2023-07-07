var z = 1;
function sayHello(){
    console.log(z);
    z++;
    if(z == 3){
        //stop
        clearInterval(id); //Used To stop the timer when the timer reaches 
    }
}

// sayHello("Swagat");
setTimeout(sayHello,10000); //Running a function after particular timeout and time is in milli seconds.
// Doesn't make function call 
var id = setInterval(sayHello,10000); //Running a function after

// //CountDown Timer
const prompt = require("prompt-sync")({sigint:true});
var t = prompt("Enter counter time:");
function countDown(){
    console.log(t);
    t--;
    if(t == 0){
        //stop
        clearInterval(ct);
    }
}

var ct = setInterval(countDown,100);
