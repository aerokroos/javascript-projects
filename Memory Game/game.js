/*
    Creating cards for game
*/
let cards = [
  {
    name: "2C",
    cardImage: "images/2C.png",
  },
  {
    name: "2C",
    cardImage: "images/2C.png",
  },
  {
    name: "10D",
    cardImage: "images/10D.png",
  },
  {
    name: "10D",
    cardImage: "images/10D.png",
  },
  {
    name: "AD",
    cardImage: "images/AD.png",
  },
  {
    name: "AD",
    cardImage: "images/AD.png",
  },
  {
    name: "AH",
    cardImage: "images/AH.png",
  },
  {
    name: "AH",
    cardImage: "images/AH.png",
  },
  {
    name: "KC",
    cardImage: "images/KC.png",
  },
  {
    name: "KC",
    cardImage: "images/KC.png",
  },
  {
    name: "KH",
    cardImage: "images/KH.png",
  },
  {
    name: "KH",
    cardImage: "images/KH.png",
  },
  {
    name: "QD",
    cardImage: "images/QD.png",
  },
  {
    name: "QD",
    cardImage: "images/QD.png",
  },
  {
    name: "QS",
    cardImage: "images/QS.png",
  },
  {
    name: "QS",
    cardImage: "images/QS.png",
  },
];
// Array of shuffle cards
let shuffleCards = [];
// Array of opened cards
let openedCards = [];
// Array of cards selected (dataset for each id )
let cardsSelected = [];
// Count of found cards
let foundCards = 0;
// Star button
let btnStart = document.querySelector("#start-btn");
// Card Table
let cardTable = document.querySelector(".card-table");

// Sounds
let startSound = new Audio("sounds/start.mp3");
let yeah = new Audio("sounds/yeah.mp3");
let error = new Audio("sounds/error.mp3");
let tada = new Audio("sounds/tada.mp3");

/*
    Init event listener to btnStart
*/
btnStart.addEventListener("click", startGame);

/* 
    This function start the game and set gameState = false
*/
async function startGame() {
  btnStart.remove();

  // Create reset button
  const btnReset = document.createElement("button");
  btnReset.classList.add("btn-reset");
  btnReset.textContent = "Reset Game";

  document.body.appendChild(btnReset);

  startSound.play();

  btnReset.addEventListener("click", function () {
    window.location.reload();
  });

  shuffleCards = await shuffle();
  drawCards(shuffleCards);
  let imgs = document.querySelectorAll("img");
  Array.from(imgs).forEach((img) => img.addEventListener("click", turnOver));
}

/* 
    This function take a cards array and
    shuffle it
*/
function shuffle() {
  shuffleCards = cards.sort(() => 0.5 - Math.random());
  return shuffleCards;
}
/*
    This function draw cards in Card Table DOM
*/
function drawCards(shuffleCards) {
  shuffleCards.forEach(function (card, index) {
    let cardDom = document.createElement("img");
    cardDom.setAttribute("src", "images/red_back.png");
    cardDom.setAttribute("data-id", index);
    cardTable.appendChild(cardDom);
  });
}

/*
    This function turnOver the cart and gets opened cards
*/
function turnOver() {
  let cardSelected = this.dataset.id;
  cardsSelected.push(cards[cardSelected].name);
  openedCards.push(cardSelected);
  this.setAttribute("src", cards[cardSelected].cardImage);

  // When opendeCards have 2 elements
  if (openedCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

/*
    This function check match between current cards (opened cards)
*/
function checkMatch() {
  let cards = document.querySelectorAll("img");
  if (
    cardsSelected[0] === cardsSelected[1] &&
    openedCards[0] !== openedCards[1]
  ) {
    foundCards++;
    console.log(foundCards);
    yeah.play();
    hasWond();
  } else {
    cards[openedCards[0]].src = "images/red_back.png";
    cards[openedCards[1]].src = "images/red_back.png";
    error.play();
  }
  cardsSelected = [];
  openedCards = [];
}

/*
  This function check if player has won
*/
function hasWond() {
  if (foundCards === cards.length / 2) {
    console.log("YEs");
    tada.play();
    document.getElementById("has-won").innerHTML = "You won!!!";
  }
}
