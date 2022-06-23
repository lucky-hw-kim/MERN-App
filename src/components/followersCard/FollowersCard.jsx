import React from 'react'
import './FollowersCard.css'
import { Followers } from '../../Data/FollowersData'

function FollowersCard() {
  return (
    <div className='FollowersCard'>
      <h3>Followers</h3>
      {Followers.map((follower, id)=>{
        return(
          <div className='follower' key={id}>
            <div>
              <img src={follower.img} alt="" className='followerImage' />
                <div className='name'>
                  <span>{follower.name}</span>
                  <span>@{follower.username}</span>
                </div>
            </div>
            <button className='button fc-button'>
              Follow
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default FollowersCard