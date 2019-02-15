import axios from 'axios'

const getAsync = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then( (response) => console.log(response) )
    .catch( (error) => console.log(error) )
}

export {getAsync}
