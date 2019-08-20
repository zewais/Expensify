import React from "react"
import {shallow} from "enzyme"
import {ExpensesSummary} from "../../components/ExpensesSummary"
import expensesTotal from "../../selectors/expenses-total"
import expenses from "../fixtures/expenses"

test("Should correctly render summary with one expense",()=>{
    const wrapper = shallow(<ExpensesSummary expensesCount={[expenses[0]].length} expensesTotal={expensesTotal([expenses[0]])}/>)
    expect(wrapper).toMatchSnapshot()
})

test("Should render correctly with multiple expenses", () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={expenses.length} expensesTotal={expensesTotal(expenses)}/>)
    expect(wrapper).toMatchSnapshot()
})
