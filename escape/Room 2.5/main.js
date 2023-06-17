alert("Dit is puzzel 2, een woordenpuzzel. Je wordt per vraag gevraagd om het antwoord te geven op volgorde. Als alles goed is kan je door.");
alert("LET OP, alle antwoorden zijn zonder hoofdletters.")

function startGame() {

    const a = prompt("1. Dit slaat data op in code:");
    if(a === 'variabelen') {
        alert("Het antwoord is correct");
    } else {
        alert("Het antwoord is incorrect");
        return;
    }

    const b = prompt("2. Een manier om de style van de pagina te veranderen:")
    if(b === 'css') {
        alert("Het antwoord is correct");
    } else {
        alert("Het antwoord is incorrect");
        return;
    }

    const c = prompt("3. Dit zorgt er voor dat je functies kan toevoegen aan een pagina:")
    if(c === 'javascript') {
        alert("Het antwoord is correct");
    } else {
        alert("Het antwoord is incorrect");
        return;
    }

    const d = prompt("4. Manier hoe je pagina wordt beschreven:")
    if(d === 'html') {
        alert("Het antwoord is correct");
    } else {
        alert("Het antwoord is incorrect");
        return;
    }

    const e = prompt("5. Het begin van een tag t/m het einde van een tag:")
    if(e === 'element') {
        alert("Het antwoord is correct");
    } else {
        alert("Het antwoord is incorrect");
        return;
    }
}