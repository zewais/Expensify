import moment from "moment"
import filtersReducer from "../../reducers/filters"

test("Should setup default filter values", () => {
    const state = filtersReducer(undefined, {type: "@@init"})

    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")

    })
})

test("Should set sort by amount", () => {
    const state = filtersReducer(undefined, {type: "SORT_BY_AMOUNT"})
    expect(state.sortBy).toBe("amount")
})


test("Should set sort by date", () => {
const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
}

    const state = filtersReducer(currentState, {type: "SORT_BY_DATE"})
    expect(state.sortBy).toBe("date")
})


test("Should set text filter", () => {

    const state = filtersReducer(undefined, {type: "SET_TEXT_FILTER", text:"e"})
    expect(state.text).toBe("e")
})

test("Should set start date", () => {

    const state = filtersReducer(undefined, {type: "SET_START_DATE", startDate: 0})
    expect(state.startDate).toBe(0)
})

test("Should set end date", () => {

    const state = filtersReducer(undefined, {type: "SET_END_DATE", endDate: 1000})
    expect(state.endDate).toBe(1000)
})