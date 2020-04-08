/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { PepperestContext } from 'components/helpers/constant';


const ListItemDetailMobileModal = () => {
  const pepperestContext = useContext(PepperestContext);

  return (
    <>
      <div className="list-modal-overlay" onClick={() => { pepperestContext.updateShowPaymentListModal(false); }} />
      <div className="list-modal">
        <div className="list-modal__body">
          <div className="list-modal__header">
            <div
              className="list-item-detail__container-close"
              onClick={() => {
                pepperestContext.updateShowPaymentListModal(false);
              }}
            >
              Close
            </div>
          </div>
          <ul className="list-modal__list">
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">
                Transaction ID
              </p>
              <p className="list-item-detail__main-item__details">
                16835004G6739590D
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">Customer</p>
              <p className="list-item-detail__main-item__details">
                James Blunt
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">
                Transaction Date
              </p>
              <p className="list-item-detail__main-item__details">
                January 21, 2019 / 15:00:23pm
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">Payment Name</p>
              <p className="list-item-detail__main-item__details">
                Ina Ankara Payment
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">
                Delivery Date
              </p>
              <p className="list-item-detail__main-item__details">
                13th - 15th August ( Your expected delivery date is 2 days from
                payment date.)
              </p>
            </li>
            <li className="list-modal__list-item">
              <div className="list-item__payment-container">
                <div>
                  <p className="list-item-detail__main-item__title">Amount</p>
                  <p className="list-item-detail__main-item__details">
                    NGN 530,600
                  </p>
                </div>
                <div className="button button-md button--orange">
                  Make Payment
                </div>
              </div>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">
                Customer Email
              </p>
              <p className="list-item-detail__main-item__details">
                Tohbeey@gmail.com
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">Status</p>
              <p className="list-item-detail__main-item__details list-item__status-text text--pending">
                Pending, Due in 4 days
              </p>
            </li>
            <li className="list-modal__list-item">
              <p className="list-item-detail__main-item__title">
                Payment Description
              </p>
              <p className="list-item-detail__main-item__details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque id nisl urna. Aenean eget blandit magna, sit amet
                posuere erat. Integer posuere odio tincidunt velit ornare,
                feugiat venenatis
              </p>
            </li>
            <div className="list-modal__list-item list-modal__list-item__alternate">
              <div className="button button-md button--grey">Print Receipt</div>
              <div className="button button-md button--grey">
                Report an issue
              </div>
              <div className="button button-md button--grey">
                Refund customer
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListItemDetailMobileModal;
