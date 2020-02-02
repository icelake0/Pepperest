import React from 'react'
import PropTypes from  'prop-types'
import { getStatusTextClass, getIndicatorClass} from 'libs/utils'

const ListItemDetails = props => {
    return (
      <div className="list-item-detail__container">
        <div className={`list-item__indicator ${getIndicatorClass(props.status)}`}></div>
        <div className="list-item-detail__header">
          <div className="list-item-detail__container-close" onClick={() => {props.onClick(false)}}>Close</div>
        </div>
        <div className="list-item-detail__main">
          <div className="list-item-detail__main-item row mx-0">
            <div className="col-md-3 px-0">
              <p className="list-item-detail__main-item__title">
                Transaction ID
              </p>
            </div>
            <div className="col-md-9 px-0">
              <p className="list-item-detail__main-item__details">
                {props.transaction_id}
              </p>
            </div>
          </div>
          <div className="list-item-detail__main-item row mx-0">
            <div className="col-md-3 px-0">
              <p className="list-item-detail__main-item__title">Customer</p>
            </div>
            <div className="col-md-9 px-0">
              <p className="list-item-detail__main-item__details">
                {props.customer_name}
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
                {props.transaction_datetime}
              </p>
            </div>
          </div>
          <div className="list-item-detail__main-item row mx-0">
            <div className="col-md-3 px-0">
              <p className="list-item-detail__main-item__title">Payment Name</p>
            </div>
            <div className="col-md-9 px-0">
              <p className="list-item-detail__main-item__details">
                {props.payment_name}
              </p>
            </div>
          </div>
          <div className="list-item-detail__main-item row mx-0">
            <div className="col-md-3 px-0">
              <p className="list-item-detail__main-item__title">
                Delivery Date
              </p>
            </div>
            <div className="col-md-9 px-0">
              <p className="list-item-detail__main-item__details">
                {props.delivery_datetime}
              </p>
            </div>
          </div>
          <div className="list-item-detail__main-item row mx-0">
            <div className="col-md-3 px-0">
              <p className="list-item-detail__main-item__title">Amount</p>
            </div>
            <div className="col-md-3 px-0">
              <p className="list-item-detail__main-item__details">
                {props.amount}
              </p>
            </div>
            <div className="ml-auto">
              <div className="button button-md button--orange">
                Make Payment
              </div>
            </div>
          </div>
          <div className="list-item-detail__main-item row mx-0">
            <div className="col-md-3 px-0">
              <p className="list-item-detail__main-item__title">
                Customer Email
              </p>
            </div>
            <div className="col-md-9 px-0">
              <p className="list-item-detail__main-item__details">
                {props.customer_email}
              </p>
            </div>
          </div>
          <div className="list-item-detail__main-item row mx-0">
            <div className="col-md-3 px-0">
              <p className="list-item-detail__main-item__title">Status</p>
            </div>
            <div className="col-md-9 px-0">
              <p className={`list-item-detail__main-item__details status-text ${getStatusTextClass(props.status)}`}>
                {props.statusText}
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
                {props.payment_description}
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
}

ListItemDetails.propTypes = {
    status: PropTypes.string.isRequired,
    statusText: PropTypes.string.isRequired,
    transaction_id: PropTypes.string.isRequired,
    customer_name: PropTypes.string.isRequired,
    transaction_datetime: PropTypes.string.isRequired,
    payment_name: PropTypes.string.isRequired,
    delivery_datetime: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    customer_email: PropTypes.string.isRequired,
    payment_description: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired

}

export default ListItemDetails;