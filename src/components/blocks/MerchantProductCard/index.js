import React from 'react';
import { ProductIcon } from 'components/vectors';
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';
import { SpinnerIcon } from '../../vectors';

const MerchantProductCard = (props) => {
  const addProductToCartHandler = () => {
    const payLoad = {
      cart_id : props.cart?.cart_id,
      productID : props.product.id,
      quantity : 1
    };
    props.onAddProductToCart(props.token, props.user, payLoad);
  }
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="merchant-product-card">
        <div className="merchant-product-card__top">
          <div className="merchant-product-card__image-wrapper">
            <ProductIcon />
          </div>
          <div className="merchant-product-card__details">
            <h5 className="merchant-product-card__title">
              {props.product.productName}
            </h5>
            <p className="merchant-product-card__info">
            {props.product.productDescription}
            </p>
            <div className="merchant-product-card__details__base">
              <div className="d-flex flex-row align-items-center justify-content-between">
                <p className="merchant-product-card__amount">{props.product.currency} {props.product.amount}</p>
                <p className="merchant-product-card__delivery-day">
                  {props.product.deliveryDate} Delivery days
                </p>
              </div>
              <div 
                className="button button-lg button--orange"
                onClick={(event) => addProductToCartHandler(event)}
              >
                {
                  props.productAdding.has(props.product.id) ? <SpinnerIcon /> : 'ADD TO CART'
                }
              </div>
            </div>
          </div>
        </div>
        <div className="merchant-product-card__mobile-base">
          <div className="d-flex flex-column">
            <p className="merchant-product-card__amount">{props.product.currency} {props.product.amount}</p>
            <p className="merchant-product-card__delivery-day">{props.product.deliveryDate} Delivery days</p>
          </div>
          <div 
                className="button button-lg button--orange"
                onClick={(event) => addProductToCartHandler(event)}
          >
                {
                  props.productAdding.has(props.product.id) ? <SpinnerIcon /> : 'ADD TO CART'
                }
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onAddProductToCart: (token, user, payLoad) => dispatch(actions.addItemToCart(token, user, payLoad)),
});

const mapStateToProps = state => {
    return {
      token: state.auth.token,
      user: state.auth.userInfo,
      userProfile: state.userAccount.userProfile,
      productAdding: state.cart.productAdding,
      cart: state.cart.cart,
      error: state.cart.addingItemToCartError
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MerchantProductCard);

