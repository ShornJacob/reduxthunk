import {createStore, applyMiddleware} from 'redux'
import {taskReducer} from './reducer'
import thunk from 'redux-thunk'

const store = createStore(taskReducer,applyMiddleware(thunk))

export default store