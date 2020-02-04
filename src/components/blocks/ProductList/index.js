import React, {useState} from 'react'
import { InputWithoutLabel, ProductListItem } from 'components/blocks';
import { products } from 'libs/constants';


const ProductList =  props => {
    const [value, setValue] = useState(''); 

    return (
      <div className="list">
        <div className="list-header">
          <InputWithoutLabel
            name="search"
            type="text"
            placeholder="Search Product/Services"
            id="search"
            value={value}
            onChange={e => {
              setValue(e.target.value);
            }}
          />

          <div className="list-header__actions">
            <div className="list-header__action">
              <img
                className="list-header__action-icon"
                src="/assets/images/svg/filter.svg"
                alt="icon"
              />
              <span className="list-header__action-text">Filter By</span>
            </div>
            <div className="list-header__action">
              <img
                className="list-header__action-icon"
                src="/assets/images/svg/sort.svg"
                alt="icon"
              />
              <span className="list-header__action-text">Sort By</span>
            </div>
          </div>
        </div>
        <div className="list-body">
          <ul>
            {products &&
              products.map((product, index) => (
                <ProductListItem key={index} {...product} />
              ))}
          </ul>
        </div>
        <div className="list-footer">
          <p className="list-footer-text">Showing 1 - 6 of 90 entries</p>
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
}

export default ProductList;