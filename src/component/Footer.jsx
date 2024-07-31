import React from 'react'
import './Footer.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    
    <div className='footer'>
        <p>© 2020 copyright all right reserved</p>
        <div className="icon">
               <div className="items"><FaInstagramSquare/></div>
               <div className="items"><FaSquareWhatsapp/> </div>
               <div className="items"><FaTwitter /></div>
               <div className="items"><FaFacebook /></div>
        </div>
    </div>
    </>
  )
}

export default Footer