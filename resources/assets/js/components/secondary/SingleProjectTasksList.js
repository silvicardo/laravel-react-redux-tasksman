import React from 'react'

const SingleProjectTasksList = (({tasks, onTaskCompletion}) => (

  <ul className='list-group mt-3'>
    {tasks.map(task => (
      <li
        className='list-group-item d-flex justify-content-between align-items-center'
        key={task.id}
      >
        {task.title}

        <button
          className='btn btn-primary btn-sm'
          onClick={()=> {onTaskCompletion(task.id)}}
        >
          Mark as completed
        </button>
      </li>
    ))}

  </ul>

))

export default SingleProjectTasksList
