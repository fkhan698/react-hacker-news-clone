import React, { useState, useEffect } from "react";

import { getNewStoryIds} from "../API.js";
import Story from './Story.js'
import "../styles.css";

//import { Link } from 'react-router-dom';

export default function TopStoriesContainer() {
  const [storyIDs, setStoryIDs] = useState([]);


  useEffect(() => {
  
    getNewStoryIds().then(data => data && setStoryIDs(data));
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