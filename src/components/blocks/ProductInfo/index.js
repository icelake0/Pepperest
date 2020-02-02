import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const ProductInfo = props => {

    return (
      <Fragment>
        <div className="list-item-detail__main-item row mx-0">
          <div className="col-md-3 px-0">
            <p className="list-item-detail__main-item__title">Product ID</p>
          </div>
          <div className="col-md-9 px-0">
            <p className="list-item-detail__main-item__details">
              {props.product_id}
            </p>
          </div>
        </div>
        <div className="list-item-detail__main-item row mx-0">
          <div className="col-md-3 px-0">
            <p className="list-item-detail__main-item__title">Product Name</p>
          </div>
          <div className="col-md-9 px-0">
            <p className="list-item-detail__main-item__details">
              {props.product_name}
            </p>
          </div>
        </div>
        <div className="list-item-detail__main-item row mx-0">
          <div className="col-md-3 px-0">
            <p className="list-item-detail__main-item__title">Date Created</p>
          </div>
          <div className="col-md-9 px-0">
            <p className="list-item-detail__main-item__details">
              {props.date_created}
            </p>
          </div>
        </div>
        <div className="list-item-detail__main-item row mx-0">
          <div className="col-md-3 px-0">
            <p className="list-item-detail__main-item__title">Transactions</p>
          </div>
          <div className="col-md-9 px-0">
            <p className="list-item-detail__main-item__details">
              {props.transactions}
            </p>
          </div>
        </div>
        <div className="list-item-detail__main-item row mx-0">
          <div className="col-md-3 px-0">
            <p className="list-item-detail__main-item__title">Delivery Date</p>
          </div>
          <div className="col-md-9 px-0">
            <p className="list-item-detail__main-item__details">
              {props.delivery_date}
            </p>
          </div>
        </div>
        <div className="list-item-detail__main-item row mx-0">
          <div className="col-md-3 px-0">
            <p className="list-item-detail__main-item__title">Amount</p>
          </div>
          <div className="col-md-3 px-0">
            <p className="list-item-detail__main-item__details">
              N {props.amount}
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
              {props.product_description}
            </p>
          </div>
        </div>
      </Fragment>
    );
}

ProductInfo.propTypes = {
    product_id: PropTypes.string.isRequired,
    product_name: PropTypes.string.isRequired,
    date_created: PropTypes.string.isRequired,
    transactions: PropTypes.string.isRequired,
    delivery_date: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    product_description: PropTypes.string.isRequired,
}

export default ProductInfo