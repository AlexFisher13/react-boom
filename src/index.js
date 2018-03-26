import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {createStore} from 'redux'
import rootReducer from './reducers'
import {Provider} from 'react-redux'

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

//добавить функционала
//добавить экшенов
//добавить combineReducers
//добавить добавить константы для экшенов
//добавить middleware а именно thunk
//добавить например vk api
