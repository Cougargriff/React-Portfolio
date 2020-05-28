/*
    src/components/Home.js
*/

import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    padding-top: 400px;
    color: white;
`

const ObjectiveStatement = styled.h2`
    color: white;
`

function contents() {
    return (
        <center >
            <ObjectiveStatement className="contents" >
                I am a Software Engineer
            </ObjectiveStatement>
        </center>      
    )
}

function title() {
    return (
        <center>      
            <Title className="headers">
                Griffin Johnson
            </Title>
        </center>
    )
}



function Home(props) {
    return (
        <div>
            {title()}
            <br/>
            {contents()}
        </div>
    )
}

export default Home;