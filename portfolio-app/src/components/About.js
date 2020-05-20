/*
    src/components/About.js
*/

import React from "react"
import Paragraph from "antd/lib/skeleton/Paragraph"

function content() {
    return (
        <a className="contents">
        I am a software engineer who recently graduated from Cal Poly SLO. 
        Working on complex projects while in school has allowed me to develop a 
        diverse set of skills that I am always looking to expand. My passion for software has
        led me to create a variety of side projects including this very site.
        </a>
    )
}

function About(props) {
    return (
        <div>
            <h1 className="headers">
                About Me
            </h1>
            {content()}
        </div>
    )
}

export default About;