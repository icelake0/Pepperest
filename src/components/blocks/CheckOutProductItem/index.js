import React from 'react';
import { ProductIcon } from 'components/vectors';

const CheckOutProductItem = ({product}) => (
    <div className="">
    <div className="checkout-item">
      <div className="checkout-item-image__wrapper">
        <img
          className="checkout-item-image"
          src="assets/images/product.jpeg"
          alt="product"
        />
      </div>
      <div className="checkout-item-content">
        <h5 className="cart-item__title">{product.productname}</h5>
        <h6 className="checkout-item-content__title text--smaller">
        {product.description}
        </h6>
        <div className="d-flex flex-row justify-content-between align-items-center mt-2">
          <p className="text--smaller text-font--medium">
          {product.currency} {product.price}
          </p>
          <p className="text--smallest text--orange">
          {product.deliveryperiod || 0} Delivery days
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default CheckOutProductItem;
