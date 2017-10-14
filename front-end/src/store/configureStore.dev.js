import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers';
import promise from "redux-promise-middleware";
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';


const configureStore = preloadedState => {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(promise(),thunk, routerMiddleware(browserHistory)),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}
export default configureStore