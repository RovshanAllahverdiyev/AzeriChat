import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message = ({message}) => {

  const {currentUser} = useContext(AuthContext) 
  const {data} = useContext(ChatContext)

  return (
    <div className='message owner'>
      {/* <div className="messageInfo">
        <img src= {} alt="" />
        <span>just now</span>
      </div>
        <div className="messageContent">
          <p>hello</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHdiymEKdaBxhm4xw9p9Sl5JygCTHEC8oEDw&usqp=CAU" alt="" />
        </div> */}
    </div>
  )
}

export default Message