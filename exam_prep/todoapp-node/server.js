import readline from 'readline'

const map = new Map();

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const search = () => {
    console.log('------ Search ------');
    console.log('1. search by key');
    console.log('2. search by name');
    console.log('3. search by author');
    console.log('4. search by genre');
    console.log('5. back');
    console.log('6. exit');
    
    input.question("Enter search option: ",(search)=>{
        switch(Number(search)){
            case 1:
                input.question("Enter the key to search: ",(key)=>{
                    if(map.has(key)){
                        console.log(map.get(key));
                    }else{
                        console.log('no data found');
                    }
                    disp()
                })
                
                break;
            case 2:
                input.question("Enter the name to search: ",(name)=>{
                    let found = false
                    for (const [key, val] of map){
                        if(val.name == name){
                            console.log(map.get(key));
                            found = true
                        }
                    }if(!found){
                            console.log('nothing found');
                    }
                    disp();
                })
                break;
            case 3:
                input.question("Enter the author to search: ",(auth)=>{
                    let found = false
                    for (const [key, val] of map){
                        if(val.auth == auth){
                            console.log(map.get(key));
                            found = true
                        }
                    }
                    if(!found){
                            console.log('nothing found');
                    }
                    disp();
                }) 
                break;     
            case 4:
                input.question("Enter the genre to search: ",(genre)=>{
                    let found = false
                    for (const [key, val] of map){
                        if(val.genre == genre){
                            console.log(map.get(key));
                            found = true
                        }
                    }
                    if(!found){
                            console.log('nothing found');
                    }
                    disp();
                })
                break;   
            case 5:
                disp();
                break;
            case 6:
                input.close();
                return
            default:
                console.log('invalid option!');
                disp()
        }
    })
    
}
const disp = () => {
    console.log('1. Display');
    console.log('2. Insert');
    console.log('3. Delete');
    console.log('4. Update');
    console.log('5. Search');
    console.log('6. exit');
    
    
    input.question("select one option: ",(option)=>{
        run(option)
    })
}
const run = (opt) =>{
    switch(opt){
        case '1':
            if(map.size==0){
                    disp()
            }else{
                for (const [key, val] of map){
                    console.log(`${key}-${val.name}-${val.auth}-${val.genre}`);
                }
                disp()
            }
            break
        case '2':
            input.question("Enter the key: ",(key)=>{
                if(map.has(key)){
                    console.log('key already exist');
                    disp();
                }else{
                    input.question("Enter the book name: ",(name)=>{
                    input.question("Enter the author name: ",(auth)=>{
                        input.question("Enter the genre :",(genre)=>{
                            map.set(key,{name,auth,genre})
                            console.log('inserted');
                                disp();
                            })
                        })
                    })
                }
            })
            break;
        case '3':
            input.question("Enter the key to delete",(del)=>{
                if(map.has(del)){
                    map.delete(del)
                }else{
                    console.log('invalid key');
                    
                }
                disp();
            })
            break;
        case '4':
            input.question("Enter the key to update: ",(key)=>{
                if(map.has(key)){
                    input.question("Enter the book name: ",(name)=>{
                    input.question("Enter the author name: ",(auth)=>{
                        input.question("Enter the genre :",(genre)=>{
                            map.set(key,{name,auth,genre})
                            console.log('inserted');
                                disp();
                            })
                        })
                    })
                }else{
                    console.log('invalid key');
                    disp();
                }
            })
        case '5':
            search()
            break;
        case '6':
            input.close();
            break;
        default:
            console.log('invalid option!');
            disp();

    }
}
disp()