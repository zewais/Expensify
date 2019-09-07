import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import ExpenseForm from "./ExpenseForm"
import {startRemoveExpense, startEditExpense} from "../actions/expenses"


export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push("/dashboard")
    }

    onClick = () => {
        this.props.startRemoveExpense({id: this.props.expense.id})
        this.props.history.push("/dashboard")
    }

    render() {
        return(
            <div>
            <ExpenseForm 
                expense={this.props.expense}
                onSubmit = {this.onSubmit}
            />
            <button onClick = {this.onClick}>Remove</button>
            
        </div>
        )
    }
}


/*const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <ExpenseForm 
            expense={props.expense}
                onSubmit = {(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense))
                    props.history.push("/")

                }}
            />
            <button onClick = {(e) => {
                props.dispatch(removeExpense({id: props.expense.id}))
                props.history.push("/")
            }}>Remove</button>
            
        </div>
    );
}*/


const mapStateToProps = (state,  props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)

    }
        
}

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

