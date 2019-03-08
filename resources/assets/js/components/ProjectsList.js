import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProjectsLinks from './secondary/ProjectLinks'
import {connect} from 'react-redux'
import {getProjects} from './../actions/actionCreators'

class ProjectsList extends Component {

  constructor (props) {
    super(props)

  }

  componentDidMount () {
    // axios.get('/api/projects').then(response => {
    //   this.setState({
    //     projects: response.data
    //   })
    // })
    this.props.getProjects()
  }

  render () {
    //con redux troviamo grazie
    //a mapStateToProps i projects in
    //props
    const { projects } = this.props

    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card'>
              <div className='card-header'>All projects</div>

              <div className='card-body'>
                <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                  Create new project
                </Link>
                <ProjectsLinks projects={projects} />
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
    projects: reduxState.projects
  }
}

export default connect(mapStateToProps,{getProjects})(ProjectsList)
