import React, { Component } from 'react';
import InvalidFeedback from './InvalidFeedback';

class NewProjectForm extends Component {

  constructor(props){
    super(props);

    //REACT STATE manages form fields
    this.state = {
      name: '',
      description: ''
    }

    // preserve the value of this
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleNewProjectSubmit = this.handleNewProjectSubmit.bind(this);

  }

  /***********************/
  /* COMPONENT FUNCTIONS */
  /***********************/

  handleNewProjectSubmit(e){

    event.preventDefault();//no refresh

    const project = {
      name: this.state.name,
      description: this.state.description
    };

    this.props.manageSubmit(project);

  }

  handleFieldChange (event) {

    this.setState({ [event.target.name]: event.target.value });

  }

  hasErrorFor (field) {

    return !!this.props.errors[field];

  }

  renderErrorFor (field) {

      if (this.hasErrorFor(field)) return ( <InvalidFeedback error={this.props.errors[field][0]} /> );

  }

  /*****************/
  /* RENDER METHOD */
  /*****************/

  render(){

    return(

      <form onSubmit={this.handleNewProjectSubmit}>

        <div className='form-group'>
          <label htmlFor='name'>Project name</label>
          <input
            id='name'
            type='text'
            className={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
            name='name'
            value={this.state.name}
            onChange={this.handleFieldChange}
          />
          {this.renderErrorFor('name')}
        </div>

        <div className='form-group'>
          <label htmlFor='description'>Project description</label>
          <textarea
            id='description'
            className={`form-control ${this.hasErrorFor('description') ? 'is-invalid' : ''}`}
            name='description'
            rows='10'
            value={this.state.description}
            onChange={this.handleFieldChange}
          />
          {this.renderErrorFor('description')}
        </div>

        <button className='btn btn-primary'>Create</button>

      </form>

    )
  }

}

export default NewProjectForm;
