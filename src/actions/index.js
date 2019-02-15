const addTask = (userId,id,title,body) => ({
    type : 'ADD_TASK',
    payload : {
       userId,
       id,
       title,
       body
    }
})


export {addTask}