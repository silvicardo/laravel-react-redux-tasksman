import axios from 'axios';
import React, { Component } from 'react';
import NewProjectForm from './secondary/NewProjectForm';
import {connect} from 'react-redux';
import {addProject} from './../actions/actionCreators';

class NewProject extends Component {

  constructor (props) {
    super(props);

    // REACT state will only handle input fields errors
    this.state = {
      errors: []
    };

    //  preserve the value of this
    this.handleCreateNewProject = this.handleCreateNewProject.bind(this);
    this.redirectHome = this.redirectHome.bind(this);
    this.handleError = this.handleError.bind(this);

  }

  /***********************/
  /* COMPONENT FUNCTIONS */
  /***********************/

  handleCreateNewProject(project) {

    //function(newProjectFromTheApi, successHandler, errorHandler)
    this.props.addProject(project,this.redirectHome, this.handleError);

  }

  redirectHome() {

      console.log('succesfully saved project, back to projectsList');

      this.props.history.push('/');
  }

  handleError(error) {

    console.log(error);

    this.setState({ errors: error.response.data.errors });
  }

  /*****************/
  /* RENDER METHOD */
  /*****************/

  render() {

    const {errors} = this.state;

    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>

            <div className='card'>

              <div className='card-header'>
                Create new project
              </div>

              <div className='card-body'>
                <NewProjectForm
                errors={errors}
                manageSubmit={this.handleCreateNewProject}
                 />
              </div>

            </div>

          </div>
        </div>
      </div>
    )
  }
}
//This component connects to Redux Store
// -> Nothing to import from Redux Store to props
// -> bringing in addProject from actionCreators (mapDispatchToProps)
export default connect(null, { addProject })(NewProject);
