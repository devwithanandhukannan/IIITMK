/// <reference types="node" />
import { log } from 'console';
import readline from 'readline'

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let tasks = new Map<number,string>();
let taskId:number = 1

let menu =() => {
    console.log("\n1. Add task")
    console.log("2. View tasks")
    console.log("3. Delete task by index")
    console.log("4. Delete last element")
    console.log("5. Update task");
    console.log("6. End")

    input.question("Choose an option: ", (answer) => {
        handleChoice(Number(answer))
    })
}

function handleChoice(opt: number) {
    switch (opt) {
        case 1:
            input.question("Enter task: ", (task) => {
                if(task!==''){
                    tasks.set(taskId++, task)
                    console.log("Task added!")
                }else{
                    console.log("Input filed is empty");
                }
                menu() 
                
            })
            break

        case 2:
            if (tasks.size === 0) {
                console.log("No tasks available")
            } else {
                console.log("---------------------------")
                for (let [id, task] of tasks) {
                    console.log(`${id}. ${task}`)
                }
                console.log("---------------------------")
            }
            menu()
            break
        case 3:
            input.question("Enter the index number to delete the element: ",(index)=>{
                let id = Number(index)
                tasks.delete(id);
                console.log('deleted!');
                menu()
            })
            break

        case 4:
            let last_index:number = tasks.size
            console.log(`deleted ${tasks.get(last_index)}`);
            
            tasks.delete(last_index)
            menu()
            break

        case 5:
            input.question("Enter the index to update: ",(index)=>{
                let i = Number(index)
                input.question("Enter the value: ",(val)=>{
                    if(tasks.has(i)){tasks.set(i,val)}
                    menu()
                })
                
            })
            break

        case 6:
            console.log("-------exit--------")
            input.close()
            break

        default:
            console.log("Invalid option")
            menu()
    }
}

menu()
