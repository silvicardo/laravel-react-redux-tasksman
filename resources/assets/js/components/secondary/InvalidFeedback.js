import React from 'react';

// just need a stateless functional component

const InvalidFeedback = (({error})=>(//just get the error from props

  <span className='invalid-feedback'>
    <strong>{error}</strong>
  </span>

));

export default InvalidFeedback;
