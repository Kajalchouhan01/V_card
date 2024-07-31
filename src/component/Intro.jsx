import React from 'react'
import './Intro.css'




function Intro() {
    return (
        <div>
            <div className="home">
                <div className="top">
                    <div >Kajal</div>
                    <div className="side_bar" >
                        <span class="material-symbols-outlined">
                            menu
                        </span>

                    </div>
                </div>
                <div className="intro">
                    <div className="hello">
                        Hello,
                    </div>
                    <div className='kajal'>I'm Kajal Chouhan</div>
                    <ul className='dynamic'>
                        <li><span>Web Developer</span></li>
                        
                    </ul>
                    <div className="contact" >
                        <button >CONTACT US</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Intro