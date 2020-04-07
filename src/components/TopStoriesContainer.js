import React, { useState, useEffect } from "react";

import { getTopStoryIds} from "../API.js";
import Story from './Story.js'
// import { Link } from 'react-router-dom';
import "../styles.css";


export default function TopStoriesContainer() {
  const [storyIDs, setStoryIDs] = useState([]);


  useEffect(() => {
    getTopStoryIds().then(data => data && setStoryIDs(data));
  }, []);

  return(
    <>
  
   {
     storyIDs.map(storyID => 
      <Story
        storyID={storyID}
        key={storyID}
        />)
      
   }
   </>
  ) 

}