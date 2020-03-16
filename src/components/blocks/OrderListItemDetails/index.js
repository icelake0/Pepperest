/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { getStatusTextClass, getIndicatorClass } from 'libs/utils';

const OrderListItemDetails = ({ status, onClick }) => (
  <div className="list-item-detail__container">
    <div className={`list-item__indicator ${getIndicatorClass(status)}`} />
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
          <p className="list-item-detail__main-item__title">Order ID</p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">#9999202241</p>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Customer</p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">James Blunt</p>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Order Date</p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">
            January 21, 2019 / 15:00:23pm
          </p>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Total Amount</p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">NGN 530,600</p>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Customer Email</p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">
            Tohbeey@gmail.com
          </p>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Status</p>
        </div>
        <div className="col-md-9 px-0">
          <p
            className={`list-item-detail__main-item__details status-text ${getStatusTextClass(status)}`}
          >
            {status}
          </p>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">
            Delivery Addresss
          </p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">
            40 Abiodun Alakemo str, off ikorodu road, ketu, lagos state.
          </p>
        </div>
      </div>
      <div className="list-item-detail__main-item list-item-detail__main-item-alternate row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Items in Order</p>
        </div>
        <div className="col-md-9 px-0">
          <div className="list-item__details-product__image-container">
            <img
              className="list-item__details-product__image"
              src="/assets/images/product.jpeg"
              alt="product"
            />
            <img
              className="list-item__details-product__image"
              src="/assets/images/product.jpeg"
              alt="product"
            />
            <img
              className="list-item__details-product__image"
              src="/assets/images/product.jpeg"
              alt="product"
            />
            <img
              className="list-item__details-product__image"
              src="/assets/images/product.jpeg"
              alt="product"
            />
          </div>
        </div>
      </div>
      <div className="list-item-detail__main-item row mx-0">
        <div className="col-md-3 px-0">
          <p className="list-item-detail__main-item__title">Payment Method</p>
        </div>
        <div className="col-md-9 px-0">
          <p className="list-item-detail__main-item__details">Flutterwave</p>
        </div>
      </div>
      <div className="list-item-detail__main-item">
        <div className="button button-md button--grey">Print Receipt</div>
        <div className="button button-md button--grey">Report an issue</div>
      </div>
    </div>
  </div>
);

OrderListItemDetails.propTypes = {
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default OrderListItemDetails;
