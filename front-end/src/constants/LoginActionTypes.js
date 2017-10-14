/**
 * Created by IMAD on 24/07/2017.
 */
import keyMirror from 'keymirror';

const LoginActionTypes = keyMirror({
    LOGIN_START: null,
    LOGIN_FULFILLED: null,
    LOGIN_REJECT: null,
    LOGOUT: null
});

export default LoginActionTypes;