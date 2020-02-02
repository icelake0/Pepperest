import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';
import {
  getStatusTextClass,
  getIndicatorClass,
  getStatusTagClass,
  getStatusText
} from 'libs/utils';
import {ProductListItemDetails} from 'components/blocks'


const ProductListItem = props => {
    const [isProductListDetailsOpen, setProductListDetailsOpen] = useState(false);
    const updateProductListDetailsOpen = value => setProductListDetailsOpen(value);

    return (
      <Fragment>
        <div className="list-item row mx-0">
          <div className="col-md-2 px-0">
            <div className="d-flex flex-row">
              <div className="list-item__date">
                <p className="list-item__date-text">{props.date}</p>
              </div>
            </div>
          </div>
          <div className="list-item__details col-md-5 px-0">
            <div className="list-item__details-container">
              <p className="list-item__details-product">{props.product_name}</p>
              <p className="list-item__details-email">{props.product_description}</p>
            </div>
          </div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row justify-content-end">
              <div className="list-item__payment">
                <div className="list-item__payment-container">
                  <p className="list-item__payment-price">NGN {props.amount}</p>
                </div>
              </div>
              <div className="list-item__more" onClick={() => {setProductListDetailsOpen(true)}}>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>
        {
            isProductListDetailsOpen ? (
                <ProductListItemDetails {...props} onClick={updateProductListDetailsOpen}/>
            ) : null
        }
      </Fragment>
    );
}


ProductListItem.propTypes = {
  date: PropTypes.string.isRequired,
  product_id: PropTypes.string.isRequired,
  product_name: PropTypes.string.isRequired,
  date_created: PropTypes.string.isRequired,
  transactions: PropTypes.string.isRequired,
  delivery_date: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  product_description: PropTypes.string.isRequired
};
export default ProductListItem;