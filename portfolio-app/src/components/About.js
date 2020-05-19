/*
    src/components/About.js
*/

import React from "react"
import Paragraph from "antd/lib/skeleton/Paragraph"

function content() {
    return (
        <a>
        Hello this is the about page. I am a software engineer with the experience of a universe condensed into the size of a marble. 
    </a>
    )
}

function About(props) {
    return (
        <div>
            <h1>
                About Me
            </h1>
            {content()}
        </div>
    )
}

export default About;