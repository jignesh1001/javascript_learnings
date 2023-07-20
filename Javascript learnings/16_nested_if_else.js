// nested if else

// winning number 19

// 19  your guess is right
// 17 too low 
// 20 too high

let winningNumber = 19
let userGuess = +prompt("Guess a Number");

console.log(typeof userGuess,userGuess);

if(userGuess === winningNumber){
    console.log("Your Guess is right")

}
else{
    if(userGuess < winningNumber){
        console.log(" Your number is too low")
    }
    else{
        console.log(" Your number is too high")
    }
}

