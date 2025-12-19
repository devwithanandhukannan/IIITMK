//Divide an array into two separate arrays with equal number of elements
let a = [20, 25, 30, 35, 40, 45];

let mid = a.length / 2;

let arr1 = a.slice(0, mid);
let arr2 = a.slice(mid);

console.log("First array:", arr1);
console.log("Second array:", arr2);

//Concatenate two arrays into a single array

let a = [1, 2, 3, 4];
let b = [5, 6, 7, 8];

let c = a.concat(b);

console.log("Concatenated array:", c);

//Store and print even numbers up to 20 in an array
let evenNumbers = [];

for (let i = 2; i <= 20; i += 2) {
    evenNumbers.push(i);
}

console.log("Even numbers up to 20:", evenNumbers);

//Check whether a number is present in an array and print its location
let a = [10, 11, 15, 17, 19, 23];
let num = 11;

let index = a.indexOf(num);

if (index !== -1) {
    console.log(num + " is present at index " + index);
} else {
    console.log(num + " is not present in the array");
}


//Find the occurrence of number 2 in the array
let arr = [1, 6, 7, 8, 2, 3, 4, 2, 2];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
        count++;
    }
}

console.log("Occurrence of 2:", count);

// 1️⃣ Combine given substrings into a sentence
let str = "You can study anything if you have a will to do it";

let s1 = str.substring(0, 13);   // You can study
let s2 = str.substring(0, 3);    // You
let s3 = str.substring(38, 42);  // will
let s4 = str.substring(45);      // do it

let combinedSentence = s2 + " can study anything if you have a " + s3 + " to " + s4;
console.log(combinedSentence);


let text = "MongoDB is a decentralised distributed ledger. MongoDB can eliminate centralisation.";
let replacedText = text.replace(/MongoDB/g, "Blockchain");
console.log(replacedText);


// Print string using substring / substr
let txt = "MongoDB is a decentralised distributed ledger";
let result = txt.substring(0, 43);
console.log(result);

// Compare strings and display result & type
let str1 = "Hello World";
let str2 = "hEllO World";

let comparison = (str1 === str2);
console.log(comparison);
console.log(typeof comparison);


// Print statement with age calculation
let myAge = 20;
let brotherAge = myAge + 10;

console.log(
  "I am " + myAge + " yrs of old and my brother is 10 yrs older to me. He is now " + brotherAge + " years old."
);

// Uppercase name and location
let fname = "john";
let lname = "doe";
let city = "chennai";

console.log(
  "My name is " + fname.toUpperCase() + " " + lname.toUpperCase() +
  ". I live in " + city.toUpperCase()
);

// Change 'like' to 'don't like'
let sentence1 = "I like to play video games.";
let sentence2 = "I like Hide & seek.";

sentence1 = sentence1.replace("like", "don't like");
sentence2 = sentence2.replace("like", "don't like");

console.log(sentence1);
console.log(sentence2);


//  Add 2 to each element using for-in loop
let a = [2, 5, 7, 9, 12, 45];

for (let index in a) {
    a[index] += 2;
}
console.log("Updated array:", a);

//  Check value presence and find sum using for-of loop
let valueToFind = 10;
let found = false;
let sum = 0;

for (let element of a) {
    if (element === valueToFind) {
        found = true;
    }
    sum += element;
}

console.log("Is 10 present?", found);
console.log("Sum of elements:", sum);
