#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 6:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You have guessed the correct number.");
}
else {
    console.log("Sorry, you have guessed the wrong number.");
}
console.log(answers);
