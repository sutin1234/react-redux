import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';





const salaryInitState = {
    salary: 15000,
    value: []
}
const userInitState = {
    name: 'sutin',
    age: 25
}

const salaryReducer = (state = salaryInitState, action) => {
    switch(action.type) {
        case 'ADD' : 
            state = {
             salary: (state.salary += action.payload),
             value: [...state.value, action.payload]
            }
         break;
    }
    return state;
}

const userReducer = (state = userInitState, action) => {
    switch(action.type) {
        case 'setName' : 
            state = {
             ...state,
             name: action.payload
            }
         break;
    }
    return state;
}

const myLoggerAction = (store) => (next) => (action) => {
    console.log('Log Action ', action)
    next(action); // middleware
}
const store = createStore(combineReducers({salary$: salaryReducer, user$: userReducer}), {} , applyMiddleware(myLoggerAction)); // store
store.subscribe(() => {
    console.log('store subscribe ', store.getState()); // subscribe 
});

// // salaryReducer
// store.dispatch({type: 'ADD', payload: 12000})
// // userReducer
// store.dispatch({type: 'setName', payload: 'thinny Redux'})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
 document.getElementById('root'));
serviceWorker.unregister();

