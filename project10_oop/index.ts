import inquirer from "inquirer";

class Student {
    constructor(public name: string){}
}

class Person {
    students: Student[] = [];
    addStudent(student: Student){
        this.students.push(student);
    }
}

const person = new Person();

const startProgram = async (person: Person) => {
    console.log("Welcome");
    do {
    let userInput = await inquirer.prompt({
        type: "list",
        name: "selection",
        choices: ["Self", "Student"],
        message: "Whom would you like to talk with"
    });

    if(userInput.selection == "Self"){
        console.log("I am talking with my self");
        console.log("I am fine");
    }
    else if(userInput.selection == "Student"){
        const input = await inquirer.prompt({
            name: "student",
            type: "input",
            message: "Enter student name"
        });

        const student = person.students.find(stud => stud.name == input.student);

        if(!student){
            let stud = new Student(input.student);
            person.addStudent(stud);
            console.log(`Hello my name is ${stud.name}, I am fine!`);
        }
        else {
            console.log(`Hello my name is ${student.name}, I need your help!`);
        }
    }
    } while(true);
}

startProgram(person);