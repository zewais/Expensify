import React from "react"
import {connect} from "react-redux"
import numeral from "numeral"
import selectExpenses from "../selectors/expenses"
import selectExpensesTotal from "../selectors/expenses-total"

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    
    return(
        <div>
            <h1>Viewing {expensesCount} {expensesCount === 1? "expense": "expsenses"} with total of {numeral(expensesTotal).format("$0,0.00")}</h1>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    const visableExpenses = selectExpenses(state.expenses, state.filters)

    return {
        expensesCount: visableExpenses.length,
        expensesTotal: selectExpensesTotal(visableExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)