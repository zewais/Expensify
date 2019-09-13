import React from "react"
import {connect} from "react-redux"
import numeral from "numeral"
import selectExpenses from "../selectors/expenses"
import selectExpensesTotal from "../selectors/expenses-total"
import {Link} from "react-router-dom"

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    
    return(
        <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expensesCount === 1? "expense": "expsenses"} with total of <span>{numeral(expensesTotal).format("$0,0.00")}</span></h1>
            <div className="page-header__actions">
                <Link className="button-layout" to="/create">Add Expense</Link>
            </div>
        </div>
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