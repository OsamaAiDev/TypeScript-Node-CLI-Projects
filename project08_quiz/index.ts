import inquirer from "inquirer";
import chalk from "chalk";


const apiLink = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple";

let fetchData = async (apiLink: string) => {
    let fetchQuiz = await fetch(apiLink);
    let response = await fetchQuiz.json();
    return response.results;
};

let data = await fetchData(apiLink);

let startQuiz = async () => {
let score = 0;
let user = await inquirer.prompt({
    type: 'input',
    name: "name",
    message: "Enter your name"
});

for (let i = 0; i < 5; i++){

    let options = [...data[i].incorrect_answers, data[i].correct_answer];

    let userInput = await inquirer.prompt({
        name: "value",
        type: "list",
        choices: options.map(val => val),
        message: data[i].question
    });
    if(userInput.value == data[i].correct_answer){
        score++;
        console.log(`${chalk.bold.green("Correct answer")}`);
    }
    else {
        console.log(`${chalk.bold.red("Incorrect answer")}`);
        console.log(`${chalk.bold.red(`Correct answer is  ${data[i].correct_answer}`)}`);
    }
}
if(score < 3){
    console.log(`Hi ${user.name} your score is: ${chalk.bold.red(score)}`);
    console.log(chalk.bold.red(`Percentage: ${score * 100 / 5} %`));
    console.log(`${chalk.bold.red("Failed")}`);

}
else{
    console.log(`Hi ${user.name} your correct answers are ${chalk.bold.green(score)} out of 5`);
    console.log(chalk.bold.green(`Percentage: ${score * 100 / 5} %`));
    console.log(chalk.bold.green("Passed"));
}
}
startQuiz();