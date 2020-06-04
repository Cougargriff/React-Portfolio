/*
    src/components/Projects.js
*/

import React from 'react';
import Async from 'react-async';
import colors from '../res/lang_colors.json'
import styled from 'styled-components';



import './Projects.css';

const REPO_URL = "https://api.github.com/users/cougargriff/starred";
const GRAPHQL_URL = 'https://api.github.com/graphql';

/* graphql query for pinned repos */
const GET_PINNED_REPOS = `
{
    user(login: "cougargriff") 
    {
        pinnedItems(first: 6, types: REPOSITORY) 
        {
            nodes 
            {
                ... on Repository 
                {
                    name
                    description
                    createdAt
                    url
                    languages(first:5) 
                    {
                        nodes
                        {
                            name
                        }
                    }

                }
            }
        }
    }
}
`


// CREDIT! ------> https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)#stackoverflow-archive-begin
// MANY THANKS. My buttons look hella pro now
function shadeHexColor(color, percent) {
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    
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

const ProjectCard = styled.div`
    padding: 20px;
    width: 250px;
`

const MultipleLangContainer = styled.div`
  display: block;
`

const SingleLangContainer = styled.div`
  display: contents;
`
const TitleContainer = styled.h3`
  height: 60px;
`
const DescriptionContainer = styled.a`
  height: 30px;
  display: block;
`

const LangTitle = styled.a`
  display: inline-block;
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
    console.log(process.env.ACCESS_TOKEN)
    return fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: {
            Authorization: `bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
            query: GET_PINNED_REPOS
        })
    }).then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
}

function languageDot(lang) {
    return (
        <span className="dot" style={{
            backgroundColor: colors[lang].color}}>   
        </span>
    )
}

function getLangs(langs) {
    var res = [];
    langs.map(lang => {
        res.push(lang.name)
    })
    return res;
}

function languages(langs) {
    if(langs.length > 1) {
        return (
            <MultipleLangContainer>
                {langs.map(lang => {

                    return (
                        <LangTitle>
                            {languageDot(lang)}
                            &ensp;
                            <span className="contents">
                                {lang}
                            </span>
                            &ensp;
                        </LangTitle>

                )})}
            </MultipleLangContainer>
        )
    }
    else {
        return (
            <SingleLangContainer>
                {langs.map(lang => {

                    return (
                        <a>
                            {languageDot(lang)}
                            &ensp;
                            <span className="contents">
                                {lang}
                            </span>
                            &ensp;
                        </a>

                )})}
            </SingleLangContainer>
        )
        
    }
    
}

function formatProjectElements(data) {
    const res = data.data.user.pinnedItems.nodes;
    return (
        <CardContainer>
            {res.map(repo => {
                const langs = getLangs(repo.languages.nodes);
                const langFirst = repo.languages.nodes[0].name;
                return (
                    <ProjectCard key={repo.name}>
                        <div>
                            <TitleContainer className="contents">
                                {repo.name}&ensp;
                                {languages(langs)}
                            </TitleContainer>
                        </div>
                        <DescriptionContainer className="contents">
                            {repo.description}
                        </DescriptionContainer>
                        <br/><br/>
                        <Button  
                        href={repo.html_url}
                        color={shadeHexColor(colors[langFirst].color, 0)}>
                            Check it out!
                        </Button>
                        <br/><br/>
                    </ProjectCard>
            )})}
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