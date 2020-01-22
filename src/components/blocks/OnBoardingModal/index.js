import React from 'react'
import PropTypes from 'prop-types';

const OnBoardingModal = props => (
  <div className="on-boarding">
    <div className="on-boarding__content">
      <h3 className="on-boarding__title">
        {props.title}
      </h3>
      <p className="on-boarding__info">
        {props.info}
      </p>
      <div className="button button--orange">{props.buttonText}</div>
    </div>
    <div className="on-boarding-image__container">
      <img className="on-boarding-image"  src={props.imageUrl} alt="illustration"/>
    </div>
  </div>
);

OnBoardingModal.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
};

export default OnBoardingModal;
