
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getSingleProject,
        addNewTaskToProject,
        markProjectAsCompleted,
        markTaskAsCompleted } from './../actions/actionCreators';
import NewTaskForm from './secondary/NewTaskForm';
import SingleProjectTasksList from './secondary/SingleProjectTasksList';
import InvalidFeedback from './secondary/InvalidFeedback';

class SingleProject extends Component {

  constructor (props) {
    super(props);

    // REACT state will only handle input fields errors
    this.state = {
      errors: []
    };

    // preserve the value of this
    this.handleAddNewTask = this.handleAddNewTask.bind(this);
    this.handleMarkTaskAsCompleted = this.handleMarkTaskAsCompleted.bind(this);
    this.redirectHome = this.redirectHome.bind(this);
    this.handleError = this.handleError.bind(this);

  }

  /*********************/
  /* LIFECYCLE METHODS */
  /*********************/

  componentWillMount() {

    const projectId = this.props.match.params.id;

    this.props.getSingleProject(projectId);

  }

  /***********************/
  /* COMPONENT FUNCTIONS */
  /***********************/

  handleAddNewTask(task) {

    //function(newTaskFromTheApi, successHandler, errorHandler)
    this.props.addNewTaskToProject(task,()=>{}, this.handleError);

  }

  handleMarkProjectAsCompleted(projectId) {

    const { history } = this.props

    this.props.markProjectAsCompleted(projectId, this.redirectHome);

  }

  handleMarkTaskAsCompleted(taskId) {

    this.props.markTaskAsCompleted(taskId);

  }

  redirectHome() {

      console.log('succesfully marked project completion, back to projectsList');

      this.props.history.push('/');

  }

  handleError(error) {

    this.setState({ errors: error.response.data.errors });

  }

  /*****************/
  /* RENDER METHOD */
  /*****************/

  render() {

    const { workingProject } = this.props

    console.log('workingProject', workingProject);

    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card'>

              <div className='card-header'>{workingProject.name}</div>

              <div className='card-body'>

                <p>{workingProject.description}</p>

                <button
                  className='btn btn-primary btn-sm'
                  onClick={this.handleMarkProjectAsCompleted.bind(this, workingProject.id)}
                >
                  Mark as completed
                </button>

                <hr />

                <NewTaskForm
                manageSubmit={this.handleAddNewTask}
                projectId={workingProject.id}
                errors={this.state.errors}
                />


                <SingleProjectTasksList
                onTaskCompletion={this.handleMarkTaskAsCompleted}
                tasks={workingProject.tasks}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


//ReduxState -> extract {singleProjectReducer} -> props.workingProject
function mapStateToProps({singleProjectReducer}) {

  return { workingProject: singleProjectReducer.workingProject };

}

//This component connects to reduxStore
  // -> provides workingProject from Store via mapStateToProps
  // ->  project and tasks functions to props via mapDispatchToProps
export default connect(
                        mapStateToProps,
                        { getSingleProject,
                          addNewTaskToProject,
                          markProjectAsCompleted,
                          markTaskAsCompleted }
                        )(SingleProject);
