/**
 * Making a  deck of cards using nested for loop
 */

// const cardSuit = ["Spades", "Clubs", "Hearts", "Diamonds"];

// const values = [
//     "Ace", 2, 3, 4, 5, 6, 7, 8, 9, "King", "Queen", "Jack"
// ];
// let group = [];
// let deck =  [];

// for(let i = 0; i<cardSuit.length; i++){
//     for(let x = 0; x < values.length; x++){
//         let card = {
//             Value : values[x],
//             Suit  : cardSuit[i],
//         }
//         group.push(card);

//     }
//     deck.push(group);

// }
// console.log(deck[0]);









const cardSuit = ["Spades", "Clubs", "Hearts", "Diamonds"];

const values = [
    "Ace", 2, 3, 4, 5, 6, 7, 8, 9, "King", "Queen", "Jack"
];
let group = [];
let deck =  [];

for(let i = 0; i<cardSuit.length; i++){
    for(let x = 0; x < values.length; x++){
        let card = {
            Value : values[x],
            Suit  : cardSuit[i],
        }
        group.push(card);

    }
    deck.push(group);
    group = null;

}
console.log(deck);
