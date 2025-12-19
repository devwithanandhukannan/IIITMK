let user = [
    {name:'user one', age: 22},
    {name:'user two', age: 23},
    {name:'user three', age: 12}
]

function getuserOnly(users:object){
    user.forEach((i)=>{
        console.log(i.name);   
    })
}
getuserOnly(user)

///////////////filter using age 
function filterUsingAge(users: object) {
    const filteredUsers = users.filter(user => user.age > 18);
    filteredUsers.forEach(user => console.log(user));
    return filteredUsers;
}
filterUsingAge(user)

////map
const names: string[] = ["Alice", "Bob", "Charlie"];

names.map(name => console.log(name));


///upper case all
const fruits: string[] = ["apple", "banana", "orange"];

const upperFruits: string[] = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); 


///string length
const words: string[] = ["hello", "world", "typescript"];

const lengths: number[] = words.map(word => word.length);
console.log(lengths); 

///slice
const data = [10,20,30,40,50,60]
console.log(data.slice(1,4));
let mystring = 'Anandhu'
console.log(mystring.slice(3));


//split
const my_data:string = 'anandhu'
let mydata_to_array = my_data.split('')
console.log(mydata_to_array);


