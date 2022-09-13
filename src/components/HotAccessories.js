import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/HotAccessories.css"

const HotAccessories = () => {
  return (
    <div className='HotAccessoriesMenu' >
        <Link className='HotAccessoriesLink' to="/gear-and-devices" >Gear & Devices</Link>
        <Link className='HotAccessoriesLink' to="/audio" >Audio</Link>
        <Link className='HotAccessoriesLink' to="/lifestyle" >Lifestyle</Link>
        <Link className='HotAccessoriesLink' to="/powerbank" >Powerbank & Charging</Link>
    </div>
  )
}

export default HotAccessories