import React, {useState, useEffect} from 'react'

const PostPage = ({match, history}) => {
    let postId = match.params.id
    let [post,setPost] = useState(null)
    const [show, setShow] = useState(false)


    useEffect(() => {
        getPost()
    }, [postId])


    let getPost = async () => {
        if(postId === 'new') return
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


    // let createPost = async () => {
    //     fetch(`/app/posts/create/`, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(post)
    //     })
    // }


    let handleSubmit = () => {
        if(postId !== 'new' && post.body === "") {
            deletePost()
        } else if(postId !== 'new') {
            updatePost()
        } else if(postId === 'new' && post.body !== null) {
            // createPost()
        }        
        history.push('/')
    }

    let deletePost = async () => {
        fetch(`/app/posts/${postId}/delete/`, {
            method: "DELETE",
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        history.push('/')
    }

  return (
    <div>
        <p>{post?.title}</p>
        <p onClick={() => setShow(!show)}>{show? 'hide' : 'update post'}</p>
        
        {postId !== 'new' ? (
            <p onClick={deletePost}>delete</p>
        ) : (
            <p onClick={deletePost}>Done</p>
        )}
        { show ? 
            <form>
                <input type="text" className='update-text' onChange={(e) => {setPost({...post, 'title': e.target.value})}} value={post?.title}/>
                <button type='submit' onClick={handleSubmit}>update</button>
            </form>  
        : null
        }
    </div>
  )
}

export default PostPage