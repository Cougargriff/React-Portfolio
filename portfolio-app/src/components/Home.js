/*
    src/components/Home.js
*/
import React from 'react';
import styled from 'styled-components';
import { Title } from './TextBox'

const HomeContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ObjectiveStatement = styled.h2`
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
        <HomeContainer>
            {title()}
            {contents()}
        </HomeContainer>
    )
}

export default Home;
