#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//created user balance and pin
let myBalance = 10000;
let mypin = 1234;
//welcome note print
console.log(chalk.bgBlueBright("\n\tWelcome to Hassancoder - ATM_Machine\n\t"));
console.log(chalk.blue("\t\tPlease Enter Your ATM Pin Code\t"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.greenBright("\n\tEnter Your Pin Code\n")
    }
]);
if (pinAnswer.pin === mypin) {
    console.log(chalk.bgGreenBright("\n\t\tPin is Correct, Login Successfully!\t\t"));
    // console.log(`Current Amount Balance is ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select Your Operation",
            choices: ["Withdraw_Cash", "Cheak_Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw_Cash") {
        let withdraw = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select Your Withdraw Method",
                choices: ["Fast_Cash", "Other_Amount"]
            }
        ]);
        if (withdraw.withdrawMethod === "Fast_Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Your Amount",
                    choices: ["500", "1000", "2000", "3000"]
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash}, Withdraw Successfully`);
                console.log(`Your Remaining Balance is ${myBalance}`);
            }
        }
        else if (withdraw.withdrawMethod === "Other_Amount") {
            let CashAmount = await inquirer.prompt([
                {
                    name: "Cash_withdraw",
                    type: "number",
                    message: "Enter Your Withdraw Amount"
                }
            ]);
            if (CashAmount.withdraw > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= CashAmount.Cash_withdraw;
                console.log(`${CashAmount.Cash_withdraw}Withdraw Successfully`);
                console.log(`Your Remaining Balance is ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "Cheak_Balance") {
        console.log(`Your Current Balance is ${myBalance}`);
    }
}
else {
    console.log(chalk.bgRedBright("\n\tPin is Incorrect, Please Try Again\n\t"));
}
