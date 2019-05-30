import React from 'react'
import './css/About.css'
import Footer from './Footer'

function About() {
    return (
        <React.Fragment>
            <h1 className="about-title">ABOUT</h1>
        <div className="css-typing">
            <h3>BULLET IS A JOURNALING APP DESIGNED TO HELP YOU GET IN TOUCH WITH YOURSELF IN UNDER A MINUTE EACH DAY.
                </h3>
                <h3>
            RECORD WHAT YOU ARE GRATEFUL FOR, SET PRIORITIES, RECOGNIZE YOUR ACHIEVEMENTS, REFLECT ON YOUR FEELINGS AND ADD IMAGES TO CAPTURE MEMORIES. 
            </h3>
            <h3>VIEW ALL OF YOUR BULLETS OR SWITCH TO THE TIMELINE VIEW TO LOOK BACK AT FAVORITED DAYS.</h3>
            <h3>DON'T GET LOST IN EVERYDAY LIFE.</h3>
            <h3> JUST BULLET.  </h3>
        </div>
        <Footer/>
           </React.Fragment> 
    )
}

export default About;