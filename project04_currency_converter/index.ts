import inquirer from "inquirer";

let currencies = {
    "PKR": {
        "PKR": 1,
        "USD": 0.0035,
        "EURO": 0.0032
    },
    "USD": {
        "USD": 1,
        "PKR": 283.53,
        "EURO": 0.91
    },
    "EURO": {
        "EURO": 1,
        "PKR": 312.15,
        "USD": 1.10
    }

};

const conversion: {
    from: "PKR" | "USD" | "EURO",
    amount: number,
    to:  "PKR" | "USD" | "EURO"

} = await inquirer.prompt([{
    name: "from",
    type: "list",
    choices: Object.keys(currencies),
    message: "Select Your Currency"
},
{
    name: "amount",
    type: "number",
    message: "Enter The Conversion Amount"
},
{
    name: "to",
    type: "list",
    choices: Object.keys(currencies),
    message: "Select Conversion Currency"
}
]);

const {from, amount, to} = conversion;

if(amount > 0 && from && to ){
   let result = currencies[from][to] * amount;
    console.log(`1 ${from} is equal to ${currencies[from][to]} ${to} `);
    console.log(`${amount} ${from} is equal to ${result.toFixed(2)} ${to} `);
 }
 else{
    console.log("Please Enter Valid Amount");
    
 }