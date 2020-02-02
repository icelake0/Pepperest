import React from 'react'
import PropTypes from 'prop-types';
import {
  getStatusTextClass,
  getIndicatorClass,
  getStatusTagClass,
  getStatusText
} from 'libs/utils';


const ProductListItem = props => {

    return (
        <div className="list-item row mx-0">
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row">
              <div className="list-item__date">
                <p className="list-item__date-text">{props.date}</p>
              </div>
            </div>
          </div>
          <div className="list-item__details col-md-4 px-0">
            <div className="list-item__details-container">
              <p className="list-item__details-product">{props.payment_name}</p>
              <p className="list-item__details-email">{props.customer_email}</p>
            </div>
          </div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row justify-content-end">
              <div className="list-item__payment">
                <div className="list-item__payment-container">
                  <p className="list-item__payment-price">NGN {props.amount}</p>
                </div>
              </div>
              <div
                className="list-item__more"
                onClick={() => {
                  
                }}
              >
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ProductListItem;