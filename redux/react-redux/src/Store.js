import { createStore, combineReducers } from "redux";

const initialCounterState = {
    value: 0
};

const initialTaskState = [];

const appReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                value: state.value + 1
            };
        case 'decrement':
            return {
                ...state,
                value: state.value - 1
            };
        default:
            return state;
    }
};

const taskReducer = (state = initialTaskState, action) => {
    switch (action.type) {
        case 'saveTask':
            return [...state, action.payload];
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    counter: appReducer,
    tasks: taskReducer
});

const Store = createStore(rootReducer);

export default Store;