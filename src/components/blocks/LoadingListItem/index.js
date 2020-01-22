import React from 'react';
import PropType from 'prop-types';

const LoadingListItem = (props) => {

    switch (props.styleNumber) {
      case 1:
        return styleOne();
      case 2:
        return styleTwo();
      case 3:
        return styleThree();
      default:
        return styleOne();
        
    }


};

const styleOne = () => (
  <div className="loading-list__item">
    <div className="loading-list__item-placeholder-one">
      <div className="loading-list__item-placeholder loading-list__item-placeholder-xs"></div>
    </div>
    <div className="loading-list__item-placeholder-two">
      <div className="loading-list__item-placeholder loading-list__item-placeholder-xxs"></div>
    </div>
    <div className="loading-list__item-placeholder-multiple">
      <div className="loading-list__item-placeholder loading-list__item-placeholder-xl"></div>
      <div className="loading-list__item-placeholder loading-list__item-placeholder-md"></div>
    </div>
    <div className="loading-list__item-placeholder-five">
      <div className="loading-list__item-placeholder loading-list__item-placeholder-lg"></div>
    </div>
  </div>
);
const styleTwo = () => (
  <div className="loading-list__item">
    <div className="loading-list__item-placeholder-one">
      <div className="loading-list__item-placeholder loading-list__item-placeholder-xs"></div>
    </div>
    <div className="loading-list__item-placeholder-two">
      <div className="loading-list__item-placeholder loading-list__item-placeholder-xxs"></div>
    </div>
    <div className="loading-list__item-placeholder-multiple">
      <div className="loading-list__item-placeholder loading-list__item-placeholder-lg"></div>
      <div className="loading-list__item-placeholder loading-list__item-placeholder-md"></div>
    </div>
    <div className="loading-list__item-placeholder-five">
      <div className="loading-list__item-placeholder loading-list__item-placeholder-lg"></div>
    </div>
  </div>
);

const styleThree = () => (
  <div className="loading-list__item">
    <div className="loading-list__item-placeholder-one">
      <div className="loading-list__item-placeholder loading-list__item-placeholder-xs"></div>
    </div>
    <div className="loading-list__item-placeholder-two">
      <div className="loading-list__item-placeholder loading-list__item-placeholder-xs"></div>
    </div>
    <div className="loading-list__item-placeholder-multiple">
      <div className="loading-list__item-placeholder loading-list__item-placeholder-lg"></div>
      <div className="loading-list__item-placeholder loading-list__item-placeholder-md"></div>
    </div>
    <div className="loading-list__item-placeholder-five">
      <div className="loading-list__item-placeholder loading-list__item-placeholder-lg"></div>
    </div>
  </div>
);

LoadingListItem.defaultProps = {
    styleNumber: 1
}

LoadingListItem.propTypes = {
    styleNumber: PropType.number.isRequired
}


export default LoadingListItem;