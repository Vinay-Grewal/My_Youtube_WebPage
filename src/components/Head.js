import React, { useEffect, useState } from "react";
import { toggleMenu,closeSuggestion,openSuggestion } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link ,useNavigate} from "react-router-dom";

const Head = () => {
  const navigate = useNavigate(); 
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions,setSuggestions]=useState([]);
  

  
  const searchCache=useSelector((store)=>{return store.search});
  const showSuggestions=useSelector((store)=>{return store.app.isSuggestionOpen});
 

  const dispatch = useDispatch();
 
  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions()
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
  
    setSuggestions(json[1]);
    
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }));
  };

 
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

 const handlenavigation=()=>{
    if(searchQuery) {
      navigate("/results?search_query=" + searchQuery); 
      dispatch(closeSuggestion()); 
    }
 }
 

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => {
            return toggleMenuHandler();
          }}
          alt="menu"
          className="h-8 cursor-pointer "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        ></img>
        <img
          alt="yt-logo"
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        ></img>
      </div>

      <div className="col-span-10">
        <div className="flex w-5/12 mx-auto">
          <div className="relative flex-grow">
            <div>
              <input
                className="w-full h-10 border border-gray-300 rounded-l-full pl-2"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={()=>dispatch(openSuggestion())}
                onBlur={()=>dispatch(closeSuggestion())}               
              ></input>
            </div>
            {showSuggestions===false?null:suggestions.length===0?null:
            <div className="absolute bg-white w-full border rounded-lg mt-1 shadow-lg">
              <ul className="ml-2 font-medium">
                {suggestions.map((suggestion,index)=>( <li className="py-2 hover:bg-gray-200" key={index} onMouseDown={(e) => e.preventDefault()}><Link to={"/results?search_query="+suggestion}>🔍 {suggestion}</Link></li>))}
              </ul>
            </div>}
          </div>

          <div>
            <button
              className="h-10 bg-gray-300 border border-gray-300 rounded-r-full pr-4"
              onClick={() => {handlenavigation()}}
            >
              <img
                className="h-8 ml-1 "
                alt="search"
                src="https://static.thenounproject.com/png/337699-200.png"
              ></img>
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-1 flex justify-end">
        <img
          className="h-8 "
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        ></img>
      </div>
    </div>
  );
};

export default Head;
