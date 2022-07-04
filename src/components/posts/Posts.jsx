import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTimelinePosts } from '../../actions/PostActions'
import Post from '../post/Post'
import './Posts.css'


function Posts() {
  const params = useParams()
  const dispatch = useDispatch()
  const {user}=useSelector(state => state.authReducer.authData)
  let {posts, loading} = useSelector(state => state.postReducer)

  useEffect(()=> {
    dispatch(getTimelinePosts(user._id))
  }, [])

  if(!posts) return "no posts!";
  if(params.id) posts = posts.filter((post)=> post.userId === params.id)

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