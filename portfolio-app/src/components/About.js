/*
    src/components/About.js
*/

import React from "react"
import Paragraph from "antd/lib/skeleton/Paragraph"

function content() {
    return (
        <a>
        I am a software engineer who recently graduated from Cal Poly SLO. 
        Working on complex projects while in school has allowed me to develop a 
        diverse set of skill that I am always looking to expand. My passion for software has
        led to creating a variety of side projects including this very site. Feel free to take a look at my projects
        and contact me if you have any questions :)
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