import React from "react";

const CommentCard = (props) => {
  return (
    <div className="my-1">

      <div className="flex  bg-gray-200 rounded-lg">
        <div className="mr-2 flex items-center ">
          <img
            className="h-8"
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
        </div>
        <div>
          <p className="font-bold">{props.data.name}</p>
          <p>{props.data.text}</p>
        </div>
      </div>


      <div className="pl-6 border-l-2 border-gray-400 ml-4">
        {props.data.replies.map((reply, index) => (
          <CommentCard data={reply} key={index} />
        ))}
      </div>

    </div>
  );
};

export default CommentCard;
