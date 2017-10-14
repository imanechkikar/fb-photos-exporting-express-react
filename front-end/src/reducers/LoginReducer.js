/**
 * Created by IMAD on 18/04/2017.
 */


import LoginActionTypes from  "../constants/LoginActionTypes";


let initialState ={
    email : null,
    password : null,
    logged : false,
    fetching : false,
    error : { response:{data:{message: null}}}
};


export default (state=initialState,action)=>{
    switch (action.type) {

        case LoginActionTypes.LOGIN_START: {
            return {...state, fetching: true }
        }

        case LoginActionTypes.LOGIN_FULFILLED: {
            const {email,password}=action.result;
            return {...state, fetching: false, logged : true, email, password}
        }

        case LoginActionTypes.LOGIN_REJECT: {
            const {error}=action;
            return {...state, fetching:false, error}
        }

        case LoginActionTypes.LOGOUT:{
            return {...initialState}
        }

        default:{
            return state;
        }
    }
}