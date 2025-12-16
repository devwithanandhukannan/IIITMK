//for prompting install the package prompt-sync
import prompt from 'prompt-sync'
const input = prompt();
const name:string = input("Enter your name :")
console.log(name);

const num1:number = Number(input("Enter number one: "))
const num2:number = Number(input("Enter number two: "))
console.log(num1+num2);
