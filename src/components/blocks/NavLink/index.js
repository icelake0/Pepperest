import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';


const NavLink = ({ url, value }) => (
  <Link to={url} className="nsHeader-nav__item" activeClassName="active" exact={false}>
    {value}
  </Link>
);

NavLink.propTypes = {
  url: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default NavLink;
