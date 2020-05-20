/*
    src/components/Projects.js
*/

import React from 'react';
import { Box, Button, Link, Card, Flex } from 'rebass'
import Async from 'react-async';

import './Projects.css';

const REPO_URL = "https://api.github.com/users/cougargriff/starred"

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
                                        <h3 className="contents">
                                            {repo.name}
                                        </h3>
                                        <a className="contents">
                                            {repo.description}
                                        </a>
                                        <br/><br/>
                                        <Link href={repo.html_url}>
                                        <Button variant='primary' mr={2}>Check it out!</Button>
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