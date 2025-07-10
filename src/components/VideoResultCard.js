import React from 'react'

const VideoResultCard = (props) => {
   
    const {snippet}=props.item;
    const {channelTitle,description,title,thumbnails}=snippet;
    
    
  return (
    <div className='flex p-2'>
        <div>
            <img className="rounded-lg"alt="thumbnail" src={thumbnails.medium.url}></img>
        </div>
        <div className='pl-2'>
            <p className='font-medium text-xl pb-2'>{title}</p>
            <p>{channelTitle}</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default VideoResultCard