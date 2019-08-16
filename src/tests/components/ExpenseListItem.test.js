import ExpenseListItem from "../../components/ExpenseListItem"
import React from "react"
import {shallow} from "enzyme"
import expenses from "../fixtures/expenses"

test("should render expense list item", () => {
    const wrapper = shallow(<ExpenseListItem 
        id = {expenses[0].id}
        description = {expenses[0].description}
        amount = {expenses[0].amount}
        createdAt = {expenses[0].createdAt}
        />)
    expect(wrapper).toMatchSnapshot()
})