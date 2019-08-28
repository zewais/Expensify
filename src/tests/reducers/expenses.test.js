import expensesReducer from "../../reducers/expenses"
import moment from "moment"
import expenses from "../fixtures/expenses"


test("Should set default state", () => {
    const state = expensesReducer(undefined, {type: "@@init"})

    expect(state).toEqual([])
})

test("Should set a new expense", () => {
    const newExpense = {
        id: "4",
        description: "coffee",
        amount: "300",
        note: "",
        createAt: moment(0).add(2, "days").valueOf()

    }
    const state = expensesReducer(expenses, {type: "ADD_EXPENSE", expense: newExpense})
    expect(state).toEqual([
        ...expenses,
        newExpense
    ])
})

test("Should remove an expese", () => {
    const state = expensesReducer(expenses, {type: "REMOVE_EXPENSE", id: expenses[1].id})

    expect(state).toEqual([expenses[0], expenses[2]])
})

test("Should not remove an expese with wrong id", () => {
    const state = expensesReducer(expenses, {type: "REMOVE_EXPENSE", id: "123"})

    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

test("Should edit an expense", () => {
    const state = expensesReducer(expenses, {type: "EDIT_EXPENSE", id: expenses[0].id, updates: {amount: 13400}})

    expect(state[0].amount).toBe(13400)
})

test("Should not edit an expense with wrong id", () => {
    const state = expensesReducer(expenses, {type: "EDIT_EXPENSE", id: "123", updates: {amount: 13400}})

    expect(state).toEqual(expenses)
})

test("Should set expenses", () => {
    const action = {
        type: "SET_EXPENSES",
        expenses: [expenses[1]]
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]])
})