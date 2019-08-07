import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const addExpense = (
    {description = "",
     note = "", 
     amount=0, 
     createdAt=0
    } = {}) => {
    return {
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}


const removeExpense = ({id} = {}) => {
    return {
        type: "REMOVE_EXPENSE",
        id
    }
}

const editExpense = (id, updates) => {
    return {
        type: "EDIT_EXPENSE",
        id,
        updates
    }

}

const setTextFilter = (text = "") => {
    return {
        type: "SET_TEXT_FILTER",
        text
    }
}

const sortByAmount = () => {
    return {
        type: "SORT_BY_AMOUNT"
    }
}

const sortByDate = () => {
    return {
        type: "SORT_BY_DATE"
    }
}

const setStartDate = (startDate) => {
    return {
        type: "SET_START_DATE",
        startDate
    }
}

const setEndDate = (endDate) => {
    return {
        type: "SET_END_DATE",
        endDate
    }
}
 


//Expenses Reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];

        case "REMOVE_EXPENSE":
                
            return state.filter(({id}) => (id !== action.id))


        case "EDIT_EXPENSE":
            return state.map((expense) => {
                
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                }

                else {
                    
                    return expense;
                }
            })        

        default:
            return state;
    }

}

const filterReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {

        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            } 

        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            }

        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            }


        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }


            case "SET_END_DATE":
                    return {
                        ...state,
                        endDate: action.endDate
                    }

        default:
            return state;
    } 
}


const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    
    return expenses.filter((expense) => {
        
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a ,b) => {
        if(sortBy === "date") {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer

    })
);

store.subscribe(() => {
    const state = store.getState();
    const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(VisibleExpenses);

});

const expenseOne = store.dispatch(addExpense({description: "Rent", amount: 100000, createdAt: -2000}));
const expenseTwo = store.dispatch(addExpense({description: "coffee", amount: 300, createdAt: -1000}));

// store.dispatch(removeExpense ({id: expenseOne.expense.id}));



// store.dispatch(editExpense (expenseTwo.expense.id, {amount: 500, note:"HERE!!!!"}));

// store.dispatch(setTextFilter("CO"));
// store.dispatch(setTextFilter("coffee"));

store.dispatch(sortByAmount());

store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(990));
// store.dispatch(setEndDate());





const demoState = {
    expenses: [{
        id: "jjjjjj",
        description: "Jan. rent",
        note: "Final payment",
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount", 
        startDate: undefined,
        endDate: undefined 
    }
};

