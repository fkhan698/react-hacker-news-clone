import React, {useState, useEffect} from 'react';
import { getStoryTitle} from "../API.js";
import { timeFormat } from '../timeFormat.js'
import { Link } from 'react-router-dom';

export default function Story ({storyID}) {

const [story, setStory] = useState({});

 useEffect(()=> {
    
    getStoryTitle(storyID).then(data => data && data.url && setStory(data));
 });

 const kids = story.kids ? story.kids: [];
 const author = story.by;
    return (
      
      <div className="story-wrapper">
         
         <a className="a-tag" href={story.url}>
           <p className="story-title">{story.title}</p>
         </a>
         <p className="story-author"><strong>By: {story.by}</strong> on {timeFormat(story.time)}</p>
         <p>{story.poll}</p>
         <p className="story-comments"><Link to={{
  pathname: `/comments/${storyID}`
}}>{kids.length}</Link> Comments</p>
         
         <hr></hr>
      </div>
   
    )
}