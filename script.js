let playerHandTotal = 0;
let dealerHandTotal = 0;
let dealerHand = [];
let playerHand = [];

let deckArray = [
  { suit: "hearts", value: 2, face: 2, image: "css/images/2_of_hearts.png" },
  { suit: "hearts", value: 3, face: 3, image: "3_of_hearts.png" },
  { suit: "hearts", value: 4, face: 4, image: "4_of_hearts.png" },
  { suit: "hearts", value: 5, face: 5, image: "5_of_hearts.png" },
  { suit: "hearts", value: 6, face: 6, image: "6_of_hearts.png" },
  { suit: "hearts", value: 7, face: 7, image: "7_of_hearts.png" },
  { suit: "hearts", value: 8, face: 8, image: "8_of_hearts.png" },
  { suit: "hearts", value: 9, face: 9, image: "9_of_hearts.png" },
  { suit: "hearts", value: 10, face: 10, image: "10_of_hearts.png" },
  { suit: "hearts", value: 10, face: "J", image: "J_of_hearts.png" },
  { suit: "hearts", value: 10, face: "Q", image: "Q_of_hearts.png" },
  { suit: "hearts", value: 10, face: "K", image: "K_of_hearts.png" },
  { suit: "hearts", value: 11, face: "A", image: "A_of_hearts.png" },

  { suit: "spades", value: 2, face: 2, image: "2_of_spades.png" },
  { suit: "spades", value: 3, face: 3, image: "3_of_spades.png" },
  { suit: "spades", value: 4, face: 4, image: "4_of_spades.png" },
  { suit: "spades", value: 5, face: 5, image: "5_of_spades.png" },
  { suit: "spades", value: 6, face: 6, image: "6_of_spades.png" },
  { suit: "spades", value: 7, face: 7, image: "7_of_spades.png" },
  { suit: "spades", value: 8, face: 8, image: "8_of_spades.png" },
  { suit: "spades", value: 9, face: 9, image: "9_of_spades.png" },
  { suit: "spades", value: 10, face: 10, image: "10_of_spades.png" },
  { suit: "spades", value: 10, face: "J", image: "J_of_spades.png" },
  { suit: "spades", value: 10, face: "Q", image: "Q_of_spades.png" },
  { suit: "spades", value: 10, face: "K", image: "K_of_spades.png" },
  { suit: "spades", value: 11, face: "A", image: "A_of_spades.png" },

  { suit: "clubs", value: 2, face: 2, image: "2_of_clubs.png" },
  { suit: "clubs", value: 3, face: 3, image: "3_of_clubs.png" },
  { suit: "clubs", value: 4, face: 4, image: "4_of_clubs.png" },
  { suit: "clubs", value: 5, face: 5, image: "5_of_clubs.png" },
  { suit: "clubs", value: 6, face: 6, image: "6_of_clubs.png" },
  { suit: "clubs", value: 7, face: 7, image: "7_of_clubs.png" },
  { suit: "clubs", value: 8, face: 8, image: "8_of_clubs.png" },
  { suit: "clubs", value: 9, face: 9, image: "9_of_clubs.png" },
  { suit: "clubs", value: 10, face: 10, image: "10_of_clubs.png" },
  { suit: "clubs", value: 10, face: "J", image: "J_of_clubs.png" },
  { suit: "clubs", value: 10, face: "Q", image: "Q_of_clubs.png" },
  { suit: "clubs", value: 10, face: "K", image: "K_of_clubs.png" },
  { suit: "clubs", value: 11, face: "A", image: "A_of_clubs.png" },

  { suit: "diamonds", value: 2, face: 2, image: "2_of_diamonds.png" },
  { suit: "diamonds", value: 3, face: 3, image: "3_of_diamonds.png" },
  { suit: "diamonds", value: 4, face: 4, image: "4_of_diamonds.png" },
  { suit: "diamonds", value: 5, face: 5, image: "5_of_diamonds.png" },
  { suit: "diamonds", value: 6, face: 6, image: "6_of_diamonds.png" },
  { suit: "diamonds", value: 7, face: 7, image: "7_of_diamonds.png" },
  { suit: "diamonds", value: 8, face: 8, image: "8_of_diamonds.png" },
  { suit: "diamonds", value: 9, face: 9, image: "9_of_diamonds.png" },
  { suit: "diamonds", value: 10, face: 10, image: "10_of_diamonds.png" },
  { suit: "diamonds", value: 10, face: "J", image: "J_of_diamonds.png" },
  { suit: "diamonds", value: 10, face: "Q", image: "Q_of_diamonds.png" },
  { suit: "diamonds", value: 10, face: "K", image: "K_of_diamonds.png" },
  { suit: "diamonds", value: 11, face: "A", image: "A_of_diamonds.png" }
];
//function to get a random card off the deck
const getRandomCard = function() {
  return deckArray[Math.floor(Math.random() * deckArray.length)];
};
const startGame = () => {
  dealerHandTotal = 0;
  playerHandTotal = 0;
  dealerHand = [];
  playerHand = [];
  const cardOne = getRandomCard();
  const cardTwo = getRandomCard();
  const cardThree = getRandomCard();
  const cardFour = getRandomCard();
  playerHand.push(cardOne);
  playerHand.push(cardTwo);
  dealerHand.push(cardThree);
  dealerHand.push(cardFour);
  checkPlayerHand();
  checkDealerHand();
};


//---check player score---------------
const checkPlayerHand = () => {
  let total = 0;
  for (let i = 0; i < playerHand.length; i++) {
    total += playerHand[i].value;
  }
  playerHandTotal = total;
  console.log("playerHandTotal", total);
  if (playerHandTotal > 21) {
    alert("You Busted!");
  }
};

//---check dealer score -----------------
const checkDealerHand = () => {
  let total = 0;
  for (let i = 0; i < dealerHand.length; i++) {
    total += dealerHand[i].value;
  }
  dealerHandTotal = total;
  console.log("dealerHandTotal", total);
  if (dealerHandTotal > 21) {
    alert("Dealer busted you win!");
  }
};

//hit the player with 1 card
const hitPlayer = () => {
  const hit = getRandomCard();
  playerHand.push(hit);
  console.log("playerHand", playerHand);
  checkPlayerHand();
};
//hit the dealer with 1 card
const hitDealer = () => {
  const hit = getRandomCard();
  dealerHand.push(hit);
  console.log("dealerHand", dealerHand);
  checkDealerHand();
};
//stand function that will let dealer play then decide winner
const stand = () => {
  if (dealerHandTotal < 17);
  dealerHand.push(hitDealer);
  checkDealerHand();
}


document.getElementById("start").addEventListener("click", startGame);
document.getElementById("hit").addEventListener("click", hitPlayer);
document.getElementById("stay").addEventListener("click", stand);


function endGame () {
  if (dealerHandTotal <= playerHandTotal)
  console.log("You Lose!")
}