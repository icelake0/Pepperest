/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { ProductInfo, ProductRecentTransaction } from 'components/blocks';

const ProductListItemDetails = ({
  productID, productName, dateCreated, deliveryDate, productDescription, amount, transactions, recentTransactions, onClick,
}) => {
  const [showProductInfo, setShowProductInfo] = useState(true);
  return (
    <div className="list-item-detail__container">
      <div className="list-item-detail__header">
        <ul className="list-item-detail__header-menu">
          <li
            className={`list-item-detail__header-menu__item ${
              showProductInfo ? 'active' : ''
            }`}
            onClick={() => {
              setShowProductInfo(true);
            }}
          >
            Product Info
          </li>
          <li
            className={`list-item-detail__header-menu__item ${
              !showProductInfo ? 'active' : ''
            }`}
            onClick={() => {
              setShowProductInfo(false);
            }}
          >
            Recent Transactions
          </li>
        </ul>
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
        {showProductInfo ? (
          <ProductInfo
            productID={productID}
            productName={productName}
            dateCreated={dateCreated}
            transactions={transactions}
            deliveryDate={deliveryDate}
            amount={amount}
            productDescription={productDescription}
          />
        ) : (
          recentTransactions
          && recentTransactions.map((transaction, index) => (
            <ProductRecentTransaction
              key={index}
              amount={transaction.amount}
              datetime={transaction.posting_date}
              status={transaction.trans_status}
              customerEmail={transaction.customer_email}
            />
          ))
        )}

        <div className="list-item-detail__main-item">
          {showProductInfo ? (
            <>
              <div className="button button-md button--grey">
                Delete Product
              </div>
              <div className="button button-md button--grey">
                Report an issue
              </div>
            </>
          ) : (
            <div className="button button-md button--grey">
              View All Transactions
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ProductListItemDetails.propTypes = {
  productID: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  transactions: PropTypes.number.isRequired,
  deliveryDate: PropTypes.number.isRequired,
  amount: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  recentTransactions: PropTypes.arrayOf(
    PropTypes.shape({
      trans_status: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      customer_email: PropTypes.string.isRequired,
      posting_date: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ProductListItemDetails;
