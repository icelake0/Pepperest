import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const CustomerInfo = props => {
    return (
      <Fragment>
        <div className="list-item-detail__main-item row mx-0">
          <div className="col-md-3 px-0">
            <p className="list-item-detail__main-item__title">Full Name</p>
          </div>
          <div className="col-md-9 px-0">
            <p className="list-item-detail__main-item__details">
              {props.customer_name}
            </p>
          </div>
        </div>
        <div className="list-item-detail__main-item row mx-0">
          <div className="col-md-3 px-0">
            <p className="list-item-detail__main-item__title">Email</p>
          </div>
          <div className="col-md-9 px-0">
            <p className="list-item-detail__main-item__details">
              {props.customer_email}
            </p>
          </div>
        </div>
        <div className="list-item-detail__main-item row mx-0">
          <div className="col-md-3 px-0">
            <p className="list-item-detail__main-item__title">Phone Number</p>
          </div>
          <div className="col-md-9 px-0">
            <p className="list-item-detail__main-item__details">
              {props.phone}
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
              {props.total_transactions}
            </p>
          </div>
        </div>
        <div className="list-item-detail__main-item row mx-0">
          <div className="col-md-3 px-0">
            <p className="list-item-detail__main-item__title">Total Spent</p>
          </div>
          <div className="col-md-9 px-0">
            <p className="list-item-detail__main-item__details">
              {props.total_spent}
            </p>
          </div>
        </div>
        <div className="list-item-detail__main-item row mx-0">
          <div className="col-md-3 px-0">
            <p className="list-item-detail__main-item__title">Status</p>
          </div>
          <div className="col-md-9 px-0">
            <p className="list-item-detail__main-item__details">
              {props.status}
            </p>
          </div>
        </div>
      </Fragment>
    );
}

CustomerInfo.propTypes = {
  status: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  customer_name: PropTypes.string.isRequired,
  customer_email: PropTypes.string.isRequired,
  total_transactions: PropTypes.string.isRequired,
  total_spent: PropTypes.string.isRequired,
};

export default CustomerInfo;