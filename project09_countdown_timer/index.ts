import inquirer from 'inquirer';
import chalk from 'chalk';
import { differenceInSeconds } from 'date-fns';

let userInput = await inquirer.prompt({
    type: "number",
    name: "value",
    message: "Enter seconds",
    validate: (input) => {
        if(isNaN(input))
            return "Please enter a valid number";
        else if(input > 60)
            return "Please enter seconds in between 1 and 60 seconds";
        else
            return true;
         }
    
})

function startTimer(val: number){
    const initialTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(initialTime);

    setInterval((()=> {
        const currentTime = new Date();
        const timeDifference = differenceInSeconds(intervalTime, currentTime);
        if(timeDifference <= 0){
            console.log("Timer has expired");
            process.exit();
        }
        const minutes = Math.floor(timeDifference % (3600 * 24) / 3600);
        const seconds = Math.floor(timeDifference % 60);
        console.log(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
    }), 1000)
}

startTimer(userInput.value);