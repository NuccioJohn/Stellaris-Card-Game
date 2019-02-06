/*
 * list that holds all of the cards
 */
    let cards = [
        "fa-diamond",
        "fa-diamond",
        "fa-paper-plane-o",
        "fa-paper-plane-o",
        "fa-anchor",
        "fa-anchor",
        "fa-bolt",
        "fa-bolt",
        "fa-cube",
        "fa-cube",
        "fa-leaf",
        "fa-leaf",
        "fa-bicycle",
        "fa-bicycle",
        "fa-bomb",
        "fa-bomb"
    ];

//open card list. keeps track of the revealed cards the players sees.
let openCards = [];


//My Custom Function was created with inpiration from other users who commented around the original function provided: http://stackoverflow.com/a/2450976
function shuffle(array){
    let j = 0;
    let temp = "";
    for(let i =0; i < array.length; i++){
        j = Math.floor( Math.random() * (i + 1) );
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 //You lose Function
//  let lost = () => {
//         clearInterval(time);
//         swal({
//             title: "You Lost!", 
//             text: "You lost all your Star!", 
//             icon: "warning",
//             buttons: "Play Again!"  
//         }).then((restartGame) => {
//             if(restartGame){
//                 restartStart();
//             }
//         });
// }

 //Checks for win
 // let checkForWin = () => {
 //        if(document.querySelector(".deck").querySelectorAll(".match").length === document.querySelector(".deck").children.length){
 //            clearInterval(time);
 //            swal({
 //                title: "You got a " + starCount + " Star Win!", 
 //                text: "It took you " + (moveCount + 1)+ " many moves and " + (180 - sec - 1) + " seconds!", 
 //                icon: "success",
 //                buttons: "Play Again!"  
 //            }).then((restartGame) => {
 //                if(restartGame){
 //                    restartStart();
 //                }
 //            });
 //        }
 // }


function showCard(element) {
    if(openCards.length > 0){
     openCards[0].classList.remove("show");
     openCards[0].classList.remove("open");
    }
     element.classList.add("show");
     element.classList.add("open");
     openCards.push(element);
     if(openCards.length >= 2){
        cardMatchCheck();
     } 
 }

function addClicks(element) {
    element.addEventListener('click', function() {
        showCard(element);
    });
}

///FUnction removes all children of an element
function destroyChildren(element){
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

///allows for the game to start and restart

let restartStart = () => {
    destroyChildren(document.querySelector(".deck"))
    cards = shuffle(cards);
    for(let i = 0; i <cards.length; i++){
        const newLi = document.createElement('li');
        newLi.classList.add("card");
        //newLi.classList.add("match");

        const newI = document.createElement('i');
        newI.classList.add("fa");
        newI.classList.add(cards[i]);
        
        newLi.appendChild(newI);
        addClicks(newLi); 
        document.querySelector(".deck").appendChild(newLi);
    }
}


 //Sets up game when everything is ready
document.addEventListener('DOMContentLoaded', function () {
    restartStart();
});