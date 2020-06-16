import React from 'react';
import { ProductIcon } from 'components/vectors';
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';
import { SpinnerIcon } from '../../vectors';

const CartItem = (props) => {
  const removeProductFromCartHandler = () => {
    const payLoad = {
      cart_id : props.cart?.cart_id,
      productID : props.product.productID,
      quantity : 1
    };
    props.onRemoveProductFromCart(props.token, props.user, payLoad);
  }
  return (
    <div className="cart-item">
      <div className="row w-100 h-100 mx-0">
        <div className="col-3 col-md-2">
          <div className="cart-item__image-wrapper">
            <ProductIcon />
          </div>
        </div>
        <div className="col-9 col-md-6">
          <div className="d-flex flex-column">
            <h5 className="cart-item__title">{props.product.productname}</h5>
            <p className="cart-item__info">{props.product.description}</p>
            <p className="text--smallest text--ellipsis mt-auto d-none d-lg-block">{props.product.deliveryperiod || 0} Delivery days</p>
          </div>
        </div>
        <div className="col-md-4 d-none d-lg-block">
          <div className="d-flex flex-column align-items-end justify-content-between">
            <p className="merchant-product-card__amount">{props.product.currency} {props.product.price}</p>
            <div className="button button-md button--orange mt-3"
              onClick={(event) => removeProductFromCartHandler(event)}
            >
              {
                props.productRemoving.has(props.product.id) ? <SpinnerIcon /> : 'Remove Productee'
              }
            </div>
          </div>
        </div>
      </div>
      <div className="merchant-product-card__mobile-base">
        <div className="d-flex flex-column">
          <p className="merchant-product-card__amount">{props.product.currency} {props.product.price}</p>
          <p className="merchant-product-card__delivery-day">{props.product.deliveryperiod || 0} Delivery days</p>
        </div>
        <div className="button button-lg button--orange"
          onClick={(event) => removeProductFromCartHandler(event)}
        >
          {
                props.productRemoving.has(props.product.id) ? <SpinnerIcon /> : 'REMOVE ITEM'
          }
        </div>
      </div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  onRemoveProductFromCart: (token, user, payLoad) => dispatch(actions.removeItemFromCart(token, user, payLoad)),
});

const mapStateToProps = state => {
    return {
      token: state.auth.token,
      user: state.auth.userInfo,
      userProfile: state.userAccount.userProfile,
      productRemoving: state.cart.productRemoving,
      cart: state.cart.cart,
      error: state.cart.addingItemToCartError
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
