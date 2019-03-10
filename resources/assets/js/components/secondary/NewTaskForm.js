import React, {Component} from 'react';
import InvalidFeedback from './InvalidFeedback';

class NewTaskForm extends Component {

  constructor(props){;
    super(props);

    //REACT STATE manages form fields
    this.state = {
      title: ''
    };

    // preserve the value of this
    this.onNewTaskSubmit = this.onNewTaskSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);

  }

    /***********************/
    /* COMPONENT FUNCTIONS */
    /***********************/

    onNewTaskSubmit(event) {

    event.preventDefault();//no refresh

    const task = {
      title: this.state.title,
      project_id: this.props.projectId
    };

    this.props.manageSubmit(task);

    this.setState({ title: '' });

  }

  handleFieldChange(event) {

    this.setState({ title: event.target.value });

  }

  hasErrorFor(field) {

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

      <form onSubmit={this.onNewTaskSubmit}>

        <div className='input-group'>
          <input
            type='text'
            name='title'
            className={`form-control ${this.hasErrorFor('title') ? 'is-invalid' : ''}`}
            placeholder='Task title'
            value={this.state.title}
            onChange={this.handleFieldChange}
          />

          <div className='input-group-append'>
            <button className='btn btn-primary'>Add</button>
          </div>

          {this.renderErrorFor('title')}

        </div>

      </form>
    )
  }

}

export default NewTaskForm;
