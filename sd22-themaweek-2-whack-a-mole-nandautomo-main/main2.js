//console.log("main loaded");

//Hier zijn de variablen in dit bestand, querySelector wordt ook gebruikt
//Met de variabelen minimunTime en maximunTime is de snelheid tussen tiles te bepalen 
const minimunTime= 800;

const maximunTime= 900;

let playerPoints= 0;


const playerPointsElement= document.querySelector(".player-points");

const allTilles = document.querySelectorAll(".tile");

//console.log(allTilles);

//De functions met returnwaarde en if-statements
function getRandomNumber(min, max) {

    return Math.floor (Math.random() * (max - min + 1 ) + min);

}

//console.log(getRandomNumber(1, 50));

//Functions om de de punten van de speler te verhogen of te verlagen
function tileClicked(tile){

    if (tile.classList.contains("active")) {

        playerPoints = playerPoints + 1

    } else {

        playerPoints = playerPoints - 3

    }

    tile.classList.remove("active");

    playerPointsElement.textContent = playerPoints



    //console.log(playerPoints)

}

allTilles.forEach(function(tile){

    tile.addEventListener("click",

    function(){

        tileClicked(tile);

    })

})

activateRandomTile();

//meer functions met if-statements om de tiles te activeren
function activateRandomTile(){

    const currentActiveTile = document.querySelector(".tile.active")

    if (currentActiveTile) {

        currentActiveTile.classList.remove('active');

    }

    const randomTileNumber = getRandomNumber(0,allTilles.length -1);

    const selectedTile = allTilles[randomTileNumber];

    selectedTile.classList.add("active")

    StartGame();
}

function StartGame(){
    const RandomTime = getRandomNumber(minimunTime, maximunTime);
    setTimeout(activateRandomTile, RandomTime);

}

StartGame();