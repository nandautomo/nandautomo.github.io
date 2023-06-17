alert("Je opent de kist en vindt een puzzle. Dit is een rekenpuzzel, los het op om een 2 cijferige code te krijgen.")

function startGame(){
    const a = prompt("Wat is het 2 cijferige code?")
    if(a === '51') {
        alert("Het antwoord is correct");
    } else {
        alert("Het antwoord is incorrect");
        return;
    }
}