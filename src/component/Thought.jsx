import React from 'react'
import './Thught.css'

const Thought = () => {
  return (
    <>
    <div  data-aos="zoom-out"  data-aos-duration="1000" className="thoughts-section">
        <div className="tho"><h5>Thoughts on Being a Web Developer</h5></div>
        <div  className="thought-box" data-aos="fade-up-right" data-aos-duration="1000">
          <h3>Continuous Learning</h3>
          <p>Web development is a constantly evolving field. Staying updated with the latest technologies and trends is crucial for success.</p>
        </div>
        <div className="thought-box" data-aos="fade-up-left" data-aos-duration="1000">
          <h3>Problem-Solving</h3>
          <p>As a web developer, solving complex problems and finding efficient solutions is part of the daily routine. It's both challenging and rewarding.</p>
        </div>
      </div>
    </>
  )
}

export default Thought