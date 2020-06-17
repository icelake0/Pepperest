/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { withDefaultLayout } from 'components/layouts';
import { LockIcon } from 'components/vectors';
import { connect } from 'react-redux';
import { CheckOutProductItem } from 'components/blocks'

const config = {
  hasAlternateHeader: false,
  hasCommonHeader: true,
  showCart: false,
  commonHeaderTitle: 'Secure Checkout',
  links: [],
  page: 'checkout',
  isSettings: true,
  navBarTitle: 'Secure Checkout',
};
const CheckoutPage = (props) => (
  <>
    <div className="checkout">
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="pcard">
            <div className="main-header">
              <div className="text--smaller text-font--medium">My Address</div>
            </div>
            <div className="main-content">
              <p className="text--smaller text--gray">
                30 Akinola str, yaba, Lagos
              </p>
              <div className="button button-md button--orange-outline">
                Change Address
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 mx-auto mt-lg-4 mb-3 mb-lg-0">
              <div
                className="button button-lg button--orange"
                onClick={() => {
                  props.history.push('/confirm');
                }}
              >
                PLACE ORDER
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="pcard checkout-summary">
            <div className="pcard-header">
              <h6 className="checkout-item-content__title text--smaller text-font--medium">
                My Order Summary
              </h6>
              <p className="text--smaller">{props.cartItems.length} Items</p>
            </div>
            <div className="">
            {props.cartItems.map((product) => (
              <CheckOutProductItem key={product.id} product = {product} />
            ))}
            </div>
            <div className="checkout-summary-base">
              <h5 className="text--md text--silver text-font--medium text--bold">
                Total:
              </h5>

              <p className="text--md text--bold text-font--medium">
              {props.cartItems[0]?.currency} {props.cart?.totalprice}
              </p>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <LockIcon />
            <p className="text--small text--silver text-font--medium text--bold ml-2">
              Secure Checkout
            </p>
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

export default connect(mapStateToProps, null)(withDefaultLayout(CheckoutPage, config));

