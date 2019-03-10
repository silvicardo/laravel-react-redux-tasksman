import { GET_SINGLE_PROJECT,
         ADD_PROJECT_TASK,
         PROJECT_TASK_COMPLETED} from './../actions/actionCreators';

 const initialState = {
     //workingProject for SingleProjectComponent
     workingProject: {
       id: 1,
       name: '',
       tasks: [],
       description: ''
     }
 }

const singleProjectReducer = (state=initialState, action) => {

  switch (action.type){

    case GET_SINGLE_PROJECT:
              //{...a copy of the state, singleProject from api }
              return {...state, workingProject: {...action.project}}

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

    default: return state;

  }

}

export default singleProjectReducer;
