#! /usr/bin/env node
import inquirer from "inquirer";
// computer will genrate a random number -(DONE)
// User input for guessing number -(DONE)
//  Compare user input with computer generated number and show result-(DONE)
const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber)
// const randomNumber = 13;
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1 to 6:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation: you have guessed a correct number");
}
else {
    console.log("you have guessed a wrong number");
}
// console.log(answers);
// const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log()
