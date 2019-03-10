import { GET_PROJECTS, PROJECT_COMPLETED, ADD_PROJECT } from './../actions/actionCreators';

const initialState = {
  //projects array for ProjectsList and NewProject components
    projects: [],
}

const projectsListReducer = (state=initialState, action) => {

  switch (action.type){

    case GET_PROJECTS:
              //{...a copy of the state, allProjects from api}
              return {...state, projects: action.projects };

    case PROJECT_COMPLETED:
              //make a copy of the state in Redux store
              var prevState = {...state}
              //from a non-referenced copy of projects array
              var updatedProjects = [...prevState.projects].filter((project) => (
                //get a new Array with all projects except the one
                //with the completed id from the action
                project.id !== action.projectId
              ));
              //return {... a copy of the state, where projects -> updatedProjects}
              return {...state, projects: updatedProjects}

    case ADD_PROJECT:
              //{...a copy of the state, allprojects in state + project from NewProject-> NewProjectForm component}
              return {...state, projects: [...state.projects, action.project]} ;

    default: return state;

  }

}

export default projectsListReducer;
