import React from 'react';
import PropTypes from 'prop-types';
import {
  getStatusTextClass,
  getStatusTagClass,
  getStatusText
} from 'libs/utils';

const CustomerRecentTransaction = ({ amount, datetime, status }) => (
  <div className="list-item-detail__main-item row mx-0">
    <div className="col-md-3 px-0">
      <div className="list-item__date">
        <p className="text--smaller text--black">
          NGN
          {amount}
        </p>
      </div>
    </div>
    <div className="col-md-5 px-0">
      <div className="list-item__details-container">
        <p className="text--smaller text--gray">{datetime}</p>
      </div>
    </div>
    <div className="ml-auto">
      <div className="list-item__status">
        <div className="list-item__status-container">
          <div
            className={`list-item__status-tag ${getStatusTagClass(
              status
            )} ${getStatusTextClass(status)}`}
          >
            {getStatusText(status)}
          </div>
        </div>
      </div>
    </div>
  </div>
);

CustomerRecentTransaction.propTypes = {
  amount: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default CustomerRecentTransaction;
