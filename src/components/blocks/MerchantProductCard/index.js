import React from 'react';
import { ProductIcon } from 'components/vectors';

const MerchantProductCard = ({product}) => (
  <div className="col-12 col-md-6 col-lg-3">
    <div className="merchant-product-card">
      <div className="merchant-product-card__top">
        <div className="merchant-product-card__image-wrapper">
          <ProductIcon />
        </div>
        <div className="merchant-product-card__details">
          <h5 className="merchant-product-card__title">
            {product.productName}
          </h5>
          <p className="merchant-product-card__info">
          {product.productDescription}
          </p>
          <div className="merchant-product-card__details__base">
            <div className="d-flex flex-row align-items-center justify-content-between">
              <p className="merchant-product-card__amount">{product.currency} {product.amount}</p>
              <p className="merchant-product-card__delivery-day">
                {product.deliveryDate} Delivery days
              </p>
            </div>
            <div className="button button-lg button--orange-outline">
              ADD TO CART
            </div>
          </div>
        </div>
      </div>
      <div className="merchant-product-card__mobile-base">
        <div className="d-flex flex-column">
          <p className="merchant-product-card__amount">{product.currency} {product.amount}</p>
          <p className="merchant-product-card__delivery-day">{product.deliveryDate} Delivery days</p>
        </div>
        <div className="button button-lg button--orange-outline">ADD TO CARD</div>
      </div>
    </div>
  </div>
);

export default MerchantProductCard;
