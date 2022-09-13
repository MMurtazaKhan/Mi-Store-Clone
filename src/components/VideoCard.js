import React from 'react';
import {AiFillPlayCircle} from "react-icons/ai";
import "../styles/Video.css"

const VideoCard = ({index, image, name}) => {
  return (
    <div className='videoCard' style={{backgroundImage: `url(${image})`}} >
    <a href="#/"><AiFillPlayCircle/></a>
    <p>{name}</p>
    </div>
  )
}

export default VideoCard