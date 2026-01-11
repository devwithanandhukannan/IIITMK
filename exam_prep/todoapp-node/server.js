import readline from 'readline'

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const disp = () => {
    console.log('1. Display');
    console.log('2. Insert');
    console.log('3. Delete');
    console.log('4. Search');
    input.question("select one option: ",(option)=>{
        run(option)
    })
}
const run = (opt) =>{
    switch(opt){

    }
}
disp()