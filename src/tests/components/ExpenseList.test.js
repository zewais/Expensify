import {ExpenseList} from "../../components/ExpenseList"
import React from "react"
import {shallow} from "enzyme"
import expenses from "../fixtures/expenses"


test("should render ExpenseList with expenses", () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot();
})

test("should render ExpenseList with no expense message", () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot();
})