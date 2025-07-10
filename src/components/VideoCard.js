import React from 'react'

const VideoCard = (props) => {
    
    const {snippet,statistics}=props.info;
    const {channelTitle,title,thumbnails}=snippet;
    
    
  return (
        <div className="p-2 m-1 w-80 shadow-lg" style={{width:"21rem"}}>
            <img className="rounded-r-lg"alt="video-thumbnail"src={thumbnails.high.url}></img>
            <ul>
                <li className='font-bold py-2'>{title}</li>
                <li>{channelTitle}</li>
                <li>Views {statistics.viewCount}</li>
            </ul>
        </div>
  )
}

export default VideoCard