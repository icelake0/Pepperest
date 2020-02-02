import React, {Fragment,useState} from 'react'
import {
  getIndicatorClass
} from 'libs/utils';
import { CustomerInfo,CustomerRecentTransaction } from 'components/blocks';

import PropTypes from 'prop-types';


const CustomerListItemDetails = props => {
  const [showCustomerInfo, setShowCustomerInfo] = useState(true);
    return (
      <div className="list-item-detail__container">
        <div
          className={`list-item__indicator ${getIndicatorClass(props.status)}`}
        ></div>
        <div className="list-item-detail__header">
          <ul className="list-item-detail__header-menu">
            <li
              className={`list-item-detail__header-menu__item ${
                showCustomerInfo ? 'active' : ''
              }`}
              onClick={() => {
                setShowCustomerInfo(true);
              }}
            >
              Customer Info
            </li>
            <li
              className={`list-item-detail__header-menu__item ${
                !showCustomerInfo ? 'active' : ''
              }`}
              onClick={() => {
                setShowCustomerInfo(false);
              }}
            >
              Recent Transactions
            </li>
          </ul>
          <div
            className="list-item-detail__container-close"
            onClick={() => {
              props.onClick(false);
            }}>
            Close
          </div>
        </div>
        <div className="list-item-detail__main">
          {showCustomerInfo ? (
            <CustomerInfo {...props} />
          ) : (
            props.recent_transactions &&
            props.recent_transactions.map((transaction, index) => (
              <CustomerRecentTransaction
                key={index}
                transaction={transaction}
              />
            ))
          )}

          <div className="list-item-detail__main-item">
            {showCustomerInfo ? (
              <Fragment>
                <div className="button button-md button--grey">
                  Edit Customer
                </div>
                <div className="button button-md button--grey">
                  Block Customer
                </div>
              </Fragment>
            ) : (
              <div className="button button-md button--grey">
                View All Transactions
              </div>
            )}
          </div>
        </div>
      </div>
    );
}


CustomerListItemDetails.propTypes = {
  status: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  customer_name: PropTypes.string.isRequired,
  customer_email: PropTypes.string.isRequired,
  total_transactions: PropTypes.string.isRequired,
  recent_transactions: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string.isRequired,
      datetime: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired
    })
  ).isRequired,
  total_spent: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CustomerListItemDetails;