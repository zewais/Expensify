import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import { connect } from "react-redux"
import {startLogout} from "../actions/auth"


export const Header = ({startLogout}) => (
    <header className="header">
    <div className="content-container">
    <div className="header__content">
        <Link className="header__title" to="/dashboard" exact={true}>
            <h1>Expensify</h1>
        </Link>
        <button className="button-layout button-layout__link" onClick={startLogout}>Logout</button>
    </div>
    </div>
        
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);