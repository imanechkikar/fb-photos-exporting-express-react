/**
 * Created by IMAD on 03/10/2017.
 */

import {ExportingActionTypes} from  "../constants/ExportingActionTypes";


let initialState ={
    status : '',
    authResponse:null,
    albums : [],
    fetching : false,
    error : null,
};


export default (state=initialState,action)=>{
    switch (action.type) {
        case ExportingActionTypes.LINK_FB_START: {
            return {...state, fetching: true }
        }

        case ExportingActionTypes.LINK_FB_FULFILLED: {
            const {authResponse,status}=action.response;
            return {...state, fetching: false, authResponse, status}
        }

        case ExportingActionTypes.LINK_FB_REJECT: {
            const {error}=action;
            return {...state, fetching:false, error}
        }
        case ExportingActionTypes.FETCH_ALBUMS_START: {
            return {...state, fetching: true }
        }

        case ExportingActionTypes.FETCH_ALBUMS_FULFILLED: {
            const {albums}=action;
           /* albums.sort((a, b)=> {
                let nameA = a.name.toUpperCase(); // ignore upper and lowercase
                let nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });*/
            return {...state, fetching: false ,  albums}
        }

        case ExportingActionTypes.FETCH_ALBUMS_REJECT: {
            const {error}=action;
            return {...state, fetching:false, error}
        }
        default:{
            return state;
        }
    }
}