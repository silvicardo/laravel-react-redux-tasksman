 import { GET_PROJECTS , 
          ADD_PROJECT,
          GET_SINGLE_PROJECT,
          PROJECT_COMPLETED,
          ADD_PROJECT_TASK,
          PROJECT_TASK_COMPLETED} from './../actions/actionCreators'

const initialState = {
  projects: [],
  workingProject :{
    id: 1,
    name: '',
    tasks: [],
    description: ''
  }
}

export default function rootReducer(state=initialState, action){

  switch (action.type){

    case GET_PROJECTS: return {...state, projects: action.projects };

    case ADD_PROJECT: return {...state, projects: [...state.projects, action.project]} ;

    case GET_SINGLE_PROJECT: return {...state, workingProject: {...action.project}}

    case PROJECT_COMPLETED: var prevState = {...state}
                            var updatedProjects = [...prevState.projects].filter((project) => (
                              project.id !== action.projectId
                            ));
                            return {...state, projects: updatedProjects}

     case ADD_PROJECT_TASK: var prevState = {...state}

                            return {...state, workingProject: {...prevState.workingProject, tasks: [...prevState.workingProject.tasks, action.task]} }

    case PROJECT_TASK_COMPLETED:  var prevState = {...state}

                                  var workingProject = {...prevState.workingProject};

                                  var updatedTasks = [...workingProject.tasks].filter((task)=> (
                                    task.id !== action.taskId
                                  ))

                                  return {...state, workingProject: {...workingProject, tasks: updatedTasks}}

    default: return state

  }
}
