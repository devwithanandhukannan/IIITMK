let num = 10
let num2 =20
function add(num,num2){
    console.log(num+num2);
    
}

function palindrome(text){
    let data = String(text);
    console.log(data);
    
    let result = data.split('').reverse().join('')
    console.log(result);
    
    return data == result
}

console.log(palindrome('121'));
add(10,20)

// count how many vowels are in a given string
function countvowels(text){
    let vowels = 'aeiou'
    let pre = String(text).toLowerCase()
    count=0
    for (let i of text){
        if(vowels.includes(i)){
            count++;
        }
        
    }
    return count
    
}


let string_data = 'anandhu'
console.log(countvowels(string_data));



// find the second largest element in an array
let arr = [5,300,10,20]
let max = -Infinity;
let second = -Infinity
for (i of arr){
    if (i > max) {
        second = max
        max = i
    }
    else if(i>second && i != max){
        second = i
    }
}
console.log(second);


// find the factorail of number using arrow function
let fact = (num) =>{
    if(num === 1){
        return 1
    }
    return num*fact(num-1)
}

console.log(fact(5));


// Perfom calculator Operations
function cal(a,b,oper){
switch(oper){
    case '+':
        return a+b
    case '-':
        return a-b;
    case '*':
        return a*b;
    case '/':
        return a/b;
    default:
        return 'wrong input!'
}
}
console.log(cal(30,20,'-'));



// array of number squre (map)

let arr1 = [1,2,3,4,5,6]
let result = arr1.map((value)=>{
    return value*value
})
console.log(result)


// check palindrome number

function check_num_palindrome(num){
    let temp = num
    let rev =0
    while(num>0){
        last_num = num% 10
        rev = rev*10+last_num
        num = parseInt(num/10)
    }
    return temp == rev
}
console.log(check_num_palindrome(121));


