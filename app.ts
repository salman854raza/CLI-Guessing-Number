#! /usr/bin/env node
import inquirer from "inquirer";
// import { from } from "rxjs";
let conversion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    }
};
const answers:{
from: "PKR"|"USD"|"PKR",
to: "PKR"|"USD"|"PKR",
amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency from:"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your conversion to:"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter the amount to convert:"
    },
]);
// inquirer.prompt(questions).then((answers) => {
    const { from, to, amount } = answers;
    if (from && to && amount) {
        let result = conversion[from] [to] * amount;
        console.log(`Your conversion from ${from} to ${to} is ${result}`);
    }
    else {
        console.log("Invalid inputs");
    }











// #! /usr/bin/env node

// import inquirer from "inquirer";
// // computer will genrate a random number -(DONE)
// // User input for guessing number -(DONE)
// //  Compare user input with computer generated number and show result-(DONE)
// const randomNumber = Math.floor(Math.random() * 6 + 1);
// // console.log(randomNumber)
// // const randomNumber = 13;

// const answers = await inquirer.prompt([
//     {
//         name : "userGuessedNumber",
//         type : "number",
//         message : "please guess a number between 1 to 6:",
//     },
// ]);
// if(answers.userGuessedNumber === randomNumber){
//     console.log("Congratulation: you have guessed a correct number");
//     }else{
//         console.log("you have guessed a wrong number");
//     }
// // console.log(answers);
// // const randomNumber = Math.floor(Math.random() * 6 + 1);
// // console.log()