import React from "react"
import {connect} from "react-redux"
import { startLogin } from "../actions/auth";


//const onLoginHandler;

export const LoginPage = ({startLogin}) => {
    return(
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expensify</h1>
                <p>It's time to get your expenses under control</p>
                <button onClick={startLogin} className="button-layout">Login with Google</button>
            </div>
        </div>
    )
    
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect (undefined, mapDispatchToProps)(LoginPage)