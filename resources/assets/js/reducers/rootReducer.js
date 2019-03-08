 import {GET_PROJECTS , ADD_PROJECT,  GET_SINGLE_PROJECT, /*
 PROJECT_COMPLETED,  ADD_PROJECT_TASK,  PROJECT_TASK_COMPLETED*/} from './../actions/actionCreators'

const initialState = {
  projects: [],
  workingProject: {id: 0, title: '', tasks: []},
}

export default function rootReducer(state=initialState, action){

  switch (action.type){

    case GET_PROJECTS: return {...state, projects: action.projects };
    case ADD_PROJECT: return {...state, projects: [...state.projects, action.project]} ;
    case GET_SINGLE_PROJECT: return {...state, workingProject: action.project };
    // case PROJECT_COMPLETED: return state;
    // case ADD_PROJECT_TASK: return state;
    //case PROJECT_TASK_COMPLETED: return state;


    default: return state

  }
}
