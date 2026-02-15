let arr = [3,2,5,6,7]

let data = new Map()

arr.map((i)=>{
    data.set(i,i*i)
})

console.log(data);
