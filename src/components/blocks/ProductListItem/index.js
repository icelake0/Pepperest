/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ProductListItemDetails } from 'components/blocks';
import { PepperestContext } from 'components/helpers/constant';


const ProductListItem = ({
  date, productName, productDescription, amount, productID, dateCreated, deliveryDate, transactions, recentTransactions,
}) => {
  const [isProductListDetailsOpen, setProductListDetailsOpen] = useState(false);
  const updateProductListDetailsOpen = (value) => setProductListDetailsOpen(value);
  const pepperestContext = useContext(PepperestContext);


  return (
    <>
      <div className="list-item row mx-0" onClick={() => { pepperestContext.updateShowProductListModal(true); }}>
        <div className="col-2 col-md-2 px-0">
          <div className="d-flex flex-row">
            <div className="list-item__date">
              <p className="list-item__date-text">{date}</p>
            </div>
          </div>
        </div>
        <div className="col-6 list-item__details col-md-6 px-0">
          <div className="list-item__details-container">
            <p className="list-item__details-product">{productName}</p>
            <p className="list-item__details-email">{productDescription}</p>
          </div>
        </div>
        <div className="col-3 col-md-3 px-0">
          <div className="d-flex flex-row justify-content-end">
            <div className="list-item__payment">
              <div className="list-item__payment-container">
                <p className="list-item__payment-price">
                  NGN
                  {' '}
                  {amount}
                </p>
              </div>
            </div>
            <div className="list-item__more" onClick={() => { setProductListDetailsOpen(true); }}>
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
          </div>
        </div>
      </div>
      {
            isProductListDetailsOpen ? (
              <ProductListItemDetails
                productID={productID}
                productName={productName}
                dateCreated={dateCreated}
                deliveryDate={deliveryDate}
                productDescription={productDescription}
                amount={amount}
                transactions={transactions}
                recentTransactions={recentTransactions}
                onClick={updateProductListDetailsOpen}
              />
            ) : null
        }
    </>
  );
};


ProductListItem.propTypes = {
  date: PropTypes.string.isRequired,
  productID: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  transactions: PropTypes.string.isRequired,
  deliveryDate: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  recentTransactions: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      customer_email: PropTypes.string.isRequired,
      datetime: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default ProductListItem;
