/**
 * Created by IMANE on 24/07/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/face';

function LinkFbForm ({onLoginFb,status}){
    let isLogged= (status==='connected');
    return(
        <div>
            <h1>Access to your FB account</h1>
            <p>This is a simple tool that allows you to access your facebook account and export your photos</p>
            <p>
                {
                    (!isLogged)
                        ?
                        <FlatButton
                            label="Facebook Login"
                            labelPosition="before"
                            primary={true}
                            icon={<ActionAndroid />}
                            onClick={onLoginFb}
                        />
                        : null
                }
            </p>
        </div>
    );
}

LinkFbForm.propTypes={
    onLoginFb : PropTypes.func.isRequired,
    status : PropTypes.string.isRequired
};

export default LinkFbForm;