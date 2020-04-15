import React from 'react';
import { ProductIcon } from 'components/vectors';

const CartItem = () => (
  <div className="cart-item">
    <div className="row w-100 h-100 mx-0">
      <div className="col-md-2">
        <div className="cart-item__image-wrapper">
          <ProductIcon />
        </div>
      </div>
      <div className="col-md-6">
        <div className="d-flex flex-column">
          <h5 className="text--smaller text--bold text-font--medium text--ellipsis mb-1">Iya Remi Ina Ankara  with two lace Payment</h5>
          <p className="text--smaller text--gray text--ellipsis my-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
          <p className="text--smallest text--ellipsis mt-auto">2 Delivery days</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="d-flex flex-column align-items-end justify-content-between">
          <p>NGN 18,500</p>
          <div className="button button-md button--orange-outline mt-3">Remove Product</div>
        </div>
      </div>
    </div>
  </div>
);

export default CartItem;
