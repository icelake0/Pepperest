import React, { useState } from 'react';
import { InputWithoutLabel, ProductListItem, ListHeader } from 'components/blocks';
import { products } from 'libs/constants';
import { getStringHash } from 'libs/utils';


const ProductList = () => {
  const [value, setValue] = useState('');

  return (
    <div className="list">
      <ListHeader isProduct />
      <div className="list-body">
        <ul>
          {products
              && products.map((product, index) => (
                <ProductListItem
                  key={getStringHash(index)}
                  date={product.date}
                  productName={product.productName}
                  productDescription={product.productDescription}
                  amount={product.amount}
                  productID={product.productId}
                  dateCreated={product.dateCreated}
                  deliveryDate={product.deliveryDate}
                  transactions={product.transactions}
                  recentTransactions={product.recentTransactions}
                />
              ))}
        </ul>
      </div>
      <div className="list-footer">
        <p className="list-footer-label">Showing 1 - 6 of 90 entries</p>
        <div className="list-footer__pagination">
          <span className="list-footer__pagination-prev list-footer-text">
            Previous
          </span>
          <ul className="d-flex flex-row">
            <li className="list-footer__pagination-page-number list-footer-text">
              1
            </li>
            <li className="list-footer__pagination-page-number list-footer-text">
              2
            </li>
            <li className="list-footer__pagination-page-number list-footer-text">
              3
            </li>
            <li className="list-footer__pagination-page-number list-footer-text list-footer-text-alt">
              4
            </li>
          </ul>
          <span className="list-footer__pagination-next list-footer-text list-footer-text-alt">
            Next
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
