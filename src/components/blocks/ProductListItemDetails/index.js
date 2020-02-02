import React , {Fragment, useState} from 'react'
import PropTypes from 'prop-types'

import {ProductInfo} from 'components/blocks';

const ProductListItemDetails = props => {
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
            className="list-item-detail__container-close"
            onClick={() => {
              props.onClick(false);
            }}
          >
            Close
          </div>
        </div>
        <div className="list-item-detail__main">
          {showProductInfo ? (
            <ProductInfo {...props} />
          ) : ( null
            // props.recent_transactions &&
            // props.recent_transactions.map((transaction, index) => (
            // //   <CustomerRecentTransaction
            // //     key={index}
            // //     transaction={transaction}
            // //   />
            // ))
          )}

          <div className="list-item-detail__main-item">
            {showProductInfo ? (
              <Fragment>
                <div className="button button-md button--grey">
                  Delete Product
                </div>
                <div className="button button-md button--grey">
                  Report an issue
                </div>
              </Fragment>
            ) : (
              <div className="button button-md button--grey">
                View All Transactions
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

ProductListItemDetails.propTypes = {
  product_id: PropTypes.string.isRequired,
  product_name: PropTypes.string.isRequired,
  date_created: PropTypes.string.isRequired,
  transactions: PropTypes.string.isRequired,
  delivery_date: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  product_description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default ProductListItemDetails;