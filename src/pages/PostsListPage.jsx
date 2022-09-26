import React, {useState, useEffect} from 'react'
import PostItem from '../components/PostItem'

const PostsListPage = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])


    let getPosts = async () => {
        let response = await fetch(`/app/posts/`)
        let data = await response.json()
        setPosts(data)
        console.log(posts)
    }

  return (
    <div>
        {posts.map((post, index) => {
            return <PostItem post={post} key={index}/>
        })}
    </div>
  )
}

export default PostsListPage