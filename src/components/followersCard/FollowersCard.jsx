import React, { useEffect, useState } from 'react'
import './FollowersCard.css'
import { Followers } from '../../Data/FollowersData'
import User from '../User/User'
import { getAllUsers } from '../../api/UserRequests'
import { useSelector } from 'react-redux'


function FollowersCard() {

  const { user } = useSelector((state) => state.authReducer.authData);
  const [persons, setPersons] = useState([])

  useEffect(()=>{

    const fetchPersons = async() => {
      const {data} = await getAllUsers();
      setPersons(data);
      console.log(data);
    }
    fetchPersons()
  }, [])
  return (
    <div className='FollowersCard'>
      <h3>People you may know</h3>
      {persons.map((person, id)=>{ 
        if(person._id !== user._id)
        {
          return(
            <User person={person} key ={id}/>
          )

        } 
      })}
    </div>
  )
}

export default FollowersCard