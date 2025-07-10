import React from 'react'
import {commentsdata} from "../utils/constants.js"
import CommentCard from './CommentCard.js'




const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='font-bold text-2xl'>Comments</h1>

     
        {commentsdata.map((data,index)=>(<div key={index} className="mb-5"> <CommentCard data={data} />    </div>))}
    
    </div>
  )
}

export default CommentsContainer