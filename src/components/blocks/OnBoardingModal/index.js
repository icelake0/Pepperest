import React from 'react';
import PropTypes from 'prop-types';

const OnBoardingModal = ({
  title, info, secondaryButtonText, buttonText, imageUrl,
}) => (
  <div className="on-boarding">
    <div className="on-boarding__content">
      <h3 className="on-boarding__title">
        {title}
      </h3>
      <p className="on-boarding__info">
        {info}
      </p>
      <div className="d-flex flex-row mt-auto">
        <div className="button button-md button--orange">{buttonText}</div>
        {secondaryButtonText ? (<div className="button button-md button--orange">{secondaryButtonText}</div>) : null}
      </div>
    </div>
    <div className="on-boarding-image__container">
      <img className="on-boarding-image" src={imageUrl} alt="illustration" />
    </div>
  </div>
);

OnBoardingModal.defaultProps = {
  imageUrl: '',
  secondaryButtonText: '',
};

OnBoardingModal.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  secondaryButtonText: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default OnBoardingModal;
