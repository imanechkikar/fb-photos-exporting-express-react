/**
 * Created by IMAD on 13/10/2017.
 */
import React from 'react';
import ExportingAlbumsContainer from './ExportingAlbumsPage/ExportingAlbumsContainer';
import LoginFormContainer from './LoginPage/LoginFormContainer';
import {Route } from 'react-router'

export  function configRoutes(store) {

    /*const logged= store.getState().login.logged;

    const requireAuth =(nextState,replace) => {
        if(!logged ) {
            replace('/');
        }
    };*/

    return (
        <div>
            <Route path="/" component={LoginFormContainer}/>
            <Route  exact path="/ExportingPhotos" component={ExportingAlbumsContainer}  />
        </div>
    )
}
