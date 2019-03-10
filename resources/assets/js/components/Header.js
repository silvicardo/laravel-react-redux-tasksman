import React from 'react';
import { Link } from 'react-router-dom';

//just need a stateless functional component

const Header = () => (

  <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
    <div className='container'>
      <Link className='navbar-brand' to='/'>Tasksman</Link>
    </div>
  </nav>

)

export default Header;
