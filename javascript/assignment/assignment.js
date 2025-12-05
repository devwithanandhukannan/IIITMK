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


9.// Write a program that reads one character and prints whether it is:
// a letter
// a digit
// a space
// or a special character
console.log("9. Read one character and print a letter digit space or special character")
let char1 = 'q'
if(/[a-zA-z]/.test(char1)){
  console.log(`${char1} is a letter`);
}else if(/[0-9]/.test(char1)){
  console.log(`${char1} is a character`);
}else if(char1 == ' '){
  console.log(`${char1} is a space`);
}else{
  console.log(`${char1} is a special character`);
}


10.//JS program to count how many consonants appear in a string (only letters a–z). Ignore spaces and punctuation.

console.log("10. ignore spaces and punctuation")
let word = 'sdfafdsfasq23sdfasdf'
const vowels_ = 'aeiou'
let count_consonants=0
for(let i=0;i<word.length-1;i++){
  let ch = word[i].toLowerCase();
  if(!vowels_.includes(ch)){
    count_consonants++
  }
}
console.log(count_consonants);



11.// Write a program to capitalize first letter in every word of a sentence using string handling functions
console.log("10. Write a program to capitalize first letter in every word of a sentence using string handling functions");

let input = "hello world this is javascript";
let data = input.split(" ")
let data1 = data.map(word=>
word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()
    ).join(" ")
let result_ = data1.toString()
console.log(result_)

12.//Write a program to read a value “abcd23ef78gh98za” . From this, remove digits and print only the characters
console.log("12. Write a program to read a value “abcd23ef78gh98za” . From this, remove digits and print only the characters");

let value= 'abcd23ef78gh98za'
let counter_value=''
for (let i =0;i<=value.length-1;i++){
  if(!/[0-9]/.test(value[i])){
    counter_value+=value[i]
  }
}
console.log(counter_value);

15.//Consider an array [2,3,-4,0,-2,-6,7,8,9]. Count the number of positive,negative and zeros in this array.
console.log("15. Count the number of positive,negative and zeros");
let arr = [2,3,-4,0,-2,-6,7,8,9]
let positive =0
let negative =0
let zero =0
arr.forEach((items)=>{
  if(items>0){
    positive++
  }else if(items<0){
    negative++
  }else{
    zero++
  }
})
console.log(positive, negative, zero)


13.//JS program to print prime numbers between 10 and 30
console.log('13.JS program to print prime numbers between 10 and 30');
function checkprime(number){
  is_prime= true
  if(number<1){
    is_prime= false
  }else{
    for(let i=2;i<number-1;i++){
      if(number%i==0){
        is_prime= false;
        break;
      }
    }
  }
  return is_prime
}
for(let i=10;i<=30;i++){
  let result = checkprime(i);
  console.log(`${i} is ${result?'prime number':'not a prime number'}`);
  
}

14.//Generate fibonacci series upto 11
let fibonacci = (number) => {
  if(number<=1){
    return number;
  }
  return fibonacci(number-1)+fibonacci(number-2)
}

let terms =11
for (let i=0;i<11;i++){
  console.log(fibonacci(i));
  
}

16.//JS program to create the pattern
//1
//12
//123
//1234
limit = 4
for(let i = 0; i<limit;i++){
  line_out =''
  for (let j=1; j<=i+1;j++){
    line_out+=j;
  }
  console.log(line_out);
  
}

limit = 4
for(let i = 0; i<limit;i++){
  line_out =''
  for (let j=limit; j>i;j--){
    line_out+='*';
  }
  console.log(line_out);
  
}

limit = 4
for(let i = 1; i<=limit;i++){
  line_out =''
  for (let j=limit; j>=0;j--){
    line_out+=i;
  }
  console.log(line_out);
  
}

limit = 4
 counter =0 
for(let i = 1; i<=limit+1;i++){
   
  line_out =''
  for (let j=1; j<=i;j++){
      counter++
    line_out+=counter+' ';
  }
  console.log(line_out);
  
}


