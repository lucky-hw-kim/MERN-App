import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelinePosts } from '../../actions/PostActions'
import Post from '../post/Post'
import './Posts.css'


function Posts() {

  const dispatch = useDispatch()
  const {user}=useSelector(state => state.authReducer.authData)
  const {posts, loading} = useSelector(state => state.postReducer)

  useEffect(()=> {
    dispatch(getTimelinePosts(user._id))
  }, [])

  return (
    <div className='Posts'>
      {loading? "Feching Posts..." :
      posts.map((post, id)=> {
        return <Post data={post} id={id} key={id}/>
      })}
    </div>
  )
}

export default Posts