import React, { useEffect, useState } from 'react'

import { Link, useSearchParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_RESULTS_API } from '../utils/constants'
import VideoResultCard from './VideoResultCard'
import { useDispatch } from 'react-redux'
import { closeSuggestion } from '../utils/appSlice'
const ResultsPage = (props) => {
  const dispatch=useDispatch();
  const [searchParams]=useSearchParams();
  const searchqry=searchParams.get("search_query");
  const [results,setResults]=useState([]);
  
  
  const getresultdata=async()=>{
    const data=await fetch(YOUTUBE_SEARCH_RESULTS_API+encodeURIComponent(searchqry));
    const json=await data.json();
   console.log(json.items);
    setResults(json?.items);
  }

  useEffect(()=>{
    dispatch(closeSuggestion());
    getresultdata();
  },[searchqry]);

  if (!results || results.length === 0) {
  return <h1 className='font-bold m-5'>Loading...</h1>;
  }

  return (
   <div className=''>
    {results.map((item)=>(<Link to={"/watch?v="+item.id.videoId} key={item.id.videoId} ><VideoResultCard item={item} key={item.id.videoId}/></Link>))}
   </div>
  )
}

export default ResultsPage