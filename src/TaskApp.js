import {connect} from 'react-redux'
import TaskList from './TaskList'
import {addTask} from './actions'
import {getAsync} from './helpers'

const mapStatetoProps = (state) => ({
    tasks : state
})

const mapDispatchtoProps = (dispatch) => ({
    addATask : () => dispatch(addTask(10,10,"sdfdsfds","dsfdsfdsfd")),
    addAsync : getAsync
})

//addATask takes in no arguments. It can be used without arguments

//addAsync : getAsync
//getAsync() will execute function and the result will be assigned to the key.
//getAsync will assign the function itseld


export default connect(mapStatetoProps,mapDispatchtoProps)(TaskList)

//TaskApp is a container component which which returns a connected presentational component