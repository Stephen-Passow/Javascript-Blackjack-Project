//setting player and dealer hands to 0 and empty arrays
let playerHandTotal = 0;
let dealerHandTotal = 0;
let dealerHand = [];
let playerHand = [];
//deck of 52 playing cards
let deckArray = [
  { suit: "hearts", value: 2, face: 2, image: "css/images/2_of_hearts.png" },
  { suit: "hearts", value: 3, face: 3, image: "css/images/3_of_hearts.png" },
  { suit: "hearts", value: 4, face: 4, image: "css/images/4_of_hearts.png" },
  { suit: "hearts", value: 5, face: 5, image: "css/images/5_of_hearts.png" },
  { suit: "hearts", value: 6, face: 6, image: "css/images/6_of_hearts.png" },
  { suit: "hearts", value: 7, face: 7, image: "css/images/7_of_hearts.png" },
  { suit: "hearts", value: 8, face: 8, image: "css/images/8_of_hearts.png" },
  { suit: "hearts", value: 9, face: 9, image: "css/images/9_of_hearts.png" },
  { suit: "hearts", value: 10, face: 10, image: "css/images/10_of_hearts.png" },
  { suit: "hearts", value: 10, face: "J", image: "css/images/Jack_of_hearts.png" },
  { suit: "hearts", value: 10, face: "Q", image: "css/images/Queen_of_hearts.png" },
  { suit: "hearts", value: 10, face: "K", image: "css/images/King_of_hearts.png" },
  { suit: "hearts", value: 11, face: "A", image: "css/images/Ace_of_hearts.png" },

  { suit: "spades", value: 2, face: 2, image: "css/images/2_of_spades.png" },
  { suit: "spades", value: 3, face: 3, image: "css/images/3_of_spades.png" },
  { suit: "spades", value: 4, face: 4, image: "css/images/4_of_spades.png" },
  { suit: "spades", value: 5, face: 5, image: "css/images/5_of_spades.png" },
  { suit: "spades", value: 6, face: 6, image: "css/images/6_of_spades.png" },
  { suit: "spades", value: 7, face: 7, image: "css/images/7_of_spades.png" },
  { suit: "spades", value: 8, face: 8, image: "css/images/8_of_spades.png" },
  { suit: "spades", value: 9, face: 9, image: "css/images/9_of_spades.png" },
  { suit: "spades", value: 10, face: 10, image: "css/images/10_of_spades.png" },
  { suit: "spades", value: 10, face: "J", image: "css/images/Jack_of_spades.png" },
  { suit: "spades", value: 10, face: "Q", image: "css/images/Queen_of_spades.png" },
  { suit: "spades", value: 10, face: "K", image: "css/images/King_of_spades.png" },
  { suit: "spades", value: 11, face: "A", image: "css/images/Ace_of_spades.png" },

  { suit: "clubs", value: 2, face: 2, image: "css/images/2_of_clubs.png" },
  { suit: "clubs", value: 3, face: 3, image: "css/images/3_of_clubs.png" },
  { suit: "clubs", value: 4, face: 4, image: "css/images/4_of_clubs.png" },
  { suit: "clubs", value: 5, face: 5, image: "css/images/5_of_clubs.png" },
  { suit: "clubs", value: 6, face: 6, image: "css/images/6_of_clubs.png" },
  { suit: "clubs", value: 7, face: 7, image: "css/images/7_of_clubs.png" },
  { suit: "clubs", value: 8, face: 8, image: "css/images/8_of_clubs.png" },
  { suit: "clubs", value: 9, face: 9, image: "css/images/9_of_clubs.png" },
  { suit: "clubs", value: 10, face: 10, image: "css/images/10_of_clubs.png" },
  { suit: "clubs", value: 10, face: "J", image: "css/images/Jack_of_clubs.png" },
  { suit: "clubs", value: 10, face: "Q", image: "css/images/Queen_of_clubs.png" },
  { suit: "clubs", value: 10, face: "K", image: "css/images/King_of_clubs.png" },
  { suit: "clubs", value: 11, face: "A", image: "css/images/Ace_of_clubs.png" },

  { suit: "diamonds", value: 2, face: 2, image: "css/images/2_of_diamonds.png" },
  { suit: "diamonds", value: 3, face: 3, image: "css/images/3_of_diamonds.png" },
  { suit: "diamonds", value: 4, face: 4, image: "css/images/4_of_diamonds.png" },
  { suit: "diamonds", value: 5, face: 5, image: "css/images/5_of_diamonds.png" },
  { suit: "diamonds", value: 6, face: 6, image: "css/images/6_of_diamonds.png" },
  { suit: "diamonds", value: 7, face: 7, image: "css/images/7_of_diamonds.png" },
  { suit: "diamonds", value: 8, face: 8, image: "css/images/8_of_diamonds.png" },
  { suit: "diamonds", value: 9, face: 9, image: "css/images/9_of_diamonds.png" },
  { suit: "diamonds", value: 10, face: 10, image: "css/images/10_of_diamonds.png" },
  { suit: "diamonds", value: 10, face: "J", image: "css/images/Jack_of_diamonds.png" },
  { suit: "diamonds", value: 10, face: "Q", image: "css/images/Queen_of_diamonds.png" },
  { suit: "diamonds", value: 10, face: "K", image: "css/images/King_of_diamonds.png" },
  { suit: "diamonds", value: 11, face: "A", image: "css/images/Ace_of_diamonds.png" }
];
//function to get a random card off the deck
const getRandomCard = function () {
  return deckArray[Math.floor(Math.random() * deckArray.length)]
};
// assigning cards to display on the screen
let dealerCards = document.getElementsByClassName("dealerCards")[0];
let playerCards = document.getElementsByClassName("playerCards")[0];

//---check player score---------------
const checkPlayerHand = () => {
  let total = 0;
  for (let i = 0; i < playerHand.length; i++) {
    total += playerHand[i].value;
  }
  playerHandTotal = total;
  //send player score to populate screen
  document.getElementById("playerScore").innerHTML = total;
};

//---check dealer score -----------------
const checkDealerHand = () => {
  // console.log("checkDealerHand - dealerHand", dealerHand);
  let total = 0;
  for (let i = 0; i < dealerHand.length; i++) {
    total += dealerHand[i].value;
  }
  dealerHandTotal = total;
};

//hit the player with 1 card
const hitPlayer = () => {
  let card = getRandomCard();
  let cardImg = document.createElement("img");
  cardImg.setAttribute("src", card.image);
  cardImg.className = "card";
  playerCards.appendChild(cardImg);
  playerHand.push(card);
  checkPlayerHand();
  if (playerHandTotal > 21)
    endGame();
};
//hit the dealer with 1 card
const hitDealer = () => {
  let card = getRandomCard();
  let cardImg = document.createElement("img");
  cardImg.setAttribute("src", card.image);
  cardImg.className = "card";
  dealerCards.appendChild(cardImg);
  const hit = getRandomCard();
  dealerHand.push(hit);
  checkDealerHand();

};
//stand function that will let dealer play then decide winner
const stand = () => {
  for (i = 0; i < dealerHand.length; i++) {
    if (dealerHandTotal <= 17) {
      hitDealer();
    }
    else if (dealerHandTotal > 17) {
      return endGame();
    }
    console.log('dealerHandTotal', dealerHandTotal[i]);
  }
};

//function to end the game and send a message based on win condition of player or dealer
function endGame() {
  if (playerHandTotal === 21) {
    document.getElementById("notifications").innerHTML = "Blackjack! You win! Click New Game to play again";
    resetGame();
  }
  if (playerHandTotal > 21) {
    document.getElementById("notifications").innerHTML = "You went over 21! The dealer wins Click New Game to play again";
    resetGame();
  }
  if (dealerHandTotal === 21) {
    document.getElementById("notifications").innerHTML = "You lost. Dealer got blackjack Click New Game to play again";
    resetGame();
  }
  if (dealerHandTotal > 21) {
    document.getElementById("notifications").innerHTML = "Dealer went over 21! You win! Click New Game to play again";
    resetGame();
  }
  if (dealerHandTotal >= 17 && playerHandTotal > dealerHandTotal && playerHandTotal < 21) {
    document.getElementById("notifications").innerHTML = "You win! You beat the dealer. Click New Game to play again";
    resetGame();
  }
  if (dealerHandTotal >= 17 && playerHandTotal < dealerHandTotal && dealerHandTotal < 21) {
    document.getElementById("notifications").innerHTML = "You lost. Dealer had the higher score. Click New Game to play again";
    resetGame();
  }
  if (dealerHandTotal >= 17 && playerHandTotal === dealerHandTotal && dealerHandTotal < 21)
    document.getElementById("notifications").innerHTML = "You tied! Click New Game to play again";
  resetGame();
}
//function to reset the board
function resetGame() {
  playerHandTotal = [];
  dealerHandTotal = [];
  playerHandTotal = 0;
  dealerHandTotal = 0;
  // document.getElementById("hit").disabled = true;
  // document.getElementById("stay").disabled = true;
  document.getElementById("start").disabled = false;
}
//send player score to populate screen
document.getElementById("playerScore").innerHTML
//start game function and reset points/images when clicked
const startGame = () => {
  resetGame();
  document.getElementById("notifications").innerHTML = ""
  dealerHandTotal = 0;
  playerHandTotal = 0;
  for (i = 0; i < playerHand.length; i++) {
    playerCards.removeChild(playerCards.lastChild)
  }
for (i = 0; i < dealerHand.length; i++) {
  dealerCards.removeChild(dealerCards.lastChild)
}
  dealerHand = [];
  playerHand = [];
  hitPlayer();
  hitPlayer();
  hitDealer();
  hitDealer();
  checkPlayerHand();
  checkDealerHand();
};
document.getElementById("start").addEventListener("click", startGame);
document.getElementById("hit").addEventListener("click", hitPlayer);
document.getElementById("stay").addEventListener("click", stand);