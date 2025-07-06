import React from 'react'
import UserSidebar from './UserSidebar'
import MessageContainer from './MessageContainer'

function Homepage() {
  return (
    <div className='flex'>
        <UserSidebar/>
        <MessageContainer/>
    </div>
  )
}

export default Homepage