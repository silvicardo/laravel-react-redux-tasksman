import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProjectsLinks from './secondary/ProjectLinks'

class ProjectsList extends Component {
  
  constructor () {
    super()

    this.state = {
      projects: []
    }
  }

  componentDidMount () {
    axios.get('/api/projects').then(response => {
      this.setState({
        projects: response.data
      })
    })
  }

  render () {
    const { projects } = this.state

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

export default ProjectsList
