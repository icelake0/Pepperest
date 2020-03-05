import React from 'react';
import PropTypes from 'prop-types';

const CustomerInfo = ({
  customerName, customerEmail, phone, totalTransaction, totalSpent, status,
}) => (
  <>
    <div className="list-item-detail__main-item row mx-0">
      <div className="col-md-3 px-0">
        <p className="list-item-detail__main-item__title">Full Name</p>
      </div>
      <div className="col-md-9 px-0">
        <p className="list-item-detail__main-item__details">
          {customerName}
        </p>
      </div>
    </div>
    <div className="list-item-detail__main-item row mx-0">
      <div className="col-md-3 px-0">
        <p className="list-item-detail__main-item__title">Email</p>
      </div>
      <div className="col-md-9 px-0">
        <p className="list-item-detail__main-item__details">
          {customerEmail}
        </p>
      </div>
    </div>
    <div className="list-item-detail__main-item row mx-0">
      <div className="col-md-3 px-0">
        <p className="list-item-detail__main-item__title">Phone Number</p>
      </div>
      <div className="col-md-9 px-0">
        <p className="list-item-detail__main-item__details">
          {phone}
        </p>
      </div>
    </div>
    <div className="list-item-detail__main-item row mx-0">
      <div className="col-md-3 px-0">
        <p className="list-item-detail__main-item__title">
          Total Transactions
        </p>
      </div>
      <div className="col-md-9 px-0">
        <p className="list-item-detail__main-item__details">
          {totalTransaction}
        </p>
      </div>
    </div>
    <div className="list-item-detail__main-item row mx-0">
      <div className="col-md-3 px-0">
        <p className="list-item-detail__main-item__title">Total Spent</p>
      </div>
      <div className="col-md-9 px-0">
        <p className="list-item-detail__main-item__details">
          {totalSpent}
        </p>
      </div>
    </div>
    <div className="list-item-detail__main-item row mx-0">
      <div className="col-md-3 px-0">
        <p className="list-item-detail__main-item__title">Status</p>
      </div>
      <div className="col-md-9 px-0">
        <p className="list-item-detail__main-item__details">
          {status}
        </p>
      </div>
    </div>
  </>
);

CustomerInfo.propTypes = {
  status: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  customerEmail: PropTypes.string.isRequired,
  totalTransaction: PropTypes.string.isRequired,
  totalSpent: PropTypes.string.isRequired,
};

export default CustomerInfo;
