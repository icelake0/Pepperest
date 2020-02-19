import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavLinkAlternate = ({ url, title }) => (
  <NavLink to={url} className="nsHeader-nav__item nsHeader-alternate-nav__item" activeClassName="active" exact>
    {title}
  </NavLink>
);


NavLinkAlternate.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavLinkAlternate;
