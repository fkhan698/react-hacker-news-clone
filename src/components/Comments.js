import React, {useState, useEffect} from 'react'

import {getStoryTitle} from '../API.js'

export default function Comments({match}) {
    
    const { id } = match.params;
    const [comment, setComment] = useState({});




    useEffect(()=> {
        getStoryTitle(id).then(data => setComment(data))
    }, [])

    return (
        <>
        
            <h1 className="story-title">{comment.title}</h1>

            <ul>
                <li>{comment.by}</li>
                <li>{[comment.id]}</li>
            </ul>
            
        </>
    )
}
