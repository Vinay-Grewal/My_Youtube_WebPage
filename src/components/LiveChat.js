import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { LIVE_COMMENTS_API, LIVECHATIDFINDER } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate, makeid } from "../utils/helper";


const LiveChat = () => {
    const dispatch=useDispatch();
    const chatmessages=useSelector((store)=>store.chat.messages);
    const [myComment,setMyComment]=useState("");

  useEffect(() => {

    const timer=setInterval(()=>{dispatch(addMessage({name:generate(),text:makeid(10)}))},1000);
    return ()=>{
        clearInterval(timer);
    }
  }, []);

  const handleSendComment=()=>{
    if(myComment.length!=0){
    dispatch(addMessage({
      name:"vinay",
      text:myComment,
    }))
  }

    setMyComment("");
  };
  return (
    <div className="h-[600px] border p-2 m-2 border-black bg-gray-100 rounded-lg">
    <div className="w-full h-[530px]   flex flex-col-reverse overflow-y-auto">
        {chatmessages.map((msg,index)=>(<ChatMessage name={msg.name} message={msg.text} key={index}/>))}
    </div>

    <div className="w-full p-2  border flex items-center h-50">
      <input className=" pl-2 h-9 w-full"type="text" placeholder="Your comment here." value={myComment} onChange={(e)=>setMyComment(e.target.value) } onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSendComment();
    }
  }}></input>
    </div>
    </div>
  );
};

export default LiveChat;
