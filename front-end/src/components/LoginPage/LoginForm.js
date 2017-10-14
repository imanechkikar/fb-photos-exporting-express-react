/**
 * Created by IMAD on 18/04/2017.
 */
import React from "react";
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DisplayMsg from './DisplayMsg';
import styles from '../../css/styles.css';
import { Field, reduxForm } from 'redux-form';
import {connect} from "react-redux";


const validate = values => {
    const errors = {};
    const requiredFields = [ 'email', 'password' ];
    requiredFields.forEach(field => {
        if (!values[ field ] ) {
            errors[ field ] = 'Required'
        }
    });
    return errors
};

const renderTextField = ({input, label , type ,meta: { touched, error }, ...custom }) => (
    <TextField     hintText={label}
                   floatingLabelText={label}
                   errorText={touched && error}
                   fullWidth={true}
                   type={type}
                   {...input}
                   {...custom}
    />
);

const LoginForm = props => {
    const { message, onLogin, onRegister, submitting, invalid } = props;
    return (
        <div style={styles.container}>
            <h1>Building a mini Facebook photos exporting app</h1>
            <DisplayMsg  message={message} />
            <div  style={styles.formLogin} >
                <div  style={styles.row} >
                    <Field name="email" style={styles.field} component={renderTextField} label="Email" type="input"/>
                </div>
                <div style={styles.row} >
                    <Field name="password"  style={styles.field}   component={renderTextField} label="Password"  type="password" />
                </div>
                <div style={styles.row}>
                    <RaisedButton label="Login" primary={false} style={styles.buttons} disabled={ invalid || submitting  } type="submit" onTouchTap={onLogin}/>
                    <RaisedButton label="Register" primary={false} style={styles.buttons} disabled={ invalid || submitting  } type="submit" onTouchTap={onRegister}/>
                </div>
            </div>
        </div>
    )
};

LoginForm.propTypes = {
    onLogin:  PropTypes.func.isRequired,
    onRegister:  PropTypes.func.isRequired,
    message: PropTypes.string,
};


export default connect(
    state => ({
        initialValues: {email : "imane@gmail.com"}// pull initial values from account reducer
    }),
    null            // bind account loading action creator
)( reduxForm({
    form: 'LoginForm',  // a unique identifier for this form
    validate
})(LoginForm));
