import React from 'react';
import PropTypes from 'prop-types';

const ProductInfo = ({
  productID, productName, dateCreated, transactions, deliveryDate, amount, productDescription,
}) => (
  <>
    <div className="list-item-detail__main-item row mx-0">
      <div className="col-md-3 px-0">
        <p className="list-item-detail__main-item__title">Product ID</p>
      </div>
      <div className="col-md-9 px-0">
        <p className="list-item-detail__main-item__details">
          {productID}
        </p>
      </div>
    </div>
    <div className="list-item-detail__main-item row mx-0">
      <div className="col-md-3 px-0">
        <p className="list-item-detail__main-item__title">Product Name</p>
      </div>
      <div className="col-md-9 px-0">
        <p className="list-item-detail__main-item__details">
          {productName}
        </p>
      </div>
    </div>
    <div className="list-item-detail__main-item row mx-0">
      <div className="col-md-3 px-0">
        <p className="list-item-detail__main-item__title">Date Created</p>
      </div>
      <div className="col-md-9 px-0">
        <p className="list-item-detail__main-item__details">
          {dateCreated}
        </p>
      </div>
    </div>
    <div className="list-item-detail__main-item row mx-0">
      <div className="col-md-3 px-0">
        <p className="list-item-detail__main-item__title">Transactions</p>
      </div>
      <div className="col-md-9 px-0">
        <p className="list-item-detail__main-item__details">
          {transactions}
        </p>
      </div>
    </div>
    <div className="list-item-detail__main-item row mx-0">
      <div className="col-md-3 px-0">
        <p className="list-item-detail__main-item__title">Delivery Date</p>
      </div>
      <div className="col-md-9 px-0">
        <p className="list-item-detail__main-item__details">
          {deliveryDate}
        </p>
      </div>
    </div>
    <div className="list-item-detail__main-item row mx-0">
      <div className="col-md-3 px-0">
        <p className="list-item-detail__main-item__title">Amount</p>
      </div>
      <div className="col-md-3 px-0">
        <p className="list-item-detail__main-item__details">
          N
          {' '}

          {amount}
        </p>
      </div>
      <div className="ml-auto">
        <div className="button button-md button--orange">Copy Link</div>
      </div>
    </div>
    <div className="list-item-detail__main-item list-item-detail__main-item-alternate row mx-0">
      <div className="col-md-3 px-0">
        <p className="list-item-detail__main-item__title">
          Product Description
        </p>
      </div>
      <div className="col-md-9 px-0">
        <p className="list-item-detail__main-item__details">
          {productDescription}
        </p>
      </div>
    </div>
  </>
);

ProductInfo.propTypes = {
  productID: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  transactions: PropTypes.number.isRequired,
  deliveryDate: PropTypes.number.isRequired,
  amount: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
};

export default ProductInfo;
