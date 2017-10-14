/**
 * Created by IMAD on 12/10/2017.
 */
import axios from 'axios';

const ApiUrl = 'http://localhost:8300/api/';

const callAPI= (path, method, args = {}, data={},callback, errorcallback)=>{
    axios({
        method: method,
        baseURL: ApiUrl,
        url: path,
        params:args,
        data:data,
        responseType: 'json',
    }).then((response) => {
        callback(response.data);
    }).catch((error) => {
        errorcallback(error);
    });
};

export function registerAccount (email,password,callBack,callBackError){
    const data={email,password};
    callAPI(
        'register',
        'POST',
        {},
        data,
        (result)=> callBack(result),
        (error)=>callBackError(error)
    );
}

export function signIn (email,password,callBack,callBackError){
    const data={email,password};
    callAPI(
        'login',
        'POST',
        {},
        data,
        (result)=> callBack(result),
        (error)=>callBackError(error)
    );
}