/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const InstagramProductListItem = ({
  imageUrl, hasImageUrl,
  date,
  product_name,
  product_price,
}) => (
  <>
    <div className="list-item list-item__alt row mx-0">
      <div className="col-md-4 px-0">
        <div className="d-flex flex-row align-items-center">
          {hasImageUrl ? (
            <img className="list-item__image" alt="product" src={imageUrl} />
          ) : (
            <div className="list-item__image list-item__image-placeholder" />
          )}
          <div className="list-item__date">
            <p className="list-item__date-text">{date}</p>
          </div>
          {hasImageUrl ? (
            <div className="button button-md button--orange-outline">
              Visit Product Link
            </div>
          ) : null}
        </div>
      </div>
      <div className="list-item__details col-md-4 px-0">
        <div className="list-item__details-container">
          <p className="list-item__details-product">{product_name}</p>
        </div>
      </div>
      <div className="col-md-4 px-0 ml-auto">
        <div className="d-flex flex-row justify-content-end">
          <div className="list-item__payment">
            <div className="list-item__payment-container">
              {!hasImageUrl ? (
                <div className="button button-md button--orange">
                  Add Payment Plan
                </div>
              ) : null}
              <p className="list-item__payment-price">
                NGN
                {product_price}
              </p>
            </div>
          </div>
          <div className="list-item__more" onClick={() => {}}>
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
        </div>
      </div>
    </div>
  </>
);

InstagramProductListItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  product_name: PropTypes.string.isRequired,
  product_price: PropTypes.string.isRequired,
  hasImageUrl: PropTypes.bool.isRequired,
};

export default InstagramProductListItem;
