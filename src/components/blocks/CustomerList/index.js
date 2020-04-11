import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputWithoutLabel, CustomerListItem, ListHeader } from 'components/blocks';
import { getStringHash } from 'libs/utils';

const CustomerList = ({ customers }) => {
  const [value, setValue] = useState('');

  return (
    <div className="list">
      <ListHeader />
      <div className="list-body">
        <ul>
          {customers
          && customers.map((customer, index) => (
            <CustomerListItem
              key={getStringHash(index)}
              status={customer.status}
              phone={customer.phone}
              customerName={customer.customerName}
              paymentName={customer.paymentName}
              customerEmail={customer.customerEmail}
              totalTransactions={customer.totalTransactions}
              totalSpent={customer.totalSpent}
              recentTransactions={customer.recentTransactions}
            />
          ))}
        </ul>
      </div>
      <div className="list-footer">
        <p className="list-footer-label">Showing 1 - 6 of 90 entries</p>
        <div className="list-footer__pagination">
          <span className="list-footer__pagination-prev list-footer-text">
            Previous
          </span>
          <ul className="d-flex flex-row">
            <li className="list-footer__pagination-page-number list-footer-text">
              1
            </li>
            <li className="list-footer__pagination-page-number list-footer-text">
              2
            </li>
            <li className="list-footer__pagination-page-number list-footer-text">
              3
            </li>
            <li className="list-footer__pagination-page-number list-footer-text list-footer-text-alt">
              4
            </li>
          </ul>
          <span className="list-footer__pagination-next list-footer-text list-footer-text-alt">
            Next
          </span>
        </div>
      </div>
    </div>
  );
};

CustomerList.defaultProps = {
  customers: [],
};

CustomerList.propTypes = {
  customers: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      statusText: PropTypes.string.isRequired,
      transaction_id: PropTypes.string.isRequired,
      customer_name: PropTypes.string.isRequired,
      transaction_date: PropTypes.string.isRequired,
      transaction_datetime: PropTypes.string.isRequired,
      payment_name: PropTypes.string.isRequired,
      delivery_datetime: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      customer_email: PropTypes.string.isRequired,
      payment_description: PropTypes.string.isRequired,
    }),
  ),
};

export default CustomerList;
