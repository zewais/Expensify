import {
    startAddExpense, 
    addExpense, 
    editExpense, 
    removeExpense, 
    setExpenses, 
    startSetExpenses, 
    startRemoveExpense,
    startEditExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import database from "../../firebase/firebase"

const uid = "testuserid"
const defaultAuthState = {auth:{uid}}
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {
            description,
            note,
            amount,
            createdAt
        }
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})

test("should setup remove expense action object", () => {
    const action = removeExpense({id: "123abc"});

    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    })
})

test("Should remove an expense by id from firebase", (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[2].id
    store.dispatch(startRemoveExpense({id})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "REMOVE_EXPENSE",
            id
        })
        return database.ref(`users/${uid}/expense/${id}`).once("value")
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy()
        done()
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

test("should edit expense on firebase", (done) => {
    const store= createMockStore(defaultAuthState)
    const id = expenses[0].id
    const updates = {
        amount: 990012,
        note: "this is an update"
    }
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "EDIT_EXPENSE",
            id,
            updates
        })
        return database.ref(`users/${uid}/expenses/${id}`).once("value").then((snapshot) => {
            expect(snapshot.val().amount).toBe(updates.amount)
            expect(snapshot.val().note).toBe(updates.note)
            done()
        })
    })
    
})

test("should setup add expense action object with provided values", () => {
    const expenseData = {
        description: "Rent",
        note: "this is a note",
        amount: 12345,
        createdAt: 1000,

    }

    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
        
    })
})

test("should add expense to database and store", (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseData = {
        description: "mouse",
        amount: 3000,
        note: "this one is better",
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value")
        }).then((snapshot)=> {
            expect(snapshot.val()).toEqual(expenseData)
            done()
        
    })
})

test("should add expense with default values to database and store", (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseData = {
        description: "",
        amount: 0,
        note: "",
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value")
        }).then((snapshot)=> {
            expect(snapshot.val()).toEqual(expenseData)
            done()
        
    })
})

test("should setup set expenses action object with data", () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: "SET_EXPENSES",
        expenses
    })
})

test("Should fetch the expenses from firebase", (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        })
        done()
    })
})



// test("should setup add expesne action object with default values", () => {
//     const action = addExpense();

//     expect(action).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//             id: expect.any(String),
//             description: "",
//             note: "",
//             amount: 0,
//             createdAt: 0
//         }
//     })

// })