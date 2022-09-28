import React from 'react'
import { Link } from 'react-router-dom'
import CreatePost from '../pages/CreatePost'

const AddButton = () => {
  return (
    <Link to='/createpost'>
        <p>add</p>
    </Link>
  )
}

export default AddButton