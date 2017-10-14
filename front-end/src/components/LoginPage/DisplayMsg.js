/**
 * Created by IMAD on 13/10/2017.
 */
import React from "react";
import PropTypes from 'prop-types';
import styles from '../../css/styles.css';
import Snackbar from 'material-ui/Snackbar';

// display error message

function DisplayMsg({message}) {
    return (message!==null) ?
        <Snackbar
            open={true}
            contentStyle={styles.failedMsg}
            message={message}
            autoHideDuration={6000}
           />
        : null
}

DisplayMsg.PropTypes = {
    message : PropTypes.string,
};

export default DisplayMsg;

