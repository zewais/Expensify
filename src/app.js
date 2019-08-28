import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {startSetExpenses} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses"
import "react-dates/lib/css/_datepicker.css"
import "./firebase/firebase"


const store = configureStore();


// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);

// });







const state = store.getState();


const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
) 
ReactDOM.render(<p>LOADING...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById("app"));
})


