/**
 * Created by IMAD on 24/07/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {linkFb} from '../../../actions/ExportingActions';
import LinkFbForm from './LinkFbForm';

function LinkFbFormContainer ({onLogin,status}){
    return <LinkFbForm onLoginFb={onLogin} status={status} />;
}

const mapDispatchToProps = {
    onLogin:linkFb
};

const  mapStateToProp = (state)=>{
    return {status : state.exporting.status};
};

export default connect(mapStateToProp,mapDispatchToProps)(LinkFbFormContainer);