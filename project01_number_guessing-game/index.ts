import inquirer from "inquirer";

type UserInput = {
    userguessNumber: number
};

const userInput: UserInput = await inquirer.prompt({
    type: "number",
    name: "userguessNumber",
    message: "Guess a number between 1 and 10"
});

const numberToGuess = Math.floor(Math.random()*10) + 1;
console.log(numberToGuess);
console.log(userInput);

const {userguessNumber} = userInput;

if(isNaN(userguessNumber) || userguessNumber > 10){
    console.log("Please Enter a valid no between 1 and 10");  
}

else if(userguessNumber === numberToGuess){
    console.log("Congratulation your number matched");
    
}
else{
    console.log(
    `Your Number ${userguessNumber} does not matched with system generated number ${numberToGuess}`);
}


