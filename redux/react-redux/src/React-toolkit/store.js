import {configureStore, createSlice} from'@reduxjs/toolkit'

// first create slice instead of reducer function

const counterSlicer = createSlice({
    name:'counter',
    initialState: 0,
    reducers:{
        increment: (state, action)=>{
            return state+1
        },
        decrement: (state, action)=>{
            return state-1
        }
    }
})
const taskSlicer = createSlice({
    name:'tasks',
    initialState:[],
    reducers:{
        saveTask:(state, action)=>{
            state.push(action.payload)
        }
    }
})


export const {
    increment, decrement

}= counterSlicer.actions

export const {
    saveTask
} = taskSlicer.actions

const store = configureStore({
    reducer:{
        counter: counterSlicer.reducer,
        task: taskSlicer.reducer
    }
})

export default store