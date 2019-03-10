
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectsLinks from './secondary/ProjectLinks';
import {connect} from 'react-redux';
import {getProjects} from './../actions/actionCreators';

class ProjectsList extends Component {

  constructor (props) {
    super(props);
  }

  /*********************/
  /* LIFECYCLE METHODS */
  /*********************/

  componentDidMount() {

    this.props.getProjects();

  }

  /*****************/
  /* RENDER METHOD */
  /*****************/

  render () {

    //Redux State projects will be in props
    //thanks to mapStateToProps
    const { projects } = this.props;

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

//ReduxState -> extract {projectsListReducer} -> props.projects
function mapStateToProps({projectsListReducer}){

  return { projects: projectsListReducer.projects };

}

//This component connects to Redux Store
// -> provides projects from Store via mapStateToProps
// -> getProjects function in props via mapDispatchToProps
export default connect(mapStateToProps,{getProjects})(ProjectsList);
