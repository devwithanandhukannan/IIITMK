const args = process.argv
// console.log(args);
// console.log(args[2]);


// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
    
// }
// addTwoNumber(Number(args[2]),Number(args[3]))

console.log(Number(args[2])>Number(args[3])?`${args[2]} is larger`:`${args[3]} is larger`);
