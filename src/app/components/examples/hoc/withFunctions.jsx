import React from "react";
import Divider from "../../common/divider";
import CardWrapper from "../../common/Card";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return <>
        <button className="btn btn-primary"
            onClick={
                isAuth === "false"
                ? onLogin
                : onLogOut}>
            {isAuth === "false" ? "Войти" : "Выйти из системы"}
        </button>
    </>;
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};

const withFunctions = (MyComponent) => () => {
    const auth = localStorage.getItem("auth");
    const authBool = auth ? "true" : "false";
    const handleLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const handleOutLog = () => {
        localStorage.removeItem("auth");
    };
    return <><CardWrapper>
        <span>Login/OutLog</span>
        <Divider />
        <MyComponent onLogin={handleLogin} onLogOut={handleOutLog} isAuth={authBool} />
    </CardWrapper> </>;
};

export const ComponentWithHoc = withFunctions(SimpleComponent);
