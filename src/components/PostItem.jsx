import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({post}) => {
    const [on, setOn] = useState(false)


  return (
    <Link to={`/post/${post.id}`}>
        {/* <h4>{post.type}</h4> */}
        <p>{post.title}</p>        
    </Link>
  )
}

export default PostItem