import React from "react"
import {shallow} from "enzyme"
import ExpenseForm from "../../components/ExpenseForm"
import expenses from "../fixtures/expenses"
import moment from "moment"

test("should render expense form", () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test("should render expense form with data", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})

test("should rendere an error for invalid submission", () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("form").simulate("submit",{
        preventDefault: ()=>{}
    });

    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot()
})

test("should set description on input change", () => {
    const value = "new desciption"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("input").at(0).simulate("change", {
        target: {value}
    })
    expect(wrapper.state("description")).toBe(value)
})

test("should set note on input change", () => {
    const value = "new note"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("textarea").simulate("change", {
        target: {value}
    })
    expect(wrapper.state("note")).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test("should render an amount on input with valid data", () => {
    const value = "12.34"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("input").at(1).simulate("change", {
        target: {value}
    })
    expect(wrapper.state("amount")).toBe(value)
})

test("should not render an amount on input with invalid data", () => {
    const value = "12.343"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("input").at(1).simulate("change", {
        target: {value}
    })
    expect(wrapper.state("amount")).toBe("")
})

test("should call onsubmit prop for valid form submission", () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find("form").simulate("submit",{
        preventDefault: ()=>{}
    });
    expect(wrapper.state("error")).toBe("")
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt,
        note: expenses[0].note
    })
})

test("should change ondatechange to new date", () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("SingleDatePicker").prop("onDateChange")(now)
    expect(wrapper.state("createdAt")).toEqual(now)
})

test("should change focus using onFocusChange", () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("SingleDatePicker").prop("onFocusChange")({focused})
    expect(wrapper.state("calenderFocused")).toBe(focused)
})



