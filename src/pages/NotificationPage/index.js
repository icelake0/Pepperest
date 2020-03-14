/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const NotificationPage = () => (
  <div className="pcard">
    <div className="pcard-header">
      <h3 className="pcard-header__title">Notifications</h3>
    </div>
    <div className="pcard-body">
      <div className="notification-wrapper">
        <div className="notification-item row">
          <div className="col-md-3">
            <h4 className="notification__list-item__title">Payment</h4>
          </div>
          <div className="col-md-9">
            <ul className="notification__list">
              <li className="notification__list-item">
                <div className="input-control">
                  <input type="checkbox" id="payment1" name="payment1" />
                  <label htmlFor="payment1" />
                </div>
                <p className="text--smaller">Accept payment via bank</p>
              </li>
              <li className="notification__list-item">
                <div className="input-control">
                  <input type="checkbox" id="payment2" name="payment2" />
                  <label htmlFor="payment2" />
                </div>
                <p className="text--smaller">Send transaction receipt to me</p>
              </li>
              <li className="notification__list-item">
                <div className="input-control">
                  <input type="checkbox" id="payment3" name="payment3" />
                  <label htmlFor="payment3" />
                </div>
                <p className="text--smaller">
                  Send transaction receipt to customer
                </p>
              </li>
              <li className="notification__list-item">
                <div className="input-control">
                  <input type="checkbox" id="payment4" name="payment4" />
                  <label htmlFor="payment4" />
                </div>
                <p className="text--smaller">Request invoice from customer</p>
              </li>
              <li className="notification__list-item">
                <div className="input-control">
                  <input type="checkbox" id="payment5" name="payment5" />
                  <label htmlFor="payment5" />
                </div>
                <p className="text--smaller">Receive invoice from customer</p>
              </li>
              <li className="notification__list-item">
                <div className="input-control">
                  <input type="checkbox" id="payment6" name="payment6" />
                  <label htmlFor="payment6" />
                </div>
                <p className="text--smaller">Due payment</p>
              </li>
              <li className="notification__list-item">
                <div className="input-control">
                  <input type="checkbox" id="payment7" name="payment7" />
                  <label htmlFor="payment7" />
                </div>
                <p className="text--smaller">Due delivery</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="notification-item row">
          <div className="col-md-3">
            <h4 className="notification__list-item__title">Transfer</h4>
          </div>
          <div className="col-md-9">
            <ul className="notification__list">
              <li className="notification__list-item">
                <div className="input-control">
                  <input type="checkbox" id="transfer1" name="transfer1" />
                  <label htmlFor="transfer1" />
                </div>
                <p className="text--smaller">
                  Send transaction receipt to customer
                </p>
              </li>
              <li className="notification__list-item">
                <div className="input-control">
                  <input type="checkbox" id="transfer2" name="transfer2" />
                  <label htmlFor="transfer2" />
                </div>
                <p className="text--smaller">
                  Confirm transaction before sending
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="notification-item row">
          <div className="col-md-3">
            <h4 className="notification__list-item__title">Payout</h4>
          </div>
          <div className="col-md-9">
            <ul className="notification__list">
              <li className="notification__list-item">
                <div className="input-control">
                  <input type="checkbox" id="payout1" name="payout1" />
                  <label htmlFor="payout1" />
                </div>
                <p className="text--smaller">Send all payout notifications</p>
              </li>
              <li className="notification__list-item">
                <div className="input-control">
                  <input type="checkbox" id="payout2" name="payout2" />
                  <label htmlFor="payout2" />
                </div>
                <p className="text--smaller">Send all fail transactions</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="pcard-footer">
      <div className="button button-md button--orange">Save Changes</div>
    </div>
  </div>
);

export default NotificationPage;
