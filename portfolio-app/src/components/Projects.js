/*
    src/components/Projects.js
*/

import React, { Component } from 'react';
import colors from '../res/lang_colors.json'
import styled from 'styled-components';
import { connect } from "react-redux";
import './Projects.css';
import { fetchProjects } from '../store/actions/ProjectActions';
import commitLogo from '../res/commit.png';
import contributorsLogo from '../res/people.png';

/* graphql query for pinned repos 

const GRAPHQL_URL = 'https://api.github.com/graphql';
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
*/

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
      cursor: pointer;
    background-color: white;
    color: ${props => props.color};
  }
`

const ProjectCard = styled.div`
    &:hover {
        -webkit-box-shadow: 0px 1px 35px -14px rgba(0,0,0,0.4);
        -moz-box-shadow: 0px 1px 35px -14px rgba(0,0,0,0.4);
        box-shadow: 0px 1px 35px -14px rgba(0,0,0,0.4);
    }
    transition-duration: 0.4s;
    border-radius: 8px;
    padding: 20px;
    width: 350px;
`

const MultipleLangContainer = styled.div`
  display: block;
`

const SingleLangContainer = styled.div`
  display: contents;
`
const TitleContainer = styled.h3`
  height: 40px;
`
const DescriptionContainer = styled.a`
  height: 30px;
  display: block;
  opacity: 90%;
`

const LangTitle = styled.a`
  display: inline-block;
`
const Container = styled.div`
    display: inline-flex;
    opacity: 70%;
`

const CommitLogo = styled.img`
    align-self: end;
`

const PeopleLogo = styled.img`
    align-self: end;
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
                        <LangTitle key={lang}>
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
                        <a key={lang}>
                            {languageDot(lang)}
                            &ensp;
                            <span key={lang} className="contents">
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
    return (
        <CardContainer>
            {data.map(repo => {
                const langs = repo.languages;
                return (
                    <ProjectCard key={repo.name}>
                        
                        <TitleContainer className="contents">
                            {repo.name}&ensp;
                            {languages(langs)}
                        </TitleContainer>
                        <Container>
                            <CommitLogo src={commitLogo}/> &ensp; {repo.commits} &ensp; &ensp;
                            <PeopleLogo src={contributorsLogo}/>  &ensp; {repo.contributor_count}
                        </Container>
                        
                        <DescriptionContainer className="contents">
                            {repo.description}
                        </DescriptionContainer>
                        <br/><br/>
                        
                        <Button  
                        href={repo.link}
                        color={shadeHexColor(colors[repo.languages[0]].color, 0)}>
                            Check it out!
                        </Button>
                        <br/><br/>
                    </ProjectCard>
            )})}
        </CardContainer>
    )
}



class Projects extends Component {
    componentDidMount() {
        this.loadRepos();
    }

    loadRepos = () => {

        const { dispatch } = this.props;
        dispatch(fetchProjects());
    }

    cards = () => {
        if(!this.props.fetchedProjects) {
            return (
                <div>
                    <h4>
                        Loading Repos...
                    </h4>
                </div>
            )
        }
        else {
            return (
                <div>
                    {formatProjectElements(this.props.projects)}
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {title()}
                {this.cards()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isFetchingProjects: state.ProjectReducer.isFetchingProjects,
        fetchedProjects: state.ProjectReducer.fetchedProjects,
        projects: state.ProjectReducer.projects,
    }
}


export default connect(mapStateToProps)(Projects);