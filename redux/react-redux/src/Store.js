import { createStore } from "redux";


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


const Store = createStore(appReducer)

export default Store