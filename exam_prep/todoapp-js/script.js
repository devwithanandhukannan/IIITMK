
tasks_ = []
prioritys_ = []
completed_ = []
function savelocally(name,val){
    localStorage.setItem(name,JSON.stringify(val))
}
function fetchdatalocally(){
    let data1 = JSON.parse(localStorage.getItem('tasks_'))
    let data2 = JSON.parse(localStorage.getItem('prioritys_'))
    let data3 = JSON.parse(localStorage.getItem('completed_'))
    if (Array.isArray(data1) && Array.isArray(data2) && Array.isArray(data3)) {
    tasks_ = data1
    prioritys_ = data2
    completed_ = data3
}
}
fetchdatalocally()
function saveData(task,value){
    if(task != '' && !isNaN(value)){
        tasks_.push(task)
        prioritys_.push(value)
        completed_.push(0)
        savelocally('tasks_',tasks_)
        savelocally('prioritys_',prioritys_)
        savelocally('completed_',completed_)
        disp()
    }else{
        console.log('something went wrong !');
        
    }
}

function disp(){
    const data = document.getElementById('saved_data')
    data.innerHTML = ''
    if(tasks_.length != 0){
         tasks_.forEach((element, index, array) => {
        const li = document.createElement('li')
        const deletebtn = document.createElement('button')
        deletebtn.textContent = 'delete'
        const updatebtn = document.createElement('button')
        updatebtn.textContent = 'update'
        const completedbtn = document.createElement('button')
        if (completed_[index]==0){
            completedbtn.textContent = 'complete'
        }else{
            completedbtn.textContent = 'undo'
        }
        

        let comp = completed_[index]
        if(comp == 1){
            li.classList.toggle('strick')
        }

        let priority_val = prioritys_[index]
        if(priority_val == 1){
            li.classList.add('priorityone')
        }else if(priority_val==2){
            li.classList.add('prioritytwo')
        }else{
            li.classList.add('prioritythree')
        }

        li.textContent = element
        data.appendChild(li)
        li.appendChild(deletebtn)
        li.appendChild(updatebtn)
        li.appendChild(completedbtn)
        deletebtn.onclick = () => {
            li.remove();
            tasks_.splice(index,1)
            prioritys_.splice(index,1)
            completed_.splice(index,1)
            savelocally('tasks_',tasks_)
            savelocally('prioritys_',prioritys_)
            savelocally('completed_',completed_)

        }
        updatebtn.onclick = () =>{
            let new_val = prompt('Enter the value:',element)
            let new_priority = prompt('Enter the value:',prioritys_[index])
            tasks_[index] = new_val;
            prioritys_[index] = new_priority
            savelocally('tasks_',tasks_)
            savelocally('prioritys_',prioritys_)
            console.log(tasks_);
            disp();
        }
        completedbtn.onclick = () => {
            if(completed_[index]==0){
                completed_[index]=1
            }else{
                completed_[index]=0
            }
            savelocally('completed_',completed_)
            li.classList.toggle('strick')
            disp()
        }
    });
    }
}
disp()