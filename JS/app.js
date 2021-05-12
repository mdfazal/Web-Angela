// console.log("Hello world");

// if(1+1 === 2){
//     console.log("Math still works");
// }

// 0-5 - free 
// 5-10 - child $10
// 10-65 adult $20
// 65+ senior $10

// const age = 80;

// if (age < 5){
//     console.log("You are a baby. You get in free");
// } else if (age < 10){
//     console.log("Yu are a child you pay $10");
// }  else if (age < 65){
//     console.log("Yu are a adult you pay $20");
// } else {
//     console.log("You are a senior pay $10");
// }

let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum){
    maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random()*maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;

while (parseInt(guess) !== targetNum){
    if (guess === 'q') break;
    attempts++;
    if(guess > targetNum){
        guess = prompt("Too high Enter a new Guess:");
    } else {
        guess = prompt("Too Low Enter a new guess");
    }
}

if(guess === 'q'){
    console.log("ok, you quit");
} else {
    console.log(`You Gor it It took you ${attempts} guesses `);
}



