import React from 'react'
import Search  from './Search'
import Navbar from './Navbar'
import Chats from './Chats'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar