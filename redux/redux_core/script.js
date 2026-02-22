const { createStore } = Redux

const initial_state = {
    value : 0
}

const appReducer = (prevState = initial_state, action) =>{
    switch(action.type){
        case 'increment':
            return({
                ...prevState,
                value: prevState.value+1
            })
        case 'decrement':
            return({
                ...prevState,
                value: prevState.value-1
            })
        default:
            return prevState
    }
}

const value = document.getElementById('value')

const store = createStore(appReducer)
store.subscribe(()=>{
    value.innerHTML=store.getState().value 
})



const increment_btn = document.getElementById('increment')
const decrement_btn = document.getElementById('decrement')

decrement_btn.addEventListener('click',()=>{
    store.dispatch({
        type:'decrement'
    }) 
})

increment_btn.addEventListener('click',()=>{
    store.dispatch({
        type:'increment'
    })
})