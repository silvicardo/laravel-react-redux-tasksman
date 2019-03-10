import { combineReducers } from 'redux';
import projectsListReducer from './projectsListReducer';
import singleProjectReducer from './singleProjectReducer';

//combining reducers to let them handle projects and singleProject separately
const rootReducer = combineReducers({ projectsListReducer, singleProjectReducer });

export default rootReducer;
