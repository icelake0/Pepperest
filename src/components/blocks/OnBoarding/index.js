import React from 'react'
import PropTypes from 'prop-types'
import { BankAlert, OnBoardingModal, LoadingListItem } from 'components/blocks';

const OnBoarding = props => (
  <div className="on-boarding-container">
    <BankAlert />
    {!props.secondaryButtonText ? (
      <OnBoardingModal
        title={props.title}
        info={props.info}
        buttonText={props.buttonText}
        imageUrl={props.imageUrl}
      />
    ) : (
      <OnBoardingModal
        title={props.title}
        info={props.info}
        buttonText={props.buttonText}
        secondaryButtonText={props.secondaryButtonText}
        imageUrl={props.imageUrl}
      />
    )}

    <LoadingListItem />
    <LoadingListItem styleNumber={2} />
    <LoadingListItem />
    <LoadingListItem styleNumber={3} />
    <LoadingListItem styleNumber={2} />
    <LoadingListItem />
    <LoadingListItem styleNumber={3} />
  </div>
);

OnBoarding.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  secondaryButtonText: PropTypes.string,
  imageUrl: PropTypes.string
};

export default OnBoarding;