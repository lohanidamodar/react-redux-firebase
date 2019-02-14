import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = props => {
  return (
    <ul className="right">
        <li><NavLink to="/project/create">New Project</NavLink>  </li>
        <li><a href="#" onClick={props.signOut}>Logout</a>  </li>
        <li><NavLink to="/" className="btn btn-floating grey darken-3" >{props.profile.initials}</NavLink>  </li>
        
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (SignedInLinks);
