import React, { useState } from 'react';
import { OrderListItem, InputWithoutLabel, ListItem } from 'components/blocks';
import PropTypes from 'prop-types';
import { getStringHash } from 'libs/utils';

const OrderList = ({ orders }) => {
  const [value, setValue] = useState('');

  return (
    <>
      <div className="list">
        <div className="list-header">
          <InputWithoutLabel
            name="search"
            type="text"
            placeholder="Search Transactions ID, customer name, email address"
            id="search"
            value={value}
            onChange={(e) => {
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
          { orders && orders.map(({
            status, date, address, orderId, cost,
          }) => (
            <OrderListItem
              key={getStringHash(status)}
              status={status}
              date={date}
              address={address}
              orderId={orderId}
              cost={cost}
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
    </>
  );
};

OrderList.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      orderId: PropTypes.string.isRequired,
      cost: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default OrderList;
