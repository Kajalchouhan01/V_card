import React from 'react'
import './Appoiment.css'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Appoiment = () => {
    return (
        <>
            <div className="appoiment">
                <div className="topp">
                   <div className='work
                   '> <h2>Let's work together?</h2></div>
                    <span class="material-symbols-outlined">
                        unknown_med
                    </span>
                    <p>
                        I design and develop services for customers of all sizes, specializing in creating stylish, modern websites</p>
                </div>
                <form id="control-form" method="POST">
                    <div className="get">
                        <input name='Name' id='name' class='form-label' for='name' placeholder='NAME' required />


                        <input name='Email' id='email' class='form-label' for='email' placeholder='EMAIL' required />


                        <input name='Subject' id='subject' class='form-label' type='text' placeholder='SUBJECT' required />


                        <textarea name='message' id='message' class='form-label' placeholder='COMMENT' required autoComplete='off' />

                    </div>
                </form>
                <div className="contact_end"  data-aos="zoom-in" data-aos-duration="1000">
                    
                    <h3>Mail</h3>
                    <p>kajal@gmail.com</p>
                    <br />
                    <h3>Visit </h3>
                    <p>Indore MadhyaPradesh</p>
                    <br />
                    <h3>Phone</h3>
                    <p>+91 98446 92726</p>
                    <p>+91 98446 92726</p>
                    <br />
                    <div className="visit">
                        <a><FaGithub /></a>
                        <a><FaFacebook /></a>
                        <a><FaTwitter /></a>
                       
                    </div>
                </div>
<hr/><hr/>
            </div>

        </>
    )
}

export default Appoiment