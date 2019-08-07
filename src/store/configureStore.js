import {createStore, combineReducers} from "redux";
import expenseReducer from "../reducers/expenses"
import filterReducer from "../reducers/filters"


export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filterReducer
    
        })
    );

    return store;
}

