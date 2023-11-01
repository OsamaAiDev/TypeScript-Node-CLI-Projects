import { faker } from "@faker-js/faker";
import chalk from "chalk";
import inquirer from "inquirer";

class Customer {
    constructor(public name: string, public age: number, public mobileNumber: number, public accountNumber: number, public gender: string){

    }
}

interface BankAccount {
    accountNumber: number,
    balance: number
}

class Bank {
    customers: Customer[] = [];
    accounts: BankAccount[] = [];
    addCustomer(customer: Customer) {
        this.customers.push(customer);
    }
    addAccountNumber(bankAccount: BankAccount) {
        this.accounts.push(bankAccount);
    }
}

let osamaBank = new Bank();

// Create customers

for (let i = 0; i <=3 ; i++) {
    let name = faker.person.fullName();
    let mobileNumber = parseInt(faker.phone.number());
    const customer = new Customer(name,25+2 ,mobileNumber, i + 1,"male");
    osamaBank.addCustomer(customer);
    osamaBank.addAccountNumber({accountNumber: customer.accountNumber, balance: 1000 * i});
}

// bank functionality

async function bankServices(bank: Bank){
    let service = await inquirer.prompt({
        type: "list",
        name: "selection",
        message: 'Please the select the service you want',
        choices: ["View Balance", "Cash Withdraw", "Cash Deposit"]
    });

    if(service.selection == "View Balance"){
        let userInput = await inquirer.prompt({
            type: "input",
            name: "accNo",
            message: "Please enter your account number"
        });
        let accountNo = osamaBank.accounts.find(acc => acc.accountNumber == userInput.accNo);

        if(accountNo){
            console.log(chalk.bold.green(`Your balance is: ${accountNo.balance}$`));
        }
        else {
            console.log(chalk.bold.red("Please enter valid account number"));

        }
    }
    else if(service.selection == "Cash Deposit"){
        let userInput = await inquirer.prompt({
            type: "input",
            name: "accNo",
            message: "Please enter your account number"
        });
        let accountNo = osamaBank.accounts.find(acc => acc.accountNumber == userInput.accNo);
        if(accountNo){
            let cash = await inquirer.prompt({
                type: "input",
                name: "amount",
                message: "Please enter the amount to deposit"
            });
            if(cash.amount <= 0){
                console.log(chalk.bold.red("Please enter valid amount"));
            }
            else{

                accountNo.balance += parseInt(cash.amount);
                console.log(chalk.bold.green(`You have deposit: ${cash.amount}$`));
                console.log(chalk.bold.green(`Your remaining balance is: ${accountNo.balance}$`));

            }
        }
        else {
            console.log(chalk.bold.red("Please enter valid account number"));

        }

    }
    else if(service.selection == "Cash Withdraw") {
        let userInput = await inquirer.prompt({
            type: "input",
            name: "accNo",
            message: "Please enter your account number"
        });
        let accountNo = osamaBank.accounts.find(acc => acc.accountNumber == userInput.accNo);
        if(accountNo){
            let cash = await inquirer.prompt({
                type: "input",
                name: "amount",
                message: "Please enter the amount to withdraw"
            });
            if(accountNo.balance < cash.amount){
                console.log(chalk.bold.red(`Your have Insufficent balance your account balance is: ${accountNo.balance}$`));
            }
            else{
                let balance = accountNo.balance - parseInt(cash.amount);
                accountNo.balance = balance;
                console.log(chalk.bold.red(`You have withdraw: ${cash.amount}$`));
                console.log(chalk.bold.green(`Your remaining balance is: ${balance}$`));

            }
        }
        else {
            console.log(chalk.bold.red("Please enter valid account number"));

        }
    }
}

bankServices(osamaBank);