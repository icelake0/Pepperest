/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from 'react';
import { PepperestContext } from 'components/helpers/constant';

const CustomerListItemDetailMobileModal = () => {
  const pepperestContext = useContext(PepperestContext);
  const [state, setState] = useState({ isRecentTransactionActive: false });
  const handleToggle = () => {
    setState({ ...state, isRecentTransactionActive: !state.isRecentTransactionActive });
  };

  return (
    <>
      <div
        className="list-modal-overlay"
      />
      <div
        className="list-modal"
        onClick={() => {
          pepperestContext.updateShowCustomerListModal(false);
        }}
      >
        <div className="list-modal__body" onClick={(event) => {event.stopPropagation(); }}>
          <div className="list-modal__header py-0">
            <h4
              className={`list-modal__header-label ${
                !state.isRecentTransactionActive ? 'active' : ''
              }`}
              onClick={() => {
                handleToggle();
              }}
            >
              Customer Info
            </h4>
            <h4
              className={`list-modal__header-label ${
                state.isRecentTransactionActive ? 'active' : ''
              }`}
              onClick={() => {
                handleToggle();
              }}
            >
              Recent Transactions
            </h4>
          </div>
          <ul className="list-modal__list">
            {!state.isRecentTransactionActive ? (
              <>
                <li className="list-modal__list-item">
                  <p className="list-item-detail__main-item__title">
                    Full Name
                  </p>
                  <p className="list-item-detail__main-item__details">
                    James Blunt
                  </p>
                </li>
                <li className="list-modal__list-item">
                  <p className="list-item-detail__main-item__title">
                    Email Address
                  </p>
                  <p className="list-item-detail__main-item__details">
                    Tohbeey@gmail.com
                  </p>
                </li>
                <li className="list-modal__list-item">
                  <p className="list-item-detail__main-item__title">
                    Phone Number
                  </p>
                  <p className="list-item-detail__main-item__details">
                    080959032343
                  </p>
                </li>
                <li className="list-modal__list-item">
                  <p className="list-item-detail__main-item__title">
                    Total Transactions
                  </p>
                  <p className="list-item-detail__main-item__details">4</p>
                </li>
                <li className="list-modal__list-item">
                  <p className="list-item-detail__main-item__title">
                    Total Spent
                  </p>
                  <p className="list-item-detail__main-item__details">
                    NGN 53,0000,23
                  </p>
                </li>
                <li className="list-modal__list-item">
                  <p className="list-item-detail__main-item__title">Status</p>
                  <p className="list-item-detail__main-item__details list-item__status-text text--active">
                    Active
                  </p>
                </li>
                <div className="list-modal__list-item list-modal__list-item__alternate">
                  <div className="button button-md button--grey">
                    Edit Customer
                  </div>
                  <div className="button button-md button--grey">
                    Block Customer
                  </div>
                </div>
              </>
            ) : (
              <>
                <li className="list-modal__list-item list-modal__list-item--alt">
                  <p className="list-item-detail__main-item__title">
                    NGN 5,0000
                  </p>
                  <div className="list-item__status-container">
                    <div className="list-item__status-tag list-item__status-tag--initial text--initial">
                      Initial Payment
                    </div>
                  </div>
                </li>
                <li className="list-modal__list-item list-modal__list-item--alt">
                  <p className="list-item-detail__main-item__title">
                    NGN 5,0000
                  </p>
                  <div className="list-item__status-container">
                    <div className="list-item__status-tag list-item__status-tag--awaiting text--awaiting">
                      Awaiting Payment
                    </div>
                  </div>
                </li>
                <li className="list-modal__list-item list-modal__list-item--alt">
                  <p className="list-item-detail__main-item__title">
                    NGN 5,0000
                  </p>
                  <div className="list-item__status-container">
                    <div className="list-item__status-tag list-item__status-tag--fulfilled text--fulfilled">
                      Fulfilled
                    </div>
                  </div>
                </li>
                <li className="list-modal__list-item list-modal__list-item--alt">
                  <p className="list-item-detail__main-item__title">
                    NGN 5,0000
                  </p>
                  <div className="list-item__status-container">
                    <div className="list-item__status-tag list-item__status-tag--initial text--initial">
                      Initial Payment
                    </div>
                  </div>
                </li>
                <li className="list-modal__list-item list-modal__list-item--alt">
                  <p className="list-item-detail__main-item__title">
                    NGN 5,0000
                  </p>
                  <div className="list-item__status-container">
                    <div className="list-item__status-tag list-item__status-tag--initial text--initial">
                      Initial Payment
                    </div>
                  </div>
                </li>
                <li className="list-modal__list-item list-modal__list-item--alt">
                  <p className="list-item-detail__main-item__title">
                    NGN 5,0000
                  </p>
                  <div className="list-item__status-container">
                    <div className="list-item__status-tag list-item__status-tag--awaiting text--awaiting">
                      Awaiting Payment
                    </div>
                  </div>
                </li>
                <li className="list-modal__list-item list-modal__list-item--alt">
                  <p className="list-item-detail__main-item__title">
                    NGN 5,0000
                  </p>
                  <div className="list-item__status-container">
                    <div className="list-item__status-tag list-item__status-tag--awaiting text--awaiting">
                      Awaiting Payment
                    </div>
                  </div>
                </li>
                <li className="list-modal__list-item list-modal__list-item--alt">
                  <p className="list-item-detail__main-item__title">
                    NGN 5,0000
                  </p>
                  <div className="list-item__status-container">
                    <div className="list-item__status-tag list-item__status-tag--awaiting text--awaiting">
                      Awaiting Payment
                    </div>
                  </div>
                </li>
                <div className="list-modal__list-item list-modal__list-item__alternate">
                  <div className="button button-md button--grey">
                    View All Transactions
                  </div>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CustomerListItemDetailMobileModal;
