import React from 'react'
import './Contact_section.css'

const Contact_section = () => {
    return (
        <>
            <div className="second">
                <h4>Contact Information</h4>
                <div>
                    <div className="contact_section">

                        <div data-aos="fade-up-right" data-aos-duration="1000" className="con"> <h4><span class="material-symbols-outlined">
                            mail
                        </span>Email:</h4> <p>kajal@example.com</p></div>

                        <div data-aos="fade-up-left" data-aos-duration="1000" className="con"> <h4><span class="material-symbols-outlined">
                            call
                        </span>Phone: </h4> <p> +91 12345 67890</p></div>

                    </div>
                    <div className="loc" data-aos="flip-up" data-aos-duration="1000"  >  <h4>Location : </h4> <p> Indore, Madhya Pradesh</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact_section