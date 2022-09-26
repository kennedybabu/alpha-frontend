import React, {useState, useEffect} from 'react'

const PostsListPage = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])


    let getPosts = async () => {
        let response = await fetch(`http://127.0.0.1:8000/app/posts/`)
        let data = await response.json()
        setPosts(data)
        console.log(posts)
    }

  return (
    <div>
        {posts.map((post, index) => {
            return <p>{post.title}</p>
        })}
    </div>
  )
}

export default PostsListPage