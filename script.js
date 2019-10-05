
let playerHand = [];
let playerScore = 0;
let dealerScore = 0;
let deckArray = [
    {suit: 'hearts', value: 2 , face: 2 , image: '2_of_hearts.png'},
    {suit: 'hearts', value: 3 , face: 3, image: '3_of_hearts.png'},
    {suit: 'hearts', value: 4 , face: 4, image: '4_of_hearts.png'},
    {suit: 'hearts', value: 5 , face: 5, image: '5_of_hearts.png'},
    {suit: 'hearts', value: 6 , face: 6, image: '6_of_hearts.png'},
    {suit: 'hearts', value: 7 , face: 7, image: '7_of_hearts.png'},
    {suit: 'hearts', value: 8 , face: 8, image: '8_of_hearts.png'},
    {suit: 'hearts', value: 9 , face: 9, image: '9_of_hearts.png'},
    {suit: 'hearts', value: 10 , face: 'J', image: 'J_of_hearts.png'},
    {suit: 'hearts', value: 10 , face: 'Q', image: 'Q_of_hearts.png'},
    {suit: 'hearts', value: 10 , face: 'K', image: 'K_of_hearts.png'},
    {suit: 'hearts', value: 11 , face: 'A', image: 'A_of_hearts.png'},

    {suit: 'spades', value: 2 , face: 2 , image: '2_of_spades.png'},
    {suit: 'spades', value: 3 , face: 3, image: '3_of_spades.png'},
    {suit: 'spades', value: 4 , face: 4, image: '4_of_spades.png'},
    {suit: 'spades', value: 5 , face: 5, image: '5_of_spades.png'},
    {suit: 'spades', value: 6 , face: 6, image: '6_of_spades.png'},
    {suit: 'spades', value: 7 , face: 7, image: '7_of_spades.png'},
    {suit: 'spades', value: 8 , face: 8, image: '8_of_spades.png'},
    {suit: 'spades', value: 9 , face: 9, image: '9_of_spades.png'},
    {suit: 'spades', value: 10 , face: 'J', image: 'J_of_spades.png'},
    {suit: 'spades', value: 10 , face: 'Q', image: 'Q_of_spades.png'},
    {suit: 'spades', value: 10 , face: 'K', image: 'K_of_spades.png'},
    {suit: 'spades', value: 11 , face: 'A', image: 'A_of_spades.png'},

    {suit: 'clubs', value: 2 , face: 2 , image: '2_of_clubs.png'},
    {suit: 'clubs', value: 3 , face: 3, image: '3_of_clubs.png'},
    {suit: 'clubs', value: 4 , face: 4, image: '4_of_clubs.png'},
    {suit: 'clubs', value: 5 , face: 5, image: '5_of_clubs.png'},
    {suit: 'clubs', value: 6 , face: 6, image: '6_of_clubs.png'},
    {suit: 'clubs', value: 7 , face: 7, image: '7_of_clubs.png'},
    {suit: 'clubs', value: 8 , face: 8, image: '8_of_clubs.png'},
    {suit: 'clubs', value: 9 , face: 9, image: '9_of_clubs.png'},
    {suit: 'clubs', value: 10 , face: 'J', image: 'J_of_clubs.png'},
    {suit: 'clubs', value: 10 , face: 'Q', image: 'Q_of_clubs.png'},
    {suit: 'clubs', value: 10 , face: 'K', image: 'K_of_clubs.png'},
    {suit: 'clubs', value: 11 , face: 'A', image: 'A_of_clubs.png'},

    {suit: 'diamonds', value: 2 , face: 2 , image: '2_of_diamonds.png'},
    {suit: 'diamonds', value: 3 , face: 3, image: '3_of_diamonds.png'},
    {suit: 'diamonds', value: 4 , face: 4, image: '4_of_diamonds.png'},
    {suit: 'diamonds', value: 5 , face: 5, image: '5_of_diamonds.png'},
    {suit: 'diamonds', value: 6 , face: 6, image: '6_of_diamonds.png'},
    {suit: 'diamonds', value: 7 , face: 7, image: '7_of_diamonds.png'},
    {suit: 'diamonds', value: 8 , face: 8, image: '8_of_diamonds.png'},
    {suit: 'diamonds', value: 9 , face: 9, image: '9_of_diamonds.png'},
    {suit: 'diamonds', value: 10 , face: 'J', image: 'J_of_diamonds.png'},
    {suit: 'diamonds', value: 10 , face: 'Q', image: 'Q_of_diamonds.png'},
    {suit: 'diamonds', value: 10 , face: 'K', image: 'K_of_diamonds.png'},
    {suit: 'diamonds', value: 11 , face: 'A', image: 'A_of_diamonds.png'},
  ]
  
  

  //initizalize the game 
function startGame(){
  document.getElementById(startBtn)
  for (i = 0; i < 2; i++) {
    let deck = deckArray[Math.floor(Math.random()*deckArray.length)];
   // console.log(deck);
   playerHand.push(deck);
   //console.log(deck);
    }
  }
  console.log(playerHand)
  startGame();

  let playerHandTotal = '';
  for (b = 0; b < playerHand.length; b++) {
    playerHandTotal += (playerHand[b].value)
  }
  console.log(playerHandTotal);
  
  
// function to keep track of player score

// function to check to see if player score is over 21

// function to split value of Ace to either 11 or 1

//let dealer.value
//  value < 18
// dealer stays