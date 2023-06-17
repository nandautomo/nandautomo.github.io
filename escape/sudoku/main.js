alert("The key unlocks the cabinet and you see a safe inside with a puzzle to unlock it.");

const button = document.querySelector(".check-button");
button.addEventListener("click", check);
function check(){

const bluebutton = document.querySelector(".blue");
const yellowbutton = document.querySelector(".yellow");
const redbutton = document.querySelector(".red");
const greenbutton = document.querySelector(".green");
console.log(greenbutton.value, redbutton.value, yellowbutton.value, bluebutton.value);
if (greenbutton.value == 8 && redbutton.value == 1 && yellowbutton.value == 6 && bluebutton.value == 9) {
    alert("You got it right");
} else {
    alert("You got it wrong");
}
}


