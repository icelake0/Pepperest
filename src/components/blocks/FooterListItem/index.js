import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const FooterListItem = ({ title, url }) => <NavLink to={url} className="footer-list-item">{title}</NavLink>;

FooterListItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default FooterListItem;
