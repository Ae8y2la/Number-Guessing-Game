#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWellcome to NG - Number-Guessing-Game\n");
const randomNumber = Math.floor(Math.random() * 3 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please enter a number (Number limit from 5 to 1)",
    },
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the correct number");
}
else {
    console.log("Sorry! You guessed the wrong number");
}
