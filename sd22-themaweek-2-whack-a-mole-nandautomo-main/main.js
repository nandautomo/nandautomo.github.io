//console.log("main loaded");

//De variabelen met querySelector 
//De variabelen met Time zijn hier groter om de game wat rustiger en makkelijker te maken
const minimunTime= 1100;

const maximunTime= 1100;

let playerPoints= 0;


const playerPointsElement= document.querySelector(".player-points");

const allTilles = document.querySelectorAll(".tile");

//console.log(allTilles);


function getRandomNumber(min, max) {

    return Math.floor (Math.random() * (max - min + 1 ) + min);

}

//console.log(getRandomNumber(1, 50));

//functions om de punten van de speler te vehogen of te verlagen
function tileClicked(tile){

    if (tile.classList.contains("active")) {

        playerPoints = playerPoints + 1

    } else {

        playerPoints = playerPoints - 2

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

//functions om de tiles te activeren
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

