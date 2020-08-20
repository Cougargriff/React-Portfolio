import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE
} from "./Types";

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
    projects,
  };
};

const projectsError = () => {
  return {
    type: FETCH_PROJECTS_FAILURE,
  };
};


const PROJECTS_URL = "https://api.github.com/users/cougargriff/starred";

/* 
    Action creator function to call from component class
    to dispatch recieved projects action after async api call.
*/
export const fetchProjects = () => async (dispatch) => {
  dispatch(requestProjects());
  try {
    let projects = await getMetaData(await getProjects([]));
    dispatch(receiveProjects(projects));
  } catch (error) {
    console.log("Caught error while fetching projects:\n",error)
    dispatch(projectsError())
  }
  
};

const getMetaData = async (projects) => {
  await getLangs(projects);
  await getCommits(projects);
  return projects;
};

const getProjects = async (projects) => {
  return fetch(PROJECTS_URL)
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json())
    .then((res) => {
      res.map((repo) => {
        projects.push({
          name: repo.name,
          langs: [repo.language],
          description: repo.description,
          link: repo.html_url,
          api_url: repo.url,
        });
      });
      return Promise.resolve(projects);
    })
    .catch((error) => {});
};

const getCommits = async (projects) => {
  return Promise.all(
    projects.map(async (prj) => await grabPrjCommits(prj))
  );
};

const getLangs = async (projects) => {
  return Promise.all(
    projects.map(async (prj) => await grabPrjLangs(prj))
  );
};

const grabPrjCommits = async (prj) => {
  return fetch(prj.api_url + "/stats/contributors")
        .then((res) => (res.ok ? res : Promise.reject(res)))
        .then((res) => res.json())
        .then((res) => {
          let commit_count = 0;
          let contributor_count = 0;
          res.map((contributor) => {
            commit_count += contributor.total;
            contributor_count += 1;
          });
          prj.contributor_count = contributor_count;
          prj.commits = commit_count;
          return Promise.resolve(prj);
        })
        .catch((error) => {
          console.log(error + " gettting committs")
        });
}

const grabPrjLangs = async (prj) => {
  return fetch(prj.api_url + "/languages")
        .then((res) => (res.ok ? res : Promise.reject(res)))
        .then((res) => res.json())
        .then((res) => {
          prj.langs = Object.keys(res);
          return Promise.resolve(prj);
        })
        .catch((error) => {});
}
