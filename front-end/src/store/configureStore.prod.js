import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import promise from "redux-promise-middleware";
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';



const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(promise(),thunk,routerMiddleware(browserHistory)
  )
);

export default configureStore