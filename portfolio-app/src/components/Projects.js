/*
    src/components/Projects.js
*/

import React from 'react';
import { Box, Button, Link, Card, Flex } from 'rebass'
import Async from 'react-async';
import colors from '../res/lang_colors.json'

import './Projects.css';

const REPO_URL = "https://api.github.com/users/cougargriff/starred"

// CREDIT! ------> https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)#stackoverflow-archive-begin
// MANY THANKS. My buttons look hella pro now
function shadeHexColor(color, percent) {
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

function title() {
    return (
        <h1 className="headers">
                My Projects
        </h1>
    )
}

function content() {
    return (
    <a className="contents">
                Here lies my pinned respositories pulled from Github
    </a>
    )
}

function loadRepos() {
    return fetch(REPO_URL)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
}

function cards() {
    return (
        <Async promiseFn={loadRepos}>
            <Async.Loading> Loading Repos...</Async.Loading>
            <Async.Fulfilled>
                {data => {
                    return (
                            <Box
                            sx={{
                            gridGap: 4,
                            gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
                            }}>
                                {data.map(repo => (
                                    <div width={256} key={repo.name}>
                                        <div>
                                            <h3 className="contents">
                                                {repo.name}&ensp;
                                                <span className="dot" style={{
                                                backgroundColor: colors[repo.language].color
                                            }}>   
                                            </span>
                                            &ensp;-&ensp;
                                            <span className="contents">{repo.language}</span>
                                            </h3>
                                            
                                        </div>
                                        
                                        <a className="contents">
                                            {repo.description}
                                        </a>
                                        <br/><br/>
                                        <Link href={repo.html_url}>
                                        <Button variant='primary' mr={2}sx={{
                                            backgroundColor: colors[repo.language].color,
                                            ':hover': {
                                            backgroundColor: shadeHexColor(colors[repo.language].color, 0.5),}
                                            }}>Check it out!</Button>
                                        </Link>
                                        <br/><br/>
                                    </div>
                                ))}
                            </Box>
                       
                    )
                }}
            </Async.Fulfilled>
            <Async.Rejected>
                {console.log("rejected")}
            </Async.Rejected>
        </Async>
    )
}

function Projects(props) {
    return (
        <div>
            {title()}
            {content()}
            {cards()}
        </div>
    )
}

export default Projects;