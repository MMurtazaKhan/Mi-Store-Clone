import React from 'react'

const Offer = ({src, link, index}) => {
  return (
    <a href={link}><img src={src} alt={`Offer ${index}`} /> </a>
  )
}

export default Offer