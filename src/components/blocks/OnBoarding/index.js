import React from 'react';
import PropTypes from 'prop-types';
import { BankAlert, OnBoardingModal, LoadingListItem } from 'components/blocks';

const OnBoarding = ({
  info, title, secondaryButtonText, buttonText, imageUrl,
}) => (
  <div className="on-boarding-container">
    <BankAlert />
    {
      buttonText.length > 1 && (
        !secondaryButtonText ? (
          <OnBoardingModal
            title={title}
            info={info}
            buttonText={buttonText}
            imageUrl={imageUrl}
          />
        ) : (
          <OnBoardingModal
            title={title}
            info={info}
            buttonText={buttonText}
            secondaryButtonText={secondaryButtonText}
            imageUrl={imageUrl}
          />
        )
      )
    }

    <LoadingListItem />
    <LoadingListItem styleNumber={2} />
    <LoadingListItem />
    <LoadingListItem styleNumber={3} />
    <LoadingListItem styleNumber={2} />
    <LoadingListItem />
    <LoadingListItem styleNumber={3} />
  </div>
);

OnBoarding.defaultProps = {
  imageUrl: '',
  secondaryButtonText: '',
};

OnBoarding.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  secondaryButtonText: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default OnBoarding;
