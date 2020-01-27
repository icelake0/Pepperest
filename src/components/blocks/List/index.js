import React from 'react'
import { InputWithoutLabel } from 'components/blocks';

const List = props => (
  <div className="list">
    <div className="list-header">
      <InputWithoutLabel
        name="search"
        type="text"
        placeholder="Search Transactions ID, customer name, email address"
        id="search"
        value=""
        onChange={() => {}}
      />

      <div className="list-header__actions">
        <div className="list-header__action">
          <span className="list-header__action-text">Filter By</span>
        </div>
        <div className="list-header__action">
          <span className="list-header__action-text">Sort By</span>
        </div>
      </div>
    </div>
    <div className="list-body">
      <ul>
        <li className="list-item">
          <div className="list-item__indicator list-item__indicator-pending"></div>
        </li>
        <li className="list-item">
          <div className="list-item__indicator list-item__indicator-open"></div>
        </li>
        <li className="list-item">
          <div className="list-item__indicator list-item__indicator-closed"></div>
        </li>
        <li className="list-item">
          <div className="list-item__indicator list-item__indicator-awaiting"></div>
        </li>
        <li className="list-item">
          <div className="list-item__indicator list-item__indicator-flagged"></div>
        </li>
        <li className="list-item">
          <div className="list-item__indicator list-item__indicator-refund"></div>
        </li>
        <li className="list-item">
          <div className="list-item__indicator list-item__indicator-initial"></div>
        </li>
        <li className="list-item">
          <div className="list-item__indicator list-item__indicator-released"></div>
        </li>
        <li className="list-item">
          <div className="list-item__indicator list-item__indicator-stop"></div>
        </li>
        <li className="list-item">
          <div className="list-item__indicator list-item__indicator-fulfilled"></div>
        </li>
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


export default List;