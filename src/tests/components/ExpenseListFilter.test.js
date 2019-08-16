import React from "react"
import {shallow} from "enzyme"
import {ExpenseListFIlters} from "../../components/ExpenseListFilters"
import {filters, altFilters} from "../fixtures/filters"
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpenseListFIlters 
        filters = {filters}
        setTextFilter = {setTextFilter}
        sortByDate = {sortByDate}
        sortByAmount = {sortByAmount}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
        />)
})

test("should render ExpenseListFilter", () => {
    expect(wrapper).toMatchSnapshot()
})

test("should render ExpenseListFilter with alt data", () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test("should handle text change", () => {
    const value = "rent"
    wrapper.find("input").simulate("change", {
        target: {value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test("should handle sort change to date", () => {
    wrapper.setProps({
        filters: altFilters
    })
    const value = "date"
    wrapper.find("select").simulate("change", {
        target: {value}
    })
    expect(sortByDate).toHaveBeenCalled()
})

test("should handle sort change to amount", () => {
    const value = "amount"
    wrapper.find("select").simulate("change", {
        target: {value}
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test("should handle date changes", () => {
    const startDate = moment(0).subtract(4, "days")
    const endDate = moment(0).add(6, "days")
    wrapper.find("DateRangePicker").prop("onDatesChange")({startDate, endDate})
    
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test("should handle date focus change", () => {
    const calenderFocus = "endDate"
    wrapper.find("DateRangePicker").prop("onFocusChange")(calenderFocus)
    expect(wrapper.state("calenderFocused")).toBe(calenderFocus)
})