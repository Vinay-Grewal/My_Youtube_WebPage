import React, { useEffect, useState } from 'react'
import { YUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos]=useState([]);

  
  useEffect(()=>{
    getvideos();
  },[]);

  const getvideos=async()=>{
    const data=await fetch(YUTUBE_VIDEOS_API);
    const json=await data.json();
    
    
    setVideos(json?.items);
  }

  if (!videos || videos.length === 0) {
  return <h1>Loading...</h1>;
  }
  return (
    <div className='flex flex-wrap justify-center'>
      {videos.map((video)=>(<Link to={"/watch?v="+video.id} key={video.id}><VideoCard  info={video}/></Link> ))}
    </div>
  )
}

export default VideoContainer