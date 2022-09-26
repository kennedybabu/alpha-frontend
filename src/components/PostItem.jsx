import React from 'react'

const PostItem = ({post}) => {
  return (
    <div>
        <h4>{post.type}</h4>
        <p>{post.title}</p>
    </div>
  )
}

export default PostItem