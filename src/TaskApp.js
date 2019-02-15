import {connect} from 'react-redux'
import TaskList from './TaskList'
import {addTask} from './actions'

const mapStatetoProps = (state) => ({
    tasks : state
})

const mapDispatchtoProps = (dispatch) => ({
    addATask : () => dispatch(addTask(10,10,"sdfdsfds","dsfdsfdsfd"))
})

//addATask takes in no arguments. It can be used without arguments


export default connect(mapStatetoProps,mapDispatchtoProps)(TaskList)

//TaskApp is a container component which which returns a connected presentational component