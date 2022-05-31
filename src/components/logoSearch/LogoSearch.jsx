import React from 'react'
import logo from '../../img/logo.png'
import './LogoSearch.css'
import {UilSearch} from '@iconscout/react-unicons'

export default function LogoSearch() {
  return (
    <div className='logoSearch'>
      <img src={logo} alt="logo" />
      <div className='search'>
        <input type="text" placeholder='#Explore' />
        <div className='s-icon'>
          <UilSearch/>
        </div>
      </div>
    </div>
  )
}
