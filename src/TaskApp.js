import {connect} from 'react-redux'
import TaskList from './TaskList'

const mapStatetoProps = (state) => ({
    tasks : state
})

export default connect(mapStatetoProps)(TaskList)

//TaskApp is a container component which which returns a connected presentational component