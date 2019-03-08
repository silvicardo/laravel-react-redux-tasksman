import axios from 'axios';
import React, { Component } from 'react';
import NewTaskForm from './secondary/NewTaskForm'
import SingleProjectTasksList from './secondary/SingleProjectTasksList'
import InvalidFeedback from './secondary/InvalidFeedback'

class SingleProject extends Component {
  constructor (props) {
    super(props)

    this.state = {
      project: {},
      tasks: [],
      errors: []
    }

    this.handleAddNewTask = this.handleAddNewTask.bind(this)

    this.handleMarkTaskAsCompleted = this.handleMarkTaskAsCompleted.bind(
      this)
    this.handleMarkProjectAsCompleted = this.handleMarkProjectAsCompleted.bind(
      this
    )
  }

  componentDidMount () {
    const projectId = this.props.match.params.id

    axios.get(`/api/projects/${projectId}`).then(response => {
      this.setState({
        project: response.data,
        tasks: response.data.tasks
      })
    })
  }

  handleAddNewTask(task) {

    axios
      .post('/api/tasks', task)
      .then(response => {
        // add new task to list of tasks
        this.setState(prevState => ({
          tasks: [...prevState.tasks, response.data]
        }))
      })
      .catch(error => {
        this.setState({
          errors: error.response.data.errors
        })
      })
  }

  handleMarkProjectAsCompleted () {
    const { history } = this.props

    axios
      .put(`/api/projects/${this.state.project.id}`)
      .then(response => history.push('/'))
  }

  handleMarkTaskAsCompleted (taskId) {
    axios.put(`/api/tasks/${taskId}`).then(response => {
      this.setState(prevState => ({
        tasks: prevState.tasks.filter(task => {
          return task.id !== taskId
        })
      }))
    })
  }

  render () {
    const { project, tasks } = this.state

    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card'>
              <div className='card-header'>{project.name}</div>

              <div className='card-body'>
                <p>{project.description}</p>

                <button
                  className='btn btn-primary btn-sm'
                  onClick={this.handleMarkProjectAsCompleted}
                >
                  Mark as completed
                </button>

                <hr />

                <NewTaskForm
                manageSubmit={this.handleAddNewTask}
                projectId={this.state.project.id}
                errors={this.state.errors}
                />

                <SingleProjectTasksList
                onTaskCompletion={this.handleMarkTaskAsCompleted}
                tasks={tasks}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleProject
