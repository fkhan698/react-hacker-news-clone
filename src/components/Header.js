import React from 'react'
import { Link } from 'react-router-dom';
import "../styles.css";
export default function Header() {
    return (
        <>
<h1 className='title'>Hacker News</h1>
    <div className="navbar">
      <p><Link className="story-link" to="/">Top Stories</Link></p> 
      <p><Link className="story-link" to="/new">New Stories</Link></p> 
     
    </div>
    <hr></hr>
      
        </>
    )
}
