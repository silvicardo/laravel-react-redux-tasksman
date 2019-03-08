import axios from 'axios'
import React, { Component } from 'react'
import NewProjectForm from './secondary/NewProjectForm'
import {connect} from 'react-redux'
import {addProject} from './../actions/actionCreators'

class NewProject extends Component {
  constructor (props) {
    super(props)

    this.state = {
      errors: []
    }

    this.handleCreateNewProject = this.handleCreateNewProject.bind(this)

  }

  handleCreateNewProject (project) {

    this.props.addProject(project,
    ()=>{//success callback
      // redirect to the homepage
    this.props.history.push('/')},
    (error)=>{
      console.log(error);
      this.setState({
        errors: error.response.data.errors
      })

    })
  // )
  //   axios
  //     .post('/api/projects', project)
  //     .then(response => {
  //       // redirect to the homepage
  //       this.props.history.push('/')
  //     })
  //     .catch(error => {
  //       this.setState({
  //         errors: error.response.data.errors
  //       })
  //     })
  }

  render () {

    const {errors} = this.state;

    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header'>Create new project</div>

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

export default connect(null, { addProject })(NewProject)
