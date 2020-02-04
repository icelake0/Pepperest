import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom';

const NavLinkAlternate = props => {
  return (
    <NavLink to={props.url} className="nsHeader-nav__item nsHeader-alternate-nav__item" activeClassName="active" exact>
      {props.title}
    </NavLink>
  )
}


NavLinkAlternate.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default NavLinkAlternate;