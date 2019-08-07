import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
        This is the edit expense with id of {props.match.params.id}
    </div>
    );
}


export default EditExpensePage;

