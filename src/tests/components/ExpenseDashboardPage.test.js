import React from "react"
import {shallow} from "enzyme"
import ExpesneDashboardPage from "../../components/ExpenseDashboardPage"

test("Should render the expense dashboard page", () => {
    const wrapper = shallow(<ExpesneDashboardPage/>)
    expect(wrapper).toMatchSnapshot();
})