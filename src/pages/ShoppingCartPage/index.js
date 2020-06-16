/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { withDefaultLayout } from 'components/layouts';
import { CartItem } from 'components/blocks';
import { connect } from 'react-redux';

const config = {
  hasAlternateHeader: false,
  hasCommonHeader: true,
  showCart: false,
  commonHeaderTitle: 'Shopping Cart',
  links: [],
  page: 'settings',
  isSettings: true,
  navBarTitle: 'Shopping Cart',
};
const ShoppingCartPage = (props) => (
  <>
    <div className="cart">
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="cart-list">
            {props.cartItems.map((product) => (
              <CartItem key={product.id} product = {product} />
            ))}
          </div>
        </div>
        <div className="col-12 col-lg-4 summary">
          <div className="pcard">
            <div className="pcard-header p-3">
              <p className="text--smaller text-font--medium ">
                My Order Summary
              </p>
              <p className="text--smaller text--gray">{props.cartItems.length} Items</p>
            </div>
            <div className="pcard-body">
              <div className="d-flex flex-column align-items-center px-3">
                <p className="text--smaller">Your cart total is</p>
                <h4 className="text--big text-font--medium mt-3">
                  {props.cartItems[0]?.currency} {props.cart?.totalprice}
                </h4>
              </div>
              <div className="cart-divider my-3" />
              <div className="w-100 d-flex flex-column align-items-center px-3">
                <div role="button" tabIndex={0} className="button button-lg button--orange" onClick={() => { props.history.push('/checkout'); }}>
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

const mapStateToProps = state => {
  return {
      cartItems: state.cart?.cart?.items || [],
      cart : state.cart.cart
  };
};

export default connect(mapStateToProps, null)(withDefaultLayout(ShoppingCartPage, config));
