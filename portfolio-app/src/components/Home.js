/*
    src/components/Home.js
*/

import React from 'react';

function contents() {
    return (
        <a className="contents">
                My name is Griffin Johnson. I am a passionate Software Engineer driven to aquire a full time position. 
                I pride myself on my ability to seek out new and interesting learning oppurtunites.
        <br/><br/><br/>
        TODO -->
        <br/>
        Profile image, contact info, contact button?, margins, pictures?
        </a>
    )
}

function title() {
    return (
        <h1 className="headers">
                Griffin Johnson
        </h1>
    )
}

function Home(props) {
    return (
        <div>
            {title()}
            {contents()}
        </div>
    )
}

export default Home;