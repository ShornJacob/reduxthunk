import React from 'react'
import Task from './Task'

export default ({tasks}) => {

  //console.log(tasks)

  const listTasks = tasks.map( (task,index) =>  <Task
      key={index}
      //spread object keys as prop, props can be destructered at the receiver end
      {...task} />
    )
  return (
    <div>
       <ul>
           {listTasks}
       </ul>
    </div>
  )
}

//TaskList is a presentational component