import React from 'react';
import { render } from 'react-dom';
import { Provider  } from 'react-redux';
import configureStore from './store/configureStore';
import {configRoutes} from './components/configRoutes';
import registerServiceWorker from './registerServiceWorker';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import {Router } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './index.css';
import styles from './css/styles.css';

injectTapEventPlugin();
const muiTheme = getMuiTheme(styles.theme);

const App = ()=>{
    const store = configureStore();
    const history = syncHistoryWithStore(browserHistory, store);
    const routes= configRoutes(store);
    return(
        <MuiThemeProvider  muiTheme={muiTheme} >
            <Provider store={store}>
                <Router history={history} routes={routes}/>
            </Provider>
        </MuiThemeProvider>
    );
};


render( <App/>, document.getElementById('root'));
registerServiceWorker();