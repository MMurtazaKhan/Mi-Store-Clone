import React from 'react';
import "../styles/PreNavbBar.css";
import {AiOutlineShoppingCart} from "react-icons/ai"

const PreNavBar = () => {
  return (
    <div className='preNavBar'>
        <div>
        <a href="https://mistore.pk/">My Store</a> <span>|</span>
        <a href="https://mistore.pk/pages/mi-community/">Community</a><span>|</span>
        <a href="https://mistore.pk/pages/support">Support</a><span>|</span>
        <a href="https://mistore.pk/pages/track-your-order-1">Track my order</a>
        </div>

        <div>
        <a href="https://mistore.pk/account/login">Login</a><span>|</span>
        <a href="https://mistore.pk/cart"> {<AiOutlineShoppingCart/>} Cart (0)</a>
       
        </div>
    </div>

    
  )
}

export default PreNavBar