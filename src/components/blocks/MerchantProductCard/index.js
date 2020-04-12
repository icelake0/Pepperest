import React from 'react';
import { ProductIcon } from 'components/vectors';

const MerchantProductCard = () => (
  <div className="merchant-product-card">
    <div className="merchant-product-card__image-wrapper">
      <ProductIcon />
    </div>
    <h5 className="merchant-product-card__title">
      Iya Remi Ina Ankara with two lace Payment
    </h5>
    <p className="merchant-product-card__info">
      Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing
      consectetur adipiscing consectetur adipiscing
    </p>
    <div className="d-flex flex-row align-items-center justify-content-between">
      <p className="merchant-product-card__amount">NGN 18,500</p>
      <p className="merchant-product-card__delivery-day">2 Delivery days</p>
    </div>
    <div className="button button-lg button--orange-outline">ADD TO CARD</div>
  </div>
);

export default MerchantProductCard;
