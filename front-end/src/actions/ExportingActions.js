/**
 * Created by IMAD on 03/10/2017.
 */

import {ExportingActionTypes} from '../constants/ExportingActionTypes';
import {getAlbums,loginFb} from '../utils/FbAPI';

export function linkFb(){
    return (dispatch)=>{
        dispatch({type: ExportingActionTypes.LINK_FB_START });
        loginFb(
            response=> dispatch({type: ExportingActionTypes.LINK_FB_FULFILLED , response }),
                error=> dispatch({type: ExportingActionTypes.LINK_FB_FULFILLED , error })
        );
    }
}

export function fetchAlbums(){
    return (dispatch)=>{
        dispatch({type: ExportingActionTypes.FETCH_ALBUMS_START });
        getAlbums(
            response=> dispatch({type: ExportingActionTypes.FETCH_ALBUMS_FULFILLED , albums: response.data }),
            error=> dispatch({type: ExportingActionTypes.FETCH_ALBUMS_REJECT , error }),
        );
    }
}