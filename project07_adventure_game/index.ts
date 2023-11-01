import inquirer from 'inquirer';
import chalk from 'chalk';

class Player {
    fuel: number = 100;
    constructor(public name: string){

    }
}

class Opponent extends Player {};

let player = await inquirer.prompt({
    name: 'name',
    type: 'input',
    message: "Enter your name"
});

let opponent = await inquirer.prompt({
    name: "name",
    type: "list",
    choices: ["Jin", "Hwoarang", "Lee", "Yoshimitsu"],
    message: "Select your opponent"
});

let player1 = new Player(player.name);
let opponent1 = new Opponent(opponent.name);
console.log(`${chalk.bold.green(player.name)} VS  ${chalk.bold.red(opponent.name)}`);

do {

    let ask = await inquirer.prompt({
        name: "option",
        type: "list",
        choices: ["Attack", "Drink Portion", "Run for your life"],
        message: "Select"
    
    });
    
    if(ask.option == "Attack"){
        let no = Math.floor(Math.random() * 2);
        if(no > 0){
            player1.fuel -= 25;
            console.log(chalk.bold.red(`${player1.name} fuel is ${player1.fuel}`));
            console.log(chalk.bold.green(`${opponent1.name} fuel is ${opponent1.fuel}`));
            if(player1.fuel <= 0){
                console.log(chalk.bold.red(`You loose ${player1.name}, better luck next time!`));
                break; 
            }

        }
    
        else{
            opponent1.fuel -= 25;
            console.log(chalk.bold.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
            console.log(chalk.bold.green(`${player1.name} fuel is ${player1.fuel}`));
            if(opponent1.fuel <= 0){
                console.log(chalk.bold.green(`You Win`));
                break; 
            }
            
        }
    }
    
    else if(ask.option == "Drink Portion"){
        player1.fuel = 100;
        console.log(chalk.bold.green(`Now your fuel is ${player1.fuel}`));
    }
    
    else if(ask.option == "Run for your life"){
        console.log(chalk.bold.red(`You loose ${player1.name}, better luck next time!`));
        break;
    }

}while(true);