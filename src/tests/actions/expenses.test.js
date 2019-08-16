import {addExpense, editExpense, removeExpense} from "../../actions/expenses";
import moment from "moment";

test("should setup remove expense action object", () => {
    const action = removeExpense({id: "123abc"});

    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    })
})

test("should setup edit expense action object", () => {
    const action = editExpense(
        "123abc", 
        {
            amount: 123.67,
            note: "new note"
        }
    )
    
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {
            amount: 123.67,
            note: "new note"
        }
        
    })

})

test("should setup add expense action object with provided values", () => {
    const expenseData = {
        description: "Rent",
        note: "this is a note",
        amount: 12345,
        createdAt: 1000,

    }

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
        
    })
})

test("should setup add expesne action object with default values", () => {
    const action = addExpense();

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "",
            note: "",
            amount: 0,
            createdAt: 0
        }
    })

})