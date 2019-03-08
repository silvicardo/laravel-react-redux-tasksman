import React from 'react';

const InvalidFeedback = (({error})=>(
  <span className='invalid-feedback'>
    <strong>{error}</strong>
  </span>
)) 

export default InvalidFeedback;
