import inquirer from "inquirer";
let useraccountBalance = Math.floor(Math.random() * 100000) + 1;
interface UserBankAccount {
    userId: string,
    userPin: number,
    accountType: string,
    transactionType: string,
    creditAmount: number
};


const userBankAccount: UserBankAccount = await inquirer.prompt([
    {
        name: "userId",
        type: "number",
        message: "Please Enter your Id"
    },
    {
        name: "userPin",
        type: "number",
        message: "Please Enter your PIN"
    },
    {
        name: "accountType",
        type: "list",
        choices: ["Current Account", "Saving Account"],
        message: "Please Select Your Account Type",
    },
    {
        name: "transactionType",
        type: "list",
        choices: ["Instant Cash", "Custom WithDrawal"],
        message: "Please Select Your Transaction Type",
        when(account){
           return account.accountType
        }
    },
    {
        name: "creditAmount",
        type: "list",
        choices: [5000, 10000, 15000, 20000],
        message: "Please Select The Amount",
        when(account){
           return account.transactionType === "Instant Cash"
        }
    },
    {
        name: "creditAmount",
        type: "number",
        message: "Please Enter the Amount",
        when(account){
           return account.transactionType === "Custom WithDrawal"
        }
    },
    
]);

if(useraccountBalance < userBankAccount.creditAmount){
console.log(`\n You have insufficient Balance`);
}

else{
    useraccountBalance -= userBankAccount.creditAmount; 
    console.log(`
    \n The Amount Debited From Your Account Is ${userBankAccount.creditAmount}
    \n Your Remaining Account Balance is ${useraccountBalance}
    `);
    
}