import {
    FETCH_PROJECTS_REQUEST,
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_FAILURE
} from '../actions/Types';

const initProjectState = {
    isFetchingProjects: false,
    fetchProjectsError: false,
    fetchedProjects: false,
    projects: [],
};

const projectsReducer = (state = initProjectState, action) => {
    switch (action.type) {
        /*
            On each parsed action request type, the reducer will return the
            new modified state. The spread operator '...' will return the insides of the old
            state which we then append our corresponding changed state values to. Altogether returning
            a new state object. 
        */
        case FETCH_PROJECTS_FAILURE:
            return {
                ...state,
                isFetchingProjects: false,
                fetchProjectsError: true,
            };
        case FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                isFetchingProjects: false,
                fetchedProjects: true,
                projects: action.projects
            };
        case FETCH_PROJECTS_REQUEST:
            return {
                ...state,
                isFetchingProjects: true,
                fetchProjectsError: false,
            }
        default:
            return state;
    }
};

export default projectsReducer;