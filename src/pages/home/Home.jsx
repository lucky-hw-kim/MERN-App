import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import './Home.css'

export default function Home() {
  return (
    <div className='Home'>
      <ProfileSide/>
      <PostSide/>
      <div className='RightSide'>Rightside</div>
    </div>
  )
}
