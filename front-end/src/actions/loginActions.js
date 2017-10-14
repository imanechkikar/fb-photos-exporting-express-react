/**
 * Created by IMAD on 24/07/2017.
 */
import LoginActionTypes from '../constants/LoginActionTypes';
import {push} from 'react-router-redux';
import {signIn,registerAccount} from '../utils/BackEndAPI';

export function login(){
    return (dispatch,getState)=>{
        const {email,password} = getState().form.LoginForm.values;
        dispatch({type: LoginActionTypes.LOGIN_START  });
        signIn(
            email,
            password,
            result=>{
                  dispatch({type: LoginActionTypes.LOGIN_FULFILLED , result } );
                  dispatch(push("/ExportingPhotos"))
            },
            error=>dispatch({type: LoginActionTypes.LOGIN_REJECT ,error} ),
        );

    }
}

export function register(){
    return (dispatch,getState)=>{
        const {email,password} = getState().form.LoginForm.values;
        dispatch({type: LoginActionTypes.LOGIN_START  });
        registerAccount(
            email,
            password,
            result=>{
                dispatch({type: LoginActionTypes.LOGIN_FULFILLED , result } );
                dispatch(push("/ExportingPhotos"))
            }
            ,
            error=>dispatch({type: LoginActionTypes.LOGIN_REJECT ,error} ),
        );
    }
}