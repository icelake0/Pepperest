import React from 'react'
import PropTypes from 'prop-types'

const NavLinkAlternate = props => (
  <li className="nsHeader-nav__item nsHeader-alternate-nav__item">
    <a href={props.url}>{props.title}</a>
  </li>
);

NavLinkAlternate.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default NavLinkAlternate;