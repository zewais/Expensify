import React from "react"
import {shallow} from "enzyme"
import LoadingPage from "../../components/LoadingPage"
import { warn } from "@oclif/errors";

test("Should render Loading page correctly", () => {
    const wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
})