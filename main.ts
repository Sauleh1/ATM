#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { SoniasDetails , EricsDetails , HamzahsDetails , YourDetails } from "./Users.js"

setTimeout(async () => {
    let a = await inquirer.prompt([
        {
            name: "ID",
            type: "password",
            message: "Enter your ID:"
        },
        {
            name: "PIN",
            type: "password",
            message: "Enter your PIN:"
        }
    ])
    
    let { ID , PIN } = a;
    
    if (ID && PIN) {
        for (let i = 0; i < 1000; i++) {
            if (YourDetails.ID == ID && YourDetails.PIN == PIN) {
                console.log(`Welcome! [ YourName ]`);
                let b = await inquirer.prompt([
                    {
                        name: "What_To_Do1",
                        type: "list",
                        choices: [`Withdraw`,`Deposit`,`Check Details`,`Exit`],
                        message: "What do you want to do?"
                    }
                ])
                let { What_To_Do1 } = b;
    
                if (What_To_Do1 == "Withdraw") {
                    let c = await inquirer.prompt([
                        {
                            name: "WithdrawAmount",
                            type: "number",
                            message: "How much amount do you want to withdraw?",
                            validate: (input: number) => {
                                if (isNaN(input)) {
                                    return "Amount should be given in numbers only, please."
                                }
                                return true
                            }
                        }
                    ])
                    let { WithdrawAmount } = c;
    
                    if (WithdrawAmount > YourDetails.ATMBalance) {
                        console.log(`Sorry, you dont have enough balance in your account.`);
                        console.log(`-----------------------------------------------------------`);
                        
                    } else {
                            YourDetails.ATMBalance = YourDetails.ATMBalance - WithdrawAmount
                            console.log(`Succesfully Withdrawed ${WithdrawAmount} Rs.! You now have ${YourDetails.ATMBalance} Rs. in your account.`);
                    }
                }
                else if (What_To_Do1 == "Deposit") {
                    let d = await inquirer.prompt([
                        {
                            name: "Deposit",
                            type: "number",
                            message: "How much to Deposit?"
                        }
                    ])
                    let { Deposit } = d;
    
                    if (Deposit) {
                        YourDetails.ATMBalance = YourDetails.ATMBalance + Deposit
                        console.log(`Succesfully Deposited ${Deposit} Rs. into your bank Account!`);
                    }
                } 
                else if (What_To_Do1 == "Check Details") {
                    console.log("Here are your details:");
                    console.log(YourDetails);
                } else {
                    process.exit();
                }
            }
            else if (SoniasDetails.ID == ID && SoniasDetails.PIN == PIN) {
                let b = await inquirer.prompt([
                    {
                        name: "What_To_Do1",
                        type: "list",
                        choices: [`Withdraw`,`Deposit`,`Check Details`,`Exit`],
                        message: "What do you want to do?"
                    }
                ])
                let { What_To_Do1 } = b;
    
                if (What_To_Do1 == "Withdraw") {
                    let c = await inquirer.prompt([
                        {
                            name: "WithdrawAmount",
                            type: "number",
                            message: "How much amount do you want to withdraw?",
                            validate: (input: number) => {
                                if (isNaN(input)) {
                                    return "Amount should be given in numbers only, please."
                                }
                                return true
                            }
                        }
                    ])
                    let { WithdrawAmount } = c;
    
                    if (WithdrawAmount > SoniasDetails.ATMBalance) {
                        console.log(`Sorry, you dont have enough balance in your account.`);
                        console.log(`-----------------------------------------------------------`);
                        
                    } else {
                            SoniasDetails.ATMBalance = SoniasDetails.ATMBalance - WithdrawAmount
                            console.log(`Succesfully Withdrawed ${WithdrawAmount} Rs.! You now have ${SoniasDetails.ATMBalance} Rs. in your account.`);
                    }
                }
                else if (What_To_Do1 == "Deposit") {
                    let d = await inquirer.prompt([
                        {
                            name: "Deposit",
                            type: "number",
                            message: "How much to Deposit?"
                        }
                    ])
                    let { Deposit } = d;
    
                    if (Deposit) {
                        SoniasDetails.ATMBalance = SoniasDetails.ATMBalance + Deposit
                        console.log(`Succesfully Deposited ${Deposit} Rs. into your bank Account!`);
                    }
                } 
                else if (What_To_Do1 == "Check Details") {
                    console.log("Here are your details:");
                    console.log(SoniasDetails);
                } else {
                    process.exit();
                }
            }
            else if (EricsDetails.ID == ID && EricsDetails.PIN == PIN) {
                console.log(`Welcome! Eric!`);
                let b = await inquirer.prompt([
                    {
                        name: "What_To_Do1",
                        type: "list",
                        choices: [`Withdraw`,`Deposit`,`Check Details`,`Exit`],
                        message: "What do you want to do?"
                    }
                ])
                let { What_To_Do1 } = b;
    
                if (What_To_Do1 == "Withdraw") {
                    let c = await inquirer.prompt([
                        {
                            name: "WithdrawAmount",
                            type: "number",
                            message: "How much amount do you want to withdraw?",
                            validate: (input: number) => {
                                if (isNaN(input)) {
                                    return "Amount should be given in numbers only, please."
                                }
                                return true
                            }
                        }
                    ])
                    let { WithdrawAmount } = c;
    
                    if (WithdrawAmount > EricsDetails.ATMBalance) {
                        console.log(`Sorry, you dont have enough balance in your account.`);
                        console.log(`-----------------------------------------------------------`);
                        
                    } else {
                            EricsDetails.ATMBalance = EricsDetails.ATMBalance - WithdrawAmount
                            console.log(`Succesfully Withdrawed ${WithdrawAmount} Rs.! You now have ${EricsDetails.ATMBalance} Rs. in your account.`);
                    }
                }
                else if (What_To_Do1 == "Deposit") {
                    let d = await inquirer.prompt([
                        {
                            name: "Deposit",
                            type: "number",
                            message: "How much to Deposit?"
                        }
                    ])
                    let { Deposit } = d;
    
                    if (Deposit) {
                        EricsDetails.ATMBalance = EricsDetails.ATMBalance + Deposit
                        console.log(`Succesfully Deposited ${Deposit} Rs. into your bank Account!`);
                    }
                } 
                else if (What_To_Do1 == "Check Details") {
                    console.log("Here are your details:");
                    console.log(EricsDetails);
                } else {
                    process.exit();
                }
            }
            else if (HamzahsDetails.ID == ID && HamzahsDetails.PIN == PIN) {
                console.log(`Welcome! Hamzah!`);
                let b = await inquirer.prompt([
                    {
                        name: "What_To_Do1",
                        type: "list",
                        choices: [`Withdraw`,`Deposit`,`Check Details`,`Exit`],
                        message: "What do you want to do?"
                    }
                ])
                let { What_To_Do1 } = b;
    
                if (What_To_Do1 == "Withdraw") {
                    let c = await inquirer.prompt([
                        {
                            name: "WithdrawAmount",
                            type: "number",
                            message: "How much amount do you want to withdraw?",
                            validate: (input: number) => {
                                if (isNaN(input)) {
                                    return "Amount should be given in numbers only, please."
                                }
                                return true
                            }
                        }
                    ])
                    let { WithdrawAmount } = c;
    
                    if (WithdrawAmount > HamzahsDetails.ATMBalance) {
                        console.log(`Sorry, you dont have enough balance in your account.`);
                        console.log(`-----------------------------------------------------------`);
                        
                    } else {
                            HamzahsDetails.ATMBalance = HamzahsDetails.ATMBalance - WithdrawAmount
                            console.log(`Succesfully Withdrawed ${WithdrawAmount} Rs.! You now have ${HamzahsDetails.ATMBalance} Rs. in your account.`);
                    }
                }
                else if (What_To_Do1 == "Deposit") {
                    let d = await inquirer.prompt([
                        {
                            name: "Deposit",
                            type: "number",
                            message: "How much to Deposit?"
                        }
                    ])
                    let { Deposit } = d;
    
                    if (Deposit) {
                        HamzahsDetails.ATMBalance = HamzahsDetails.ATMBalance + Deposit
                        console.log(`Succesfully Deposited ${Deposit} Rs. into your bank Account!`);
                    }
                } 
                else if (What_To_Do1 == "Check Details") {
                    console.log("Here are your details:");
                    console.log(HamzahsDetails);
                } else {
                    process.exit();
                }
            }
        }
    }    
}, 2000)
