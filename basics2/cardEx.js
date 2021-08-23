/**
 * Making a  deck of cards using nested for loop
 */

const cardSuit = ["Spades", "Clubs", "Hearts", "Diamonds"];

const values = [
    "Ace", 2, 3, 4, 5, 6, 7, 8, 9, "King", "Queen", "Jack"
];

let deck = [];

for(let i = 0; i<cardSuit.length; i++){
    for(let x = 0; x < values.length; x++){
        let card = {
            Value : values[x],
            Suit  : cardSuit[i],
        }
        deck.push(card);

    }

}
console.log(deck[0]);