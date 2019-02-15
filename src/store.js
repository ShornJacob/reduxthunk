import {createStore} from 'redux'
import {taskReducer} from './TaskList'

const store = createStore(taskReducer)

export default store