/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { OrangeRightArrowIcon } from 'components/vectors';

const HomePageFeatureItem = ({
  isActive, title, handleClick, position,
}) => (
  <li className={`section-one__list-item ${isActive ? 'text--orange' : ''}`} onClick={() => { handleClick(position); }}>
    {title}
    {isActive ? <OrangeRightArrowIcon /> : null}
  </li>
);

HomePageFeatureItem.defaultProps = {
  isActive: false,
};

HomePageFeatureItem.propTypes = {
  isActive: PropTypes.bool,
  title: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
};

export default HomePageFeatureItem;
