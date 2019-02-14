import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { dispatch } from 'rxjs/internal/observable/range';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = props => {
  return (
    <ul className="right">
        <li><NavLink to="/project/create">New Project</NavLink>  </li>
        <li><a href="#" onClick={props.signOut}>Logout</a>  </li>
        <li><NavLink to="/" className="btn btn-floating grey darken-3" ></NavLink>  </li>
    </ul>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps) (SignedInLinks);
