import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right">
        <li><NavLink to="/">New Project</NavLink>  </li>
        <li><NavLink to="/">Logout</NavLink>  </li>
        <li><NavLink to="/" className="btn btn-floating grey darken-3" ></NavLink>  </li>
    </ul>
  )
}

export default SignedInLinks;
