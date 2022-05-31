import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/profileCard/ProfileCard'
import ProfileLeft from '../../components/profileLeft/ProfileLeft'
import RightSide from '../../components/rightSide/RightSide'

import './Profile.css'

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>
      <div className="Profile-center">
        <ProfileCard/>
        <PostSide/>
      </div>
        <RightSide/>
    </div>
  )
}

export default Profile