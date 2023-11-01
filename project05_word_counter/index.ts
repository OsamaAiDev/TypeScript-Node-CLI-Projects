import inquirer from "inquirer";

const counter = (text: string): string => {
    let words = text.split(" ").length;
    let characters = text.replace(/\s/g,"").length;
    return `The paragraph has ${words} words and ${characters} characters`
}

async function startCounter(counter: (text: string) => string){
    do{
        let userInput = await inquirer.prompt({
            type: "input",
            message: "Enter a paragraph",
            name: "text"
        });
    
        console.log(counter(userInput.text));  
    } while(true);
}

startCounter(counter);