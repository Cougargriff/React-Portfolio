/*
    src/components/Projects.js
*/

import React from 'react';
import Async from 'react-async';
import colors from '../res/lang_colors.json'
import styled from 'styled-components';


import './Projects.css';

const REPO_URL = "https://api.github.com/users/cougargriff/starred"

// CREDIT! ------> https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)#stackoverflow-archive-begin
// MANY THANKS. My buttons look hella pro now
function shadeHexColor(color, percent) {
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

const CardContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
justify-items: center;
align-items: center;

@media (max-width: 2500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

@media (max-width: 1800px) {
    grid-template-columns: 1fr 1fr 1fr;
}

@media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
}

@media (max-width: 850px) {
    grid-template-columns: 1fr;
}
`

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0.5rem;
  margin: 0.5rem 1rem;
  background: transparent;
  background-color: #A3D9FF;
  color: white;
  border: 2px solid ${props => shadeHexColor(props.color, 0.3)};
  text-decoration: none;
  background-color: ${props => shadeHexColor(props.color, 0.3)};
  transition-duration: 0.4s;

  &:hover {
    background-color: white;
    color: ${props => props.color};
  }
`



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
                Here lies my pinned respositories pulled live from github :)
    </a>
    )
}

function loadRepos() {
    return fetch(REPO_URL)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
}

function languageDot(lang) {
    return (
        <span className="dot" style={{
            backgroundColor: colors[lang].color}}>   
        </span>
    )
}

function formatProjectElements(data) {
    return (
        <CardContainer>
            {data.map(repo => (
                <div width="256px" key={repo.name}>
                    <div>
                        <h3 className="contents">
                            {repo.name}&ensp;
                            {languageDot(repo.language)}
                        &ensp;
                        <span className="contents">{repo.language}</span>
                        </h3>
                    </div>
                    <a className="contents">
                        {repo.description}
                    </a>
                    <br/><br/>
                    <Button  
                    href={repo.html_url}
                    color={shadeHexColor(colors[repo.language].color, 0)}
                    >
                        Check it out!
                    </Button>
                    <br/><br/>
                </div>
            ))}
        </CardContainer>
    )
}

function cards() {
    return (
        <Async promiseFn={loadRepos}>
            <Async.Loading>Loading Repos...</Async.Loading>
            <Async.Fulfilled>
                {data => {
                    return (
                        formatProjectElements(data)
                    )}}
            </Async.Fulfilled>
            <Async.Rejected>
            </Async.Rejected>
        </Async>
    )
}

function Projects(props) {
    return (
        <div>
            {title()}
            {cards()}
        </div>
    )
}

export default Projects;