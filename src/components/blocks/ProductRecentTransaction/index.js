import React from 'react';
import PropTypes from 'prop-types';

import {
  getStatusTextClass,
  getStatusTagClass,
  getStatusText,
} from 'libs/utils';

const ProductRecentTransaction = ({
  amount, datetime, status, customerEmail,
}) => (
  <div className="list-item-detail__main-item row mx-0">
    <div className="col-md-2 px-0">
      <div className="list-item__date">
        <p className="text--smaller text--black">
          NGN
          {' '}
          {amount}
        </p>
      </div>
    </div>
    <div className="col-md-5 px-0">
      <div className="list-item__details-container">
        <p className="list-item__details-product text--smaller text--gray">{datetime}</p>
        <p className="list-item__details-email">{customerEmail}</p>
      </div>
    </div>
    <div className="ml-auto">
      <div className="list-item__status">
        <div className="list-item__status-container">
          <div
            className={`list-item__status-tag ${getStatusTagClass(
              status,
            )} ${getStatusTextClass(status)}`}
          >
            {getStatusText(status)}
          </div>
        </div>
      </div>
    </div>
  </div>
);

ProductRecentTransaction.protoTypes = {
  amount: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  customerEmail: PropTypes.string.isRequired,
};

export default ProductRecentTransaction;
