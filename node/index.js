import _ from 'lodash';
import {add,sub} from './math.ts'

const arr = [1,2,3,4,5]
let reverse = _.reverse(arr)
arr.forEach(element => {
    console.log(element);
    
});


console.log(reverse);


console.log("add 10+20",add(10,32));
console.log("sub 10-20",sub(10,32));

console.log(_.sum(arr));

let name = ['anandhu','kannan']
let name1 = 'kannan'
console.log("name",_.capitalize(name1));
console.log("name",_.toUpper(name));
console.log("add",_.add(10,20));

console.log("max", _.max(arr));
console.log("mean",_.mean(arr));