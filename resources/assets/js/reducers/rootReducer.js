 import { GET_PROJECTS ,
          ADD_PROJECT,
          GET_SINGLE_PROJECT,
          PROJECT_COMPLETED,
          ADD_PROJECT_TASK,
          PROJECT_TASK_COMPLETED} from './../actions/actionCreators'

const initialState = {
  //projects array for ProjectsList and NewProject components
    projects: [],
    //workingProject for SingleProjectComponent
    workingProject :{
      id: 1,
      name: '',
      tasks: [],
      description: ''
    }
}

export default function rootReducer(state=initialState, action){

  switch (action.type){

    case GET_PROJECTS:
              //{...a copy of the state, allProjects from api}
              return {...state, projects: action.projects };

    case ADD_PROJECT:
              //{...a copy of the state, allprojects in state + project from NewProject-> NewProjectForm component}
              return {...state, projects: [...state.projects, action.project]} ;

    case GET_SINGLE_PROJECT:
              //{...a copy of the state, singleProject from api }
              return {...state, workingProject: {...action.project}}

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

     case ADD_PROJECT_TASK:
              //make a copy of the state in Redux store
              var prevState = {...state}
              //return {... a copy of the state, where workingProject is a copy of the prevState->workingProject Object
              // where tasks array is [...a copy of workingProject tasks + new task from the action(coming from SingleProject->NewTaaskForm)]}
              return {...state, workingProject: {...prevState.workingProject, tasks: [...prevState.workingProject.tasks, action.task]} }

    case PROJECT_TASK_COMPLETED:
              //make a copy of the state in Redux store
              var prevState = {...state}
              //make a copy of the inner workingProject Object
              var workingProject = {...prevState.workingProject};
              //filter a copy of the workingProject->tasks array
              var updatedTasks = [...workingProject.tasks].filter((task)=> (
                //get  a new Array with all tasks expect the one
                //with the completed id from the action
                task.id !== action.taskId
              ))
              //return {... a copy of the state, the copy of workingProject, where taks is udatedTasks array}
              return {...state, workingProject: {...workingProject, tasks: updatedTasks}}

    default: return state

  }
}
