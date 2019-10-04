import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware , combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'

import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './store/reducers/robots.reducers'
import 'tachyons';


const logger = createLogger();
//here it should be rootreducer but unitl now we have one reducer
const rootReducer = combineReducers({searchRobots,requestRobots})
const store = 
createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
                <Provider store={store} >
                <App /> 
                </Provider>,
                document.getElementById('root'));
serviceWorker.registerServiceWorker();
// serviceWorker.unregister();
