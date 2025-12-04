// type conversion
let a;
console.log(typeof a); //undefined 

console.log("20" + 5);
console.log("20" - 5);
console.log("20" * 5);
console.log("20" / 4);

console.log(true + 1);
console.log(false + 1);
console.log(true + "hello");
console.log(false + "hello");
console.log(false - "hello");

console.log(typeof (Number("30")));
console.log((Number("hacker")));

console.log(typeof String(1000));
console.log(String(false));

console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean('a'));


console.log(parseInt(15.777));
console.log(parseFloat(15.0001));
console.log(parseInt("100"));


try {
    let a;
    a.property;
    console.log(a);
    
} catch (err) {
    console.log(err);

} finally {
    console.log('hwllo anandhu');

}

function test(){
    const data = new Map();
    data.set("name","anandhu")
    data.set(2,"age is 22")
    data.set(true,"hacker")
    data.set(true,"one")
    // data.delete("name");
    // data.clear()
    return data
}
console.log(test());
console.log(test().get(true));

console.log(test());
console.log(test().has('name'));
console.log(test().size);


console.log('----------------');





// let age =10
// if(age<18){
//     throw new Error("you must be 18 year old");
// }else{
//     console.log("you can vote");
    
// }















