const taskReducer = (state = [{userId:0,id:0,title:"A title",body:"A body"}], action) => {
    switch(action.type) {
        case 'ADD_TASK' : 
        return [
            ...state,
            {
                userId : action.payload.userId,
                id : action.payload.id,
                title : action.payload.title,
                body : action.payload.body
            }
        ]
        default :
            return state
    }
}

export {taskReducer}