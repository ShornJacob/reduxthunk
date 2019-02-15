import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { createStore } from 'redux';
import { taskReducer } from './reducer';

ReactDOM.render(<Provider store={createStore(taskReducer)} ><App /></Provider>, document.getElementById('root'));

