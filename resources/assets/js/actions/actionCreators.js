import axios from 'axios'

//VARIABILI PER NOMI action.type
export const GET_PROJECTS = "GET_PROJECTS"
export const ADD_PROJECT = "ADD_PROJECT"
export const GET_SINGLE_PROJECT = "GET_SINGLE_PROJECT"
export const PROJECT_COMPLETED = "PROJECT_COMPLETED"
export const ADD_PROJECT_TASK = "ADD_PROJECT_TASK"
export const PROJECT_TASK_COMPLETED = "PROJECT_TASK_COMPLETED"

//ACTIONS

function getProjectsAction(projects){
  return {
    type: GET_PROJECTS,
    projects //projects: projects
  }
}

//PLACEHOLDERS ACTIONS
// function addProjectAction(project){
//   return {
//     type: ADD_PROJECTS,
//     project //project: project
//   }
// }
//
// function getSingleProjectAction(projectId){
//   return {
//     type: GET_SINGLE_PROJECT,
//     projectId
//   }
// }
//
// function projectIsCompletedAction(projectId){
//   return {
//     type: PROJECT_COMPLETED,
//     projectId
//   }
// }
//
// function addTaskToProjectAction(projectId, task){
//   return {
//     type: ADD_PROJECT_TASK,
//     projectId,
//     task
//   }
// }
//
// function projectTaskIsCompletedAction(projectId, taskId){
//   return {
//     type: PROJECT_TASK_COMPLETED,
//     projectId,
//     taskId
//   }
// }

//THUNKS

//testing get action

export function getProjects(){
  return dispatch => {
    return axios.get('/api/projects')
    .then(response => {
      dispatch(getProjectsAction(response.data))
    })
  }
}

//PLACEHOLDERS THUNKS
//
// export function addProject(project){
//   return dispatch => {
//     return
// }
//
// export function getSingleProject(projectId){
//   return dispatch => {
//     return
// }
//
// export function markTaskAsCompleted(projectId){
//   return dispatch => {
//     return
// }
//
// export function addNewTaskToProject(projectId, task){
//   return dispatch => {
//     return
// }
//
// export function markProjectAsCompleted(projectId){
//     return dispatch => {
//       return
// }
