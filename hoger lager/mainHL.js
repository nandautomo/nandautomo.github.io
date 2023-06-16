let imgArray =[]
imgArray.push("./dice/dice 1.png");
imgArray.push("./dice/dice 2.png");
imgArray.push("./dice/dice 3.png");
imgArray.push("./dice/dice 4.png");
imgArray.push("./dice/dice 5.png");
imgArray.push("./dice/dice 6.png");




// let name1 = prompt(`your name`)
// function startGame() {
//   let credit =20;
// let deposit= 3;
// while (credit >= 0) {
//   alert(`your throw`);
//   let user = document.getElementById("img1");
//   img1.src = imgArray[getRandomIntInclusive(0,5)];
//   let user2 = document.getElementById("img2");
//   img2.src = imgArray[getRandomIntInclusive(0,5)];

//   alert(`computer throw`);
//   let computer = document.getElementById("img3");
//   img1.src = imgArray[getRandomIntInclusive(0,5)];
//   let computer2 = document.getElementById("img4");
//   img2.src = imgArray[getRandomIntInclusive(0,5)];

//   if (computer + computer2 > user + user2){
//     credit = credit - deposit
//     alert(`computer won your credits is ${credit}`)

//   } else if(computer + computer2 < user + user2){
//     credit = credit + deposit
//     alert(`${name1} won your credits is ${credit}`)
//   }
//   else if( user == computer){
//     alert(`draw${credit}`)

//     credit = credit -5
//   }
// }
// }

//__________________
function changeImg(){

  

  let dice1 = getRandomIntInclusive(0,5);
  let dice2 = getRandomIntInclusive(0,5);

  let img1 = document.getElementById("img1");
  img1.src = imgArray[dice1];
  let img2 = document.getElementById("img2");
  img2.src = imgArray[dice2];
  
  
  let dice3 = getRandomIntInclusive(0,5);
  let dice4 = getRandomIntInclusive(0,5);

  let img3 = document.getElementById("img3");
  img3.src = imgArray[dice3];
  let img4 = document.getElementById("img4");
  img4.src = imgArray[dice4];


  let playerPoints = dice1 + dice2 + 2;
  let compPoints = dice3 + dice4 + 2;

  
  if(playerPoints > compPoints){
   
    alert(`De computer heeft lager gegooid, je hebt gewonnen`);
   
  }
  else if(playerPoints < compPoints){
  
    alert(`De computer heeft hoger gegooid, je hebt verloren`);
   
  }else if(playerPoints == compPoints){
   alert(`Het is geljk spel `);
  }
  }
 
  // let credit=20
  // let lose=3
  // let win=5
  // while(credit>0){


  //   if(hoger = img1 + img2 > img3 + img4){

  //     credit=credit+win
  //     alert(`you won your credits is ${credit}`);
  //   }


  //   else if(hoger = img1 + img2 < img3 + img4){

  //     credit=credit+lose
  //     alert(`you lost your credits is ${credit}`);
  //   }
    
  //   else if(lager = img1 + img2 < img3 + img4){

  //     credit=credit+win
  //     alert(`you won your credits is ${credit}`);
  //   }
    
  //   else if(lager = img1 + img2 > img3 + img4){

  //     credit=credit+lose
  //     alert(`you lost your credits is ${credit}`);
  //   }
  // }


//let x = getrandomintclusive( 1,6)
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}