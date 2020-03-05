/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { getStatusTextClass, getIndicatorClass } from 'libs/utils';

const ListItemDetails = ({
  status,
  statusText,
  transactionId,
  transactionDatetime,
  amount,
  customerEmail,
  customerName,
  paymentDescription,
  paymentName,
  deliveryDatetime,
  onClick,
}) => (
  <div className="list-item-detail__container">
    <div
      className={`list-item__indicator ${getIndicatorClass(status)}`}
    />
    <div className="list-item-detail__header">
      <div
        role="button"
        tabIndex={0}
        className="list-item-detail__container-close"
        onClick={() => {
          onClick(false);
        }}
      >
        Close
      </div>
    </div>
    <div className="list-item-detail__main">
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Transaction ID</p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">
            {transactionId}
          </p>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Customer</p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">
            {customerName}
          </p>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">
            Transaction Date
          </p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">
            {transactionDatetime}
          </p>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Payment Name</p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">
            {paymentName}
          </p>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Delivery Date</p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">
            {deliveryDatetime}
          </p>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Amount</p>
        </div>
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__details">{amount}</p>
        </div>
        <div className="ml-auto">
          <div className="button button-md button--orange">Make Payment</div>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Customer Email</p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">
            {customerEmail}
          </p>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Status</p>
        </div>
        <div className="col-md-9 px-0">
          <p
            className={`list-item-detail__main-item__details status-text ${getStatusTextClass(
              status,
            )}`}
          >
            {statusText}
          </p>
        </div>
      </div>
      <div className="list-item-detail__main-item list-item-detail__main-item-alternate row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">
            Payment Description
          </p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">
            {paymentDescription}
          </p>
        </div>
      </div>
      <div className="list-item-detail__main-item">
        <div className="button button-md button--grey">Print Receipt</div>
        <div className="button button-md button--grey">Report an issue</div>
        <div className="button button-md button--grey">Refund customer</div>
      </div>
    </div>
  </div>
);

ListItemDetails.propTypes = {
  status: PropTypes.string.isRequired,
  statusText: PropTypes.string.isRequired,
  transactionId: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  transactionDatetime: PropTypes.string.isRequired,
  paymentName: PropTypes.string.isRequired,
  deliveryDatetime: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  customerEmail: PropTypes.string.isRequired,
  paymentDescription: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListItemDetails;
