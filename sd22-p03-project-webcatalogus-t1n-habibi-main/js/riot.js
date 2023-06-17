const URL_BLIZZARD = "https://mbo-sd.nl/period3-fetch/games-pc-riot-games";

fetch(URL_BLIZZARD)
.then(function (response) { //haalt de informatie op van fetch
    return response.json();
})
.then(function (data) {
    console.log(data); //dumpt data in de console

    const row = document.querySelector('.row');
    for (let i = 0; i < data.length; i++) {   //loopt door de data array heen
        const gameObject = data[i]; //maakt object
        const card = makeCard(gameObject); //zet informatie in de parameter
        row.innerHTML += card; //voegt de card toe aan de row div
    }
});



function makeCard(game) {  //zet informatie in de card
    const card = `
    <div class="card" style="width: 18rem;">
        <img src="${game.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${game.title}</h5>  
            <h6 class="card-title">${game.genres}</h6>
            <h6 class="card-title">${game.releaseDate}</h6>
            <p class="card-text">${game.description}</p>
        </div>
    </div>`;

    return card;  //returns card met alle informatie ingevuld
}
