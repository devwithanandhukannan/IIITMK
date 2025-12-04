// 1. Even or Odd using ternary operator
console.log("1. Even or Odd using ternary operator");
let num = 7;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result);



// 2. Reverse a string using loop
console.log("2. Reverse a string using loop");
let str = "hello";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}
console.log(rev);

// 3. Check voting eligibility using ternary operator
console.log("3. Check voting eligibility using ternary operator");
let age = 17;
let msg = (age >= 18) ? "Eligible to vote" : "Not eligible";
console.log(msg);


// 4. Count vowels in a string using loop
console.log("4. Count vowels in a string using loop");
let char = "Anandhu";
let count = 0;
let vowels = "aeiouAEIOU";
for(let char of str){
    if(vowels.includes(char)){count++;}
}
console.log("Number of vowels in the string:", count);

// 5. sum of digit using loop
console.log("5. Sum of digits using loop");
let number = 1234;
let sum = 0;
while(number > 0){
    let digit = number % 10;
    sum += digit;
    number = Math.floor(number / 10);
}
console.log("Sum of digits:", sum);

// 6. Check palindrome number using loop
console.log("6. Check palindrome number using loop");
let num1 = 121;
let temp = num;
let rev1 = 0;

while (temp > 0) {
  rev1 = rev1 * 10 + (temp % 10);
  temp = Math.floor(temp / 10);
}

console.log(num1 === rev1 ? "Palindrome" : "Not palindrome");

// 7. Check palindrome string using loop
console.log("7. Check palindrome string using loop");
let str2 = "madam";
let rev2 = "";

for (let i = str2.length - 1; i >= 0; i--) {
  rev2 += str2[i];
}
console.log(str2 === rev2 ? "Palindrome" : "Not palindrome");


8.// JS program to print numbers from 1 to n:
// "Fizz" if divisible by 3
// "Buzz" if divisible by 5
// "FizzBuzz" if both
// else print the number
console.log("8. Fizz Buzz FizzBuzz")
let n = 10
for (let i = 1; i<=n; i++){
    if(i%3==0){
        console.log("Fizz");
    }else if(i%5==0){
        console.log("Buzz");
    }else{
        console.log("FizzBuzz");
    }
}

