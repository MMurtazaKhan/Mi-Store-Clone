import React from 'react';
import {BsArrowRepeat, BsShieldCheck,BsFillPinMapFill} from "react-icons/bs";
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';
import "../styles/PreFooter.css";



const PreFooter = ({footer}) => {
  return (
    <>
    <div className='PreFooter' >
        <div>
            {<BsArrowRepeat className='icon' />}
            <p><b>Hassle-free Replacement</b> <br/>10-day easy replacement on mi.com</p>
        </div>
        <div>
            {<BsShieldCheck className='icon'/>}
            <p><b>100% Secure Payments</b> <br/>We support Card, Wallets and COD</p>
        </div>
        <div>
            {<BsFillPinMapFill className='icon'/>}
            <p><b>Vast Service Network</b> <br/>1000 Mi service centers across 60 cities</p>
        </div>
    </div>


    <div className="PreFooter2">
        <div><p>Let's Stay in Touch <span>Get updates on sales special and more</span></p></div>

        <div>
            <div><input type="text" /> 
                <button>{'>'}</button>
            </div>
            <span>Thanks! You are on the email list now</span>
        </div>

        <div>
            <p>Follow Mi</p>
            <span>We want to hear from you</span>
        </div>

        <div>{<FaFacebook/>} { <FaInstagram/> } {<FaTwitter/>} {<FaYoutube/>} </div>
    </div>

    <div className="footer">
                  <div> 
                     <p> SUPPORT</p>
                      {footer.support.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                 <p> SHOP AND LEARN</p>
                  {footer.shopAndLearn.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name} </a>

                      ))}

                  </div>
                  <div>
                   <p> RETAIL STORE</p>
                    {footer.retailStore.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                           <p>  ABOUT</p>
                             {footer.aboutUS.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                 <p> CONTACT US</p>
                  {footer.contactUs.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                      <div>Chat with our Virtual AI Bot(24/7 Live Agent Support)</div><button>CHAT NOW</button>
                  </div>


                  
        </div>

        <div className="footer-border">
            <div>Copyright Ⓒ 2010-2022 Xiaomi. All Rights Reserved</div>
        </div>
    </>
  )
}

export default PreFooter;


