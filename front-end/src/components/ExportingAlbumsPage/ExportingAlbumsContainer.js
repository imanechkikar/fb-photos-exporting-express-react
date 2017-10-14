/**
 * Created by IMAD on 03/10/2017.
 */

import React from 'react';
import {connect} from 'react-redux';
import ExportingAlbums from './ExportingAlbums';

function ExportingAlbumsContainer ({status,logged}){
    return <ExportingAlbums status={status} logged={logged}/>;
}

const  mapStateToProp = (state)=>{
    return {status: state.exporting.status , logged : state.login.logged};
};

export default connect(mapStateToProp,null)(ExportingAlbumsContainer);