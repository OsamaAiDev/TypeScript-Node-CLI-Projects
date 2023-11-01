import inquirer from "inquirer";

let todos: string[] = [];
let exit = false;

async function createTodo(todos: string[]){

    while(!exit){
        console.log("\n === Todo Application === \n");
        let userInput = await inquirer.prompt({
            name: "choice",
            type: "list",
            choices: ["Add", "Update", "Delete", "View", "Exit"],
            message: "Select The Operation \n"
        });
    
        if(userInput.choice === "Add"){
            let todoToAdd = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "Type The New Todo"
            });

            if(todoToAdd.todo){

                todos.push(todoToAdd.todo);
            }

        else{
            console.log("Please Enter A Valid Todo");
        }
            }
        else if(userInput.choice === "Update"){
            let todoToUpdate = await inquirer.prompt([
                {
                name: "todoToReplace",
                type: "list",
                choices: todos.map(todo => todo),
                message: "Select The Todo To Update"
            },
            {
                name: "newTodo",
                type: "input",
                message: "Enter New Todo"
            }
        ]);
        if(todoToUpdate.newTodo){
            let newTodo = todos.filter(todo => todo !== todoToUpdate.todoToReplace);
            todos = [...newTodo, todoToUpdate.newTodo];
            console.log(`The Todo Updated Successfully \n The Updated Todo List is ${todos}`);
            
        }
        else {
            console.log("Please Enter Valid Todo");

        }
        }
        else if(userInput.choice === "Delete"){
            let todoToDelete = await inquirer.prompt(
                {
                name: "deletedTodo",
                type: "list",
                choices: todos.map(todo => todo),
                message: "Select The Todo To Delete"
            }
        );
    
        let newTodo = todos.filter(todo => todo !== todoToDelete.deletedTodo);
        todos = [...newTodo];
        console.log(`The Todo Deleted From Todo List is ${todoToDelete.deletedTodo} \n The New Todo List is ${todos}`);
        }
        else if(userInput.choice === "View"){
            if(todos.length > 0){
                   for(let todo of todos){
                    console.log(todo);   
                }
            }
            else{
                console.log("Your Todo List Is Empty At The Moment");
                
            }
            }
        else if(userInput.choice === "Exit"){
            exit = true;
            console.log("Thanks For Using Todo Application");
            
        }
    }
    
};

createTodo(todos);

