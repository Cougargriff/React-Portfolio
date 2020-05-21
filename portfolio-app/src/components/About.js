/*
    src/components/About.js
*/

import React from "react"
import Paragraph from "antd/lib/skeleton/Paragraph"
import { Flex, Box, Image } from 'rebass'

function content() {
    return (
        <a className="contents" >
        I am a software engineer who recently graduated from Cal Poly SLO. 
        Working on complex projects at Cal Poly has allowed me to develop a 
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
            <div style={{width: '800px', display: 'inline-flex'}}>
            <Flex>
                <Box width={1/2} px={2}>
                    <Image src="https://avatars3.githubusercontent.com/u/19522316?s=460&u=91ca27a2b75351c39c6be24e870b10070c04a1f3&v=4"
                    sx={{
                        width: [ '90%', '90%' ],
                        borderRadius: 8,
                      }}
                    />
                </Box>
                <Box width={1/2} px={2} py={2}>
                    <div style={{
                        transform: "translateY(50%)"
                    }}>
                        {content()}  
                    </div>
                </Box>
            </Flex>
            </div>
        </div>
    )
}

export default About;