import { combineReducers } from 'redux';
import { routerReducer as routing} from 'react-router-redux';
import { reducer as reduxFormReducer} from 'redux-form';
import login from './LoginReducer';
import exporting from './ExportingReducer';

const rootReducer = combineReducers({
    login,
    exporting,
    form : reduxFormReducer,
    routing
});

export default rootReducer;