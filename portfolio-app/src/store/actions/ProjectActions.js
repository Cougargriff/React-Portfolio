import {
    FETCH_PROJECTS_REQUEST,
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_FAILURE
} from './Types';

/*
    Action types for reducers to ... reduce
*/
const requestProjects = () => {
    return {
        type: FETCH_PROJECTS_REQUEST,
    };
};

const receiveProjects = (projects) => {
    return {
        type: FETCH_PROJECTS_SUCCESS,
        projects
    };
};

const projectsError = () => {
    return {
        type: FETCH_PROJECTS_FAILURE,
    };
};

const REPO_URL = "https://api.github.com/users/cougargriff/starred"

/* 
    Action creator function to call from component class
    to dispatch recieved projects action after async api call.
*/
export const fetchProjects = () => (dispatch) => {
    dispatch(requestProjects());
    fetch(REPO_URL)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
    .then(res => {
        const projects = [];
        res.map(repo => {
            const prj = {
                name: repo.name,
                language: repo.language,
                description: repo.description,
                link: repo.html_url
            };
            projects.push(prj);
        })
        dispatch(receiveProjects(projects));
    })
    .catch((error) => {
        dispatch(projectsError());
    });
};