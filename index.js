#! /usr/bin/env node
//CLI-NUMBER-GUESSING-GAME
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        message: "plz guessed a number between 1-6",
        type: "number",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("congratulations you Guessed right number");
}
else {
    console.log("you Guess wrong number");
}
