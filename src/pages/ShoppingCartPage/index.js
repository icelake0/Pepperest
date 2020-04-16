/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { withDefaultLayout } from 'components/layouts';
import { getStringHash } from 'libs/utils';
import { CartItem } from 'components/blocks';

const config = {
  hasAlternateHeader: false,
  hasCommonHeader: true,
  showCart: false,
  commonHeaderTitle: 'Shopping Cart',
  links: [],
  // page: 'shoppingCart',
  page: 'settings',
  isSettings: true,
  navBarTitle: 'Shopping Cart',
};
const ShoppingCartPage = ({ history }) => (
  <>
    <div className="cart">
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="cart-list">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
              <CartItem key={getStringHash()} />
            ))}
          </div>
        </div>
        <div className="col-12 col-lg-4 summary">
          <div className="pcard">
            <div className="pcard-header p-3">
              <p className="text--smaller text-font--medium ">
                My Order Summary
              </p>
              <p className="text--smaller text--gray">3 Items</p>
            </div>
            <div className="pcard-body">
              <div className="d-flex flex-column align-items-center px-3">
                <p className="text--smaller">Your cart total is</p>
                <h4 className="text--big text-font--medium mt-3">
                  NGN 108,500
                </h4>
              </div>
              <div className="cart-divider my-3" />
              <div className="w-100 d-flex flex-column align-items-center px-3">
                <div role="button" tabIndex={0} className="button button-lg button--orange" onClick={() => { history.push('/checkout'); }}>
                  CONTINUE TO CHECKOUT
                </div>
                <div className="button button-lg button--orange-outline">
                  EDIT YOUR CART
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default withDefaultLayout(ShoppingCartPage, config);
