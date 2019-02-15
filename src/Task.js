import React from 'react'

export default ({userId,id,title,body}) => {

    //console.log(userId)
    //console.log(id)


  return (
       <ul>
           <li>{userId}</li>
           <li>{id}</li>
           <li>{title}</li>
           <li>{body}</li>
       </ul>
  )
}
