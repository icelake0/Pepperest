import React, {Fragment} from 'react'
import PropTypes from 'prop-types';

const InstagramProductListItem = props => {

    return (
      <Fragment>
        <div className="list-item list-item__alt row mx-0">
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row align-items-center">
              {
                  props.hasImageUrl ? 
                    (<img className="list-item__image" alt="product" src={props.imageUrl}/>) :
                    (<div className="list-item__image list-item__image-placeholder"></div>)
              }
              <div className="list-item__date">
                <p className="list-item__date-text">{props.date}</p>
              </div>
              {props.hasImageUrl ? 
              (<div className="button button-md button--orange-outline">
                Visit Product Link
              </div>) : null}
            </div>
          </div>
          <div className="list-item__details col-md-4 px-0">
            <div className="list-item__details-container">
              <p className="list-item__details-product">{props.product_name}</p>
            </div>
          </div>
          <div className="col-md-4 px-0 ml-auto">
            <div className="d-flex flex-row justify-content-end">
              <div className="list-item__payment">
                <div className="list-item__payment-container">
                  {!props.hasImageUrl ?
                  (<div className="button button-md button--orange">
                    Add Payment Plan
                  </div>): null}
                  <p className="list-item__payment-price">NGN {props.product_price}</p>
                </div>
              </div>
              <div className="list-item__more" onClick={() => {}}>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

InstagramProductListItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  product_name: PropTypes.string.isRequired,
  product_price: PropTypes.string.isRequired,
  hasImageUrl: PropTypes.bool.isRequired
};

export default InstagramProductListItem;