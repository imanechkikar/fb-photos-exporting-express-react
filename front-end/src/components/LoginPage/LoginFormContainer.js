/**
 * Created by IMAD on 18/04/2017.
 */

import {connect} from "react-redux";
import {login , register} from "../../actions/loginActions";
import  LoginForm    from "./LoginForm"
import React from "react";


function LoginFormContainer ({onLogin,onRegister,message}){
    return(
        <LoginForm onLogin={onLogin}  message={message} onRegister={onRegister}/>
    );
}

const mapDispatchToProps = {
    onLogin:login,
    onRegister:register
};

const  mapStateToProp = (state)=>{
    return {message: state.login.error.response.data.message};
};

export default connect(mapStateToProp,mapDispatchToProps)(LoginFormContainer);