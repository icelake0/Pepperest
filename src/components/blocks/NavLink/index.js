import React from 'react'
import PropTypes from 'prop-types'
import { NavLink as Link } from 'react-router-dom';


const NavLink = props => (
  <Link to={props.url} className="nsHeader-nav__item" activeClassName="active">
    {props.value}
  </Link>
);

NavLink.propTypes = {
    url: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default NavLink;