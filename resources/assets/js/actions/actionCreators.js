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
function addProjectAction(project){
  return {
    type: ADD_PROJECT,
    project //project: project
  }
}

function getSingleProjectAction(project){
  return {
    type: GET_SINGLE_PROJECT,
    project
  }
}

function projectIsCompletedAction(projectId){
  return {
    type: PROJECT_COMPLETED,
    projectId
  }
}

function addTaskToProjectAction(task){
  return {
    type: ADD_PROJECT_TASK,
    task
  }
}

function projectTaskIsCompletedAction(taskId){
  return {
    type: PROJECT_TASK_COMPLETED,
    taskId
  }
}

//THUNKS

export function getProjects(){
  return dispatch => {
    return axios.get('/api/projects')
    .then(response => {
      dispatch(getProjectsAction(response.data))
    })
  }
}

export function addProject(project, success, fail){
  return dispatch => {
    return axios.post('/api/projects', project)
      .then(response => {
        dispatch(addProjectAction(project))
        success()
      })
      .catch(error => {
        fail(error)
      })
    }
}

export function getSingleProject(projectId){
  return dispatch => {
    return axios.get(`/api/projects/${projectId}`)
    .then(response => {
      console.log(response.data);
      dispatch(getSingleProjectAction(response.data))
    })
    .catch(err=>{
      console.log('error', err);
    })
  }
}

export function markProjectAsCompleted(projectId, success){
    return dispatch => {
      return axios.put(`/api/projects/${projectId}`)
          .then(response => {
            dispatch(projectIsCompletedAction(projectId))
            success()
          })
       }
}

export function addNewTaskToProject(task, success, fail){
  return dispatch => {
    return axios.post('/api/tasks', task)
        .then(response => {

          console.log('data after add',response.data);

          // add new task to list of tasks
          dispatch(addTaskToProjectAction(response.data))

          success()
        })
        .catch(error => {
          fail(error)

        })
      }
}

export function markTaskAsCompleted(taskId){
  return dispatch => {
    return axios.put(`/api/tasks/${taskId}`)
    .then(response => {
        dispatch(projectTaskIsCompletedAction(taskId))
      })
    }
}
