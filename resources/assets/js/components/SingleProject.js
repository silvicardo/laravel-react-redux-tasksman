import axios from 'axios';
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getSingleProject,
        addNewTaskToProject,
        markProjectAsCompleted,
        markTaskAsCompleted } from './../actions/actionCreators'
import NewTaskForm from './secondary/NewTaskForm'
import SingleProjectTasksList from './secondary/SingleProjectTasksList'
import InvalidFeedback from './secondary/InvalidFeedback'

class SingleProject extends Component {

  constructor (props) {
    super(props)

    this.state = {
      errors: []
    }

    this.handleAddNewTask = this.handleAddNewTask.bind(this)

    this.handleMarkTaskAsCompleted = this.handleMarkTaskAsCompleted.bind(this)

  }

  componentWillMount() {

    const projectId = this.props.match.params.id

    this.props.getSingleProject(projectId)

  }

  handleAddNewTask(task) {

    this.props.addNewTaskToProject(
      task,
      ()=>{}, //success handler
      (error) => {//fail handler
        this.setState({
          errors: error.response.data.errors
        })
      }
    )

  }

  handleMarkProjectAsCompleted (projectId) {
    const { history } = this.props

  this.props.markProjectAsCompleted(
    projectId,
    ()=> { history.push('/') } //success handler
    )
  }

  handleMarkTaskAsCompleted(taskId) {

    this.props.markTaskAsCompleted(taskId)
  }

  render () {
    const { project} = this.props
    console.log('project',project);

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
                  onClick={this.handleMarkProjectAsCompleted.bind(this, project.id)}
                >
                  Mark as completed
                </button>

                <hr />

                <NewTaskForm
                manageSubmit={this.handleAddNewTask}
                projectId={project.id}
                errors={this.state.errors}
                />


                <SingleProjectTasksList
                onTaskCompletion={this.handleMarkTaskAsCompleted}
                tasks={project.tasks}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(reduxState){
  return {
    project: reduxState.workingProject
  }
}

export default connect(
                        mapStateToProps,
                        { getSingleProject,
                          addNewTaskToProject,
                          markProjectAsCompleted,
                          markTaskAsCompleted }
                        )(SingleProject)
