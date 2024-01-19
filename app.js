class Casino {
    // Write code here
    constructor(name) {
        this.name = name;
        this.timesPlayed = 0;
    }
//write playGame Method
// Flip a coin (Math.random)
// if heads (<=.5)
//you win
//else tails
//ya lose
    playGame(betAmount) {

let coinToss = Math.random()
this.timesPlayed++
let purse = betAmount * (++this.timesPlayed +1)

if (coinToss <= .5) {
    console.log(this.name, 'wins.')
    console.log('lost', purse)
    this.winnings -= purse
} else {
    console.log('You win.')
    console.log('won', purse)
    this.winnings += purse
}
cashOut(){
    console.log("You total after cashing out is", this.winnings)
}
};

// TESTS
///testing111 
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
