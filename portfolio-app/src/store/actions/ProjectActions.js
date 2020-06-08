import {
    FETCH_PROJECTS_REQUEST,
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_FAILURE,
    LOAD_PROJECT_COMMITS_REQUEST,
    LOAD_PROJECT_COMMITS_SUCCESS,
    LOAD_PROJECT_COMMITS_FAILURE,
    LOAD_PROJECT_LANGS_REQUEST,
    LOAD_PROJECT_LANGS_SUCCESS,
    LOAD_PROJECT_LANGS_FAILURE
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

const projectCommitsError = (err) => {
    return {
        type: LOAD_PROJECT_COMMITS_FAILURE,
        err
    };
};

const recieveProjectCommits = (name, commit_count, index) => {
    return {
        type: LOAD_PROJECT_COMMITS_SUCCESS,
        name,
        commit_count,
        index
    };
};

const requestProjectCommits = (name) => {
    return {
        type: LOAD_PROJECT_COMMITS_REQUEST,
        name
    };
};

const projectLangsError = (err) => {
    return {
        type: LOAD_PROJECT_LANGS_FAILURE,
        err
    };
};

const recieveProjectLangs = (name, langs, index) => {
    return {
        type: LOAD_PROJECT_LANGS_SUCCESS,
        name,
        langs,
        index
    };
};

const requestProjectLangs = (name) => {
    return {
        type: LOAD_PROJECT_LANGS_REQUEST,
        name
    };
};




const PROJECTS_URL = "https://api.github.com/users/cougargriff/starred"

/* 
    Action creator function to call from component class
    to dispatch recieved projects action after async api call.
*/
export const fetchProjects = () => (dispatch) => {
    dispatch(requestProjects());
    fetch(PROJECTS_URL)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
    .then(res => {
        const projects = [];
        res.map(repo => {
            projects.push({
                name: repo.name,
                languages: [repo.language],
                description: repo.description,
                link: repo.html_url,
                api_url: repo.url
            });
        })
        /* 
            need to dispatch finishedLoadingProjects after 
            getting commit and lang data for individual projects
        */
        dispatch(receiveProjects(projects));
        dispatch(getProjectCommits(projects));
        dispatch(getProjectLangs(projects));
    })
    .catch((error) => {
        dispatch(projectsError());
    });
};

const getProjectCommits = (projects) => (dispatch) => {
    projects.map((prj, index) => {
        dispatch(requestProjectCommits(prj.name));
        fetch(prj.api_url + "/stats/contributors")
            .then(res => (res.ok ? res : Promise.reject(res)))
            .then(res => res.json())
            .then(res => {
                let commit_count = 0;
                res.map(contributor => {
                    commit_count += contributor.total;
                })
                dispatch(recieveProjectCommits(prj.name, commit_count, index));
            })
            .catch((error) => {
                dispatch(projectCommitsError(error));
            });
        
        
    });
};

const getProjectLangs = (projects) => (dispatch) => {
    projects.map((prj, index) => {
        dispatch(requestProjectLangs(prj.name));
        fetch(prj.api_url + "/languages")
            .then(res => (res.ok ? res : Promise.reject(res)))
            .then(res => res.json())
            .then(res => {
                dispatch(recieveProjectLangs(prj.name, Object.keys(res), index))
            })
            .catch((error) => {
                dispatch(projectLangsError(error));
            })
    })
}
