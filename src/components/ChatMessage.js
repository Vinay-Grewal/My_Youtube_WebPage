import React from 'react'

const ChatMessage = (props) => {
  return (
    <div className='flex items-center shadow-md p-1'>
        <img className="h-8 " alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>
        <p className='font-bold px-2'>{props.name}</p>
        <p>{props.message}</p>

    </div>
  )
}

export default ChatMessage