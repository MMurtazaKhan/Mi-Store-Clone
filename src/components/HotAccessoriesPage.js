import React from 'react'
import HotItemCard from './HotItemCard';
import "../styles/HotAccessoriesPage.css"

const HotAccessoriesPage = ({music, musicCover, smart, smartCover, lifestyle, lifestyleCover, pbCover, pb}) => {
  return (
    <div className='HotAccessories'>
        <div>
        <img src={musicCover || smartCover || lifestyleCover || pbCover} alt="music cover" /></div>

        <div>
            {music && music.map((item, index)=>(
                <HotItemCard key={item.image} name = {item.name} price = {item.price} image = {item.image} index = {index} />
            ))}

            {smart && smart.map((item, index)=>(
                <HotItemCard key={item.image} name = {item.name} price = {item.price} image = {item.image} index = {index} />
            ))}
            
            {lifestyle && lifestyleCover.map((item, index)=>(
                <HotItemCard key={item.image} name = {item.name} price = {item.price} image = {item.image} index = {index} />
            ))}
             
             {pb && pb.map((item, index)=>(
                <HotItemCard key={item.image} name = {item.name} price = {item.price} image = {item.image} index = {index} />
            ))}
        </div>
       


    </div>

    // 2nd div 
   

  )
}

export default HotAccessoriesPage