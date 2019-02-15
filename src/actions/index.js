import axios from 'axios'

const addTask = (userId,id,title,body) => ({
    type : 'ADD_TASK',
    payload : {
       userId,
       id,
       title,
       body
    }
})

//https://www.npmjs.com/package/axios#response-schema
const addAsync = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then( (response) => {
                const dispatchaction = addTask(response.data.userId,response.data.id,response.data.title,response.data.body)
                dispatch(dispatchaction)
               }).catch( (error) => console.log(error))

    }
}


export {addTask, addAsync}


//usually action-creators should return action object

//with thunk , we can return function from action creators
//this return function can access dispatch

//https://github.com/reduxjs/redux-thunk#composition
