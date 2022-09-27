import React, {useState, useEffect} from 'react'

const PostPage = ({match, history}) => {
    let postId = match.params.id
    let [post,setPost] = useState(null)
    const [show, setShow] = useState(false)


    useEffect(() => {
        getPost()
    }, [postId])


    let getPost = async () => {
        let response = await fetch(`/app/posts/${postId}/`)
        let data = await response.json()
        setPost(data)
    }


    let updatePost = async () => {
        fetch(`/app/posts/${postId}/update/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
    }

    let handleSubmit = () => {
        updatePost()
        history.push('/')
    }

  return (
    <div>
        <p>{post?.title}</p>
        <p onClick={() => setShow(!show)}>{show? 'hide' : 'update post'}</p>
        { show ? 
            <form>
                <input type="text" className='update-text' onChange={(e) => {setPost({...post, 'title': e.target.value})}}/>
                <button type='submit' onClick={handleSubmit}>update</button>
            </form>  
        : null
        }
    </div>
  )
}

export default PostPage