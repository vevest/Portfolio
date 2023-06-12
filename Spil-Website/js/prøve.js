// window.addEventListener("load", startSpil);


// function startSpil() {

//   // giv point og liv fra start:

//   let points = 0;
//   let antalLiv = 3;

//   //adder klasser til hvad der sker med g-streng og ble
//   document.querySelector("#panty_container").classList.add("bouncing");
//   document.querySelector("#panty_container").addEventListener("animationiteration", restartPanty);
  
//   document.querySelector("#diaper_container").classList.add("bouncing");
//   document.querySelector("#diaper_container").addEventListener("animationiteration", restartDiaper);

//   //adder klasser for hvad der sker når man trykker på dem
//   document.querySelector("#panty_container").addEventListener("mousedown", hitPanty);
//   document.querySelector("#diaper_container").addEventListener("mousedown", hitDiaper);

//   // adder timer:

//   console.log("Tiden er startet");
//   //starter med at fylde timeren op
//   document.querySelector("#time_container").classList.add("fill");
//   //Når animation er færdig kaldes funktion endGame
//   document.querySelector("time_container").addEventListener("animationend", endGame);

// }

// // function for hitting panty
// function hitPanty() {
//   console.log("hitPanty");
//   document.querySelector("#panty_container").classList.add("freeze");
//   document.querySelector("#panty_sprite").classList.add("disAppear");

//   // remove eventlistener so that you cannot click more than once
//   document.querySelector("#panty_container").removeEventListener("mousedown", hitPanty);
//   addPoint();
//   updatePoints();
  
//   // adding eventlistener to sprite-animation -> restartApple()
//   document.querySelector("#panty_container").addEventListener("animationend", restartPanty);
// }

// function restartPanty() {
//   console.log("restartPanty");
//   document.querySelector("#panty_container").classList = "";
//   document.querySelector("#panty_sprite").classList = "";
//   document.querySelector("#panty_container").removeEventListener("animationend", restartPanty);
//   let rndNum = generateRandomNumber();
//   let newPos = "pos" + rndNum;
//   document.querySelector("#panty_container").offsetHeight;
//   document.querySelector("#panty_container").classList.add("bouncing");
//   document.querySelector("#panty_container").classList.add(newPos);
//   document.querySelector("#panty_container").addEventListener("mousedown", hitPanty);
// }

// function restartDiaper() {
//   console.log("restartDiaper");
//   document.querySelector("#diaper_container").classList = "";
//   document.querySelector("#diaper_sprite").classList = "";
//   document.querySelector("#diaper_container").removeEventListener("animationend", restartDiaper);
//   let rndNum = generateRandomNumber();
//   let newPos = "pos" + rndNum;
//   document.querySelector("#diaper_container").offsetHeight;
//   document.querySelector("#diaper_container").classList.add("bouncing");
//   document.querySelector("#diaper_container").classList.add(newPos);
//   document.querySelector("#diaper_container").addEventListener("mousedown", hitDiaper);
// }


// // create a function that takes 1 argument (max value) and generates a random number
// function generateRandomNumber() {
//   console.log("genRndNum");
//   let myNumber;
//   myNumber = Math.random();
//   console.log(myNumber);
//   myNumber = myNumber * 4;
//   console.log(myNumber);
//   myNumber = Math.floor(myNumber);
//   console.log(myNumber);
//   myNumber = myNumber + 1;
//   console.log(myNumber);
//   myNumber = Math.floor(Math.random() * 4) + 1;
//   console.log(myNumber);
//   return myNumber;
// }

// // function for hitting diaper
// function hitDiaper() {
//   console.log("hitDiaper");
//   document.querySelector("#diaper_container").classList.add("freeze");
//   document.querySelector("#diaper_sprite").classList.add("disAppear");
//   loseLife();
//   updateLives();
// }

// // function for adding point
// function addPoint() {
//   points = points + 1;
//   }

//   // function for printing point
// function updatePoints() {
//   document.querySelector("#points_sprite").textContent = points;
// }

// // function for losing lives
// function loseLife() {
//   if (antalLiv > 1) {
//         document.querySelector("#liv" + antalLiv).classList.add("gray");
//         antalLiv = antalLiv - 1;
//         console.log(antalLiv);
//       }
//   lives = lives - 1;
// }
//   // add condition: if lives = 0 endGame
//   if (lives < 1) {
//     endGame();
//   }

//   // function for printing lives
// function updateLives() {
//   document.querySelector("#liv").textContent = lives;
// }


// // function endGame()
// function endGame() {
//   console.log("endGame");
//   // remove timer animation
//   // stop all animations
//   // determine whether we have won or lost
// }


// // function removeLife() {
// //   console.log("removeLife");

// //   if (antalLiv > 1) {
// //     document.querySelector("#liv" + antalLiv).classList.add("gray");
// //     antalLiv = antalLiv - 1;
// //     console.log(antalLiv);
// //   } else {
// //     console.log("gameover");
// //   }
// // }

// // let number = Math.floor(Math.random() * 5) + 1;

