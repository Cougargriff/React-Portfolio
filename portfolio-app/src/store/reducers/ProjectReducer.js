import {
    FETCH_PROJECTS_REQUEST,
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_FAILURE,
    LOAD_PROJECT_COMMITS_REQUEST,
    LOAD_PROJECT_COMMITS_SUCCESS,
    LOAD_PROJECT_COMMITS_FAILURE,
    LOAD_PROJECT_LANGS_REQUEST,
    LOAD_PROJECT_LANGS_SUCCESS,
    LOAD_PROJECT_LANGS_FAILURE,
} from '../actions/Types';

const initProjectState = {
    isFetchingProjects: false,
    isLoadingProjectCommits: false,
    loadProjectCommitsError: false,
    isLoadingProjectLangs: false,
    loadProjectLangsError: false,
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
            };
        case LOAD_PROJECT_COMMITS_REQUEST:
            return {
                ...state,
                isLoadingProjectCommits: true,
                loadProjectCommitsError: false,
            };
        case LOAD_PROJECT_COMMITS_SUCCESS:
            /*
                Update project's commit count at position index
            */
            const COMMITS_PROJECTS = [...state.projects];
            COMMITS_PROJECTS[action.index].commits = action.commit_count;
            COMMITS_PROJECTS[action.index].contributor_count = action.contributor_count;
            return {
                ...state,
                isLoadingProjectCommits: false,
                projects: COMMITS_PROJECTS, 
            };
        case LOAD_PROJECT_COMMITS_FAILURE:
            return {
                ...state,
                isLoadingProjectCommits: false,
                loadProjectCommitsError: true,
            };
        case LOAD_PROJECT_LANGS_REQUEST:
            return {
                ...state,
                isLoadingProjectLangs: true,
                loadProjectLangsError: false,
            };
        case LOAD_PROJECT_LANGS_SUCCESS:
            /*
                Update project's langs at position index.
                **NOTE**
                Project language is obtained through first fetch
                projects request. Projects with more than one language
                are obtained through this action and subsequent api request.
            */
            const LANGS_PROJECTS = [...state.projects];
            LANGS_PROJECTS[action.index].languages = action.langs;
            return {
                ...state,
                isLoadingProjectLangs: false,
                projects: LANGS_PROJECTS, 
            };
        case LOAD_PROJECT_LANGS_FAILURE:
            return {
                ...state,
                isLoadingProjectLangs: false,
                loadProjectLangsError: true,
            };
        default:
            return state;
    }
};

export default projectsReducer;