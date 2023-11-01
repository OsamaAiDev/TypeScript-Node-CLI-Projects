#! /usr/bin/env node 
import inquirer from "inquirer";

const userInput: {
    firstNumber: number,
    secondNumber: number,
    operator: string
} = await inquirer.prompt([
    {
    type: "number",
    name: "firstNumber",
    message: "Please Enter First Number"
},
{
    type: "number",
    name: "secondNumber",
    message: "Please Enter Second Number"
},
{
    type: "list",
    name: "operator",
    choices: ["+", "-", "/", "*"],
    message: "Select the operator from the list"
}
]);


const {firstNumber, secondNumber, operator} = userInput;
let result: number = 0;

if(!isNaN(firstNumber) && !isNaN(secondNumber)){
switch(operator){
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
}
console.log(`The result of your calculation is ${result}`);
}

else{
console.log(`Please type valid numbers`);
}