import React from 'react'
import "./section.css"
import Cap from "../images/cap.png";
import Bottle from "../images/bottle.png";
const Section = () => {
    return (
        <div className='section'>
            <h2>CLEAN IT</h2>
            <h3>ALL</h3>
            <div className='image'>
                <img className="cap" src={Cap} alt="" />
                <img className="bottle" src={Bottle} alt="" />
            </div>
            <div className='para'>
                <p>The average person uses 3 single-use bottles per week!</p>
                <p>One million single use plastic bottles</p>
                <p>are thrown out every minute!</p>
            </div>
            <div className='help'>
                HELP US CLEAN IT
            </div>
        </div>
    )
}

export default Section