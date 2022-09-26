import React, {useState, useEffect} from 'react'

const PostPage = ({match}) => {
    let noteId = match.params.id

    let [post,setPost] = useState(null)


    useEffect(() => {
        getPost()
    }, [])

    let getPost = async () => {
        let response = await fetch(`/app/posts/${noteId}/`)
        let data = await response.json()
        setPost(data)
    }

  return (
    <div>
        <p>{post?.title}</p>
    </div>
  )
}

export default PostPage