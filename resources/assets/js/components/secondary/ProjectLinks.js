import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsLinks = ({projects}) => (
  <ul className='list-group list-group-flush'>
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
