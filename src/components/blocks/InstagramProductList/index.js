import React, { useState } from 'react';
import { InputWithoutLabel, InstagramProductListItem, ListHeader } from 'components/blocks';
import { instagramProducts } from 'libs/constants';


const InstagramProductList = (props) => {
  const [value, setValue] = useState('');
  return (
    <div className="list">
      <ListHeader
        isProduct
        productListActionLabel="Import from Instagram"
        />
      <div className="list-body">
        {instagramProducts
            && instagramProducts.map((instagramProduct) => (
              <InstagramProductListItem
                imageUrl={instagramProduct.imageUrl}
                hasImageUrl={instagramProduct.hasImageUrl}
                date={instagramProduct.date}
                product_name={instagramProduct.product_name}
                product_price={instagramProduct.product_price}
              />
            ))}
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

export default InstagramProductList;
