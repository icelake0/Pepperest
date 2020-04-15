import React from 'react';
import { withDefaultLayout } from 'components/layouts';
import { ListHeader, MerchantProductCard } from 'components/blocks';
import { getStringHash } from 'libs/utils';

const config = {
  hasAlternateHeader: false,
  hasCommonHeader: true,
  showCart: true,
  commonHeaderTitle: 'Seun Akanni\'s Store',
  links: [],
  page: 'merchantProducts',
};
const MerchantProductsPage = () => (
  <div className="merchant">
    <div className="list">
      <ListHeader />
      <div className="">
        <ul className="row">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
            <div className="col-12 col-md-4 col-lg-3" key={getStringHash()}>
              <MerchantProductCard />
            </div>
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
  </div>
);

export default withDefaultLayout(MerchantProductsPage, config);
