import React from 'react';
import { Link } from 'react-router-dom';

//just need a stateless functional component

const ProjectsLinks = ({projects}) => (//extract projects array from props

  <ul className='list-group list-group-flush'>

    {/* Generate a link component forEach project */}
    {projects.map((project, index) => (
      <Link key={index}
        className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
        to={`/${project.id}`}
      >
        {project.name}
        <span className='badge badge-primary badge-pill'>
          {project.tasks_count}
        </span>
      </Link>)
    )}

  </ul>
);

export default ProjectsLinks;
