import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}

const requireAuthantication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthanticated ? <p>Please Login to view this info</p> : <WrappedComponent {...props}/>}
            
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthantication(Info);


ReactDOM.render(<AuthInfo isAuthanticated={false} info="There are the details" />, document.getElementById("app"));