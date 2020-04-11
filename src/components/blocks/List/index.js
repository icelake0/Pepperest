/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  InputWithoutLabel,
  ListItem,
  FilterBy,
  SortBy,
  ListHeader,
} from 'components/blocks';
import { getStringHash } from 'libs/utils';

const List = ({ payments }) => {
  const [value, setValue] = useState('');

  return (
    <div className="list">
      <ListHeader />
      <div className="list-body">
        <ul>
          {payments
            && payments.map((payment, index) => (
              <ListItem
                key={getStringHash(index)}
                status={payment.status}
                statusText={payment.statusText}
                transactionId={payment.transactionId}
                transactionDatetime={payment.transactionDatetime}
                amount={payment.amount}
                customerEmail={payment.customerEmail}
                customerName={payment.customerName}
                paymentDescription={payment.paymentDescription}
                paymentName={payment.paymentName}
                deliveryDatetime={payment.deliveryDatetime}
                date={payment.date}
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

List.defaultProps = {
  payments: [],
};

List.propTypes = {
  payments: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      statusText: PropTypes.string.isRequired,
      transactionId: PropTypes.string.isRequired,
      customerName: PropTypes.string.isRequired,
      transactionDate: PropTypes.string.isRequired,
      transactionDatetime: PropTypes.string.isRequired,
      paymentName: PropTypes.string.isRequired,
      deliveryDatetime: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      customerEmail: PropTypes.string.isRequired,
      paymentDescription: PropTypes.string.isRequired,
    }),
  ),
};

export default List;
