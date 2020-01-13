import React from 'react'
import PropTypes from 'prop-types'

const NavLink = props => (
  <li className="nsHeader-nav__item">
    <a href={props.url}>{props.value}</a>
  </li>
);

NavLink.propTypes = {
    url: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default NavLink;