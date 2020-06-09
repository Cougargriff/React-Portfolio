/*
    src/components/Projects.js
*/
import React, { Component } from 'react';
import colors from '../res/lang_colors.json'
import styled from 'styled-components';
import { connect } from "react-redux";
import ColorButton from "./ColorButton";
import { fetchProjects } from '../store/actions/ProjectActions';

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    
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
  height: 60px;
`
const DescriptionContainer = styled.a`
  height: 30px;
  display: block;
`

const LangTitle = styled.a`
  display: inline-block;
`
const Dot = styled.span`
    background-color: ${props => props.color};
    height: 15px;
    width: 15px;
    border-radius: 50%;
    display: inline-block;
`
function title() {
    return (
        <h1 className="headers">
                My Projects
        </h1>
    )
}

function languageDot(lang) {
    return (
        <Dot color={colors[lang].color}/>
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
                        <ColorButton  
                        href={repo.link}
                        color={colors[repo.languages[0]].color}
                        text='Check it out!'/>
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
                    <h4 className="contents">
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