import {createStore} from "redux";


const incermentCount = ({incrementBy = 1} = {}) => {
    return {
        type: "INCREMENT",
        incrementBy
    }
}


const decrementCount = ({decrementBy = 1} = {}) => {
    return {
        type: "DECREMENT",
        decrementBy
    }
}

const setCount = ({setCount}) => {
    return {
        type: "SET",
        setCount
    }
}

const resetCount = () => {
    return {
        type: "RESET"
    }
}


const countReducer = (state = {count: 0}, action) =>{
    switch (action.type) {
        case "INCREMENT": 
            return {count: state.count + action.incrementBy};
        case "DECREMENT": 
            return {count: state.count - action.decrementBy};
        case "SET":
            return {count: action.setCount}
        case "RESET": 
            return {count: 0}
        default: return state;
}
}

const store = createStore(countReducer);


store.subscribe(() => {
    console.log(store.getState());
});




store.dispatch(incermentCount({incrementBy: 6}));

store.dispatch(incermentCount({incrementBy: 8}));

store.dispatch(incermentCount());

store.dispatch(decrementCount({decrementBy: 3}));

store.dispatch(setCount({setCount: 99}));

store.dispatch(resetCount());


