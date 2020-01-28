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
        <li>
          <div className="list-item row mx-0">
            <div className="list-item__indicator list-item__indicator-pending"></div>
            <div className="col-md-4 px-0">
              <div className="d-flex flex-row">
                <div className="list-item__date">
                  <p className="list-item__date-text">Jun 21, 2018</p>
                </div>
                <div className="list-item__status">
                  <div className="list-item__status-container">
                    <div className="list-item__status-tag list-item__status-tag--pending text--pending">
                      Pending
                    </div>
                    <p className="list-item__status-text text--pending">
                      Due in 4 days
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-item__details col-md-4 px-0">
              <div className="list-item__details-container">
                <p className="list-item__details-product">Ina Ankara Payment</p>
                <p className="list-item__details-email">Tohbeey@gmail.com</p>
              </div>
            </div>
            <div className="col-md-4 px-0">
              <div className="d-flex flex-row justify-content-end">
                <div className="list-item__payment">
                  <div className="list-item__payment-container">
                    <div className="button button-md button--orange">
                      Make Payment
                    </div>
                    <p className="list-item__payment-price">NGN 20,000</p>
                  </div>
                </div>
                <div className="list-item__more">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-item-detail__container">
            <div className="list-item__indicator list-item__indicator-pending"></div>
            <div className="list-item-detail__container-close">Close</div>
            <div className="list-item-detail__main">
              <div className="list-item-detail__main-item row mx-0">
                <div className="col-md-3 px-0">
                  <p className="list-item-detail__main-item__title">Transaction ID</p>
                </div>
                <div className="col-md-9 px-0">
                  <p className="list-item-detail__main-item__details">16835004G6739590D</p>
                </div>
              </div>
              <div className="list-item-detail__main-item row mx-0">
                  <div className="col-md-3 px-0">
                  <p className="list-item-detail__main-item__title">Customer</p>
                </div>
                <div className="col-md-9 px-0">
                  <p className="list-item-detail__main-item__details">James Blunt</p>
                </div>
              </div>
              <div className="list-item-detail__main-item row mx-0">
                  <div className="col-md-3 px-0">
                  <p className="list-item-detail__main-item__title">Transaction Date</p>
                </div>
                <div className="col-md-9 px-0">
                  <p className="list-item-detail__main-item__details">January 21, 2019 / 15:00:23pm</p>
                </div>
              </div>
              <div className="list-item-detail__main-item row mx-0">
                  <div className="col-md-3 px-0">
                  <p className="list-item-detail__main-item__title">Payment Name</p>
                </div>
                <div className="col-md-9 px-0">
                  <p className="list-item-detail__main-item__details">Ina Ankara Payment</p>
                </div>
              </div>
              <div className="list-item-detail__main-item row mx-0">
                  <div className="col-md-3 px-0">
                  <p className="list-item-detail__main-item__title">Delivery Date</p>
                </div>
                <div className="col-md-9 px-0">
                  <p className="list-item-detail__main-item__details">13th - 15th August ( Your expected delivery date is 2 days from payment date.)</p>
                </div>
              </div>
              <div className="list-item-detail__main-item row mx-0">
                  <div className="col-md-3 px-0">
                  <p className="list-item-detail__main-item__title">Amount</p>
                </div>
                <div className="col-md-3 px-0">
                  <p className="list-item-detail__main-item__details">NGN 530,600</p>
                </div>
                <div className="ml-auto">
                  <div className="button button-md button--orange">Make Payment</div>
                </div>
              </div>
              <div className="list-item-detail__main-item row mx-0">
                  <div className="col-md-3 px-0">
                  <p className="list-item-detail__main-item__title">Customer Email</p>
                </div>
                <div className="col-md-9 px-0">
                  <p className="list-item-detail__main-item__details">Tohbeey@gmail.com</p>
                </div>
              </div>
              <div className="list-item-detail__main-item row mx-0">
                  <div className="col-md-3 px-0">
                  <p className="list-item-detail__main-item__title">Status</p>
                </div>
                <div className="col-md-9 px-0">
                  <p className="list-item-detail__main-item__details status-text text--pending">Pending, Due in 4 days</p>
                </div>
              </div>
              <div className="list-item-detail__main-item list-item-detail__main-item-alternate row mx-0">
                  <div className="col-md-3 px-0">
                  <p className="list-item-detail__main-item__title">Payment Description</p>
                </div>
                <div className="col-md-9 px-0">
                  <p className="list-item-detail__main-item__details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id nisl urna. Aenean eget blandit magna, sit amet posuere erat. Integer posuere odio tincidunt velit ornare, feugiat venenatis</p>
                </div>
              </div>
              <div className="list-item-detail__main-item">
                  <div className="button button-md button--grey">Print Reciept</div>
                  <div className="button button-md button--grey">Report an issue</div>
                  <div className="button button-md button--grey">Refund customer</div>
              </div>
            </div>
          </div>
        </li>
        <li className="list-item  row mx-0">
          <div className="list-item__indicator list-item__indicator-open"></div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row">
              <div className="list-item__date">
                <p className="list-item__date-text">Jun 21, 2018</p>
              </div>
              <div className="list-item__status">
                <div className="list-item__status-container">
                  <div className="list-item__status-tag list-item__status-tag--open text--open">
                    Open
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-item__details col-md-4 px-0">
            <div className="list-item__details-container">
              <p className="list-item__details-product">Red shwad shoe</p>
              <p className="list-item__details-email">Tohbeey@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row justify-content-end">
              <div className="list-item__payment">
                <div className="list-item__payment-container">
                  <p className="list-item__payment-price">NGN 500,000</p>
                </div>
              </div>
              <div className="list-item__more">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </li>
        <li className="list-item row mx-0">
          <div className="list-item__indicator list-item__indicator-closed"></div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row">
              <div className="list-item__date">
                <p className="list-item__date-text">Jun 21, 2018</p>
              </div>
              <div className="list-item__status">
                <div className="list-item__status-container">
                  <div className="list-item__status-tag list-item__status-tag--closed text--closed">
                    Closed
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-item__details col-md-4 px-0">
            <div className="list-item__details-container">
              <p className="list-item__details-product">Ina Ankara Payment</p>
              <p className="list-item__details-email">Tohbeey@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row justify-content-end">
              <div className="list-item__payment">
                <div className="list-item__payment-container">
                  <p className="list-item__payment-price">NGN 20,000</p>
                </div>
              </div>
              <div className="list-item__more">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </li>
        <li className="list-item row mx-0">
          <div className="list-item__indicator list-item__indicator-awaiting"></div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row">
              <div className="list-item__date">
                <p className="list-item__date-text">Jun 21, 2018</p>
              </div>
              <div className="list-item__status">
                <div className="list-item__status-container">
                  <div className="list-item__status-tag list-item__status-tag--awaiting text--awaiting">
                    Awaiting Confirmation
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-item__details col-md-4 px-0">
            <div className="list-item__details-container">
              <p className="list-item__details-product">Ina Ankara Payment</p>
              <p className="list-item__details-email">Tohbeey@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row justify-content-end">
              <div className="list-item__payment">
                <div className="list-item__payment-container">
                  <p className="list-item__payment-price">NGN 200,000</p>
                </div>
              </div>
              <div className="list-item__more">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </li>
        <li className="list-item row mx-0">
          <div className="list-item__indicator list-item__indicator-flagged"></div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row">
              <div className="list-item__date">
                <p className="list-item__date-text">Jun 21, 2018</p>
              </div>
              <div className="list-item__status">
                <div className="list-item__status-container">
                  <div className="list-item__status-tag list-item__status-tag--flagged text--flagged">
                    Flagged
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-item__details col-md-4 px-0">
            <div className="list-item__details-container">
              <p className="list-item__details-product">Ina Ankara Payment</p>
              <p className="list-item__details-email">Tohbeey@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row justify-content-end">
              <div className="list-item__payment">
                <div className="list-item__payment-container">
                  <p className="list-item__payment-price">NGN 20,000</p>
                </div>
              </div>
              <div className="list-item__more">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </li>
        <li className="list-item row mx-0">
          <div className="list-item__indicator list-item__indicator-refund"></div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row">
              <div className="list-item__date">
                <p className="list-item__date-text">Jun 21, 2018</p>
              </div>
              <div className="list-item__status">
                <div className="list-item__status-container">
                  <div className="list-item__status-tag list-item__status-tag--refund text--refund">
                    Refund
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-item__details col-md-4 px-0">
            <div className="list-item__details-container">
              <p className="list-item__details-product">Red shwad shoe</p>
              <p className="list-item__details-email">Tohbeey@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row justify-content-end">
              <div className="list-item__payment">
                <div className="list-item__payment-container">
                  <p className="list-item__payment-price">NGN 20,000</p>
                </div>
              </div>
              <div className="list-item__more">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </li>
        <li className="list-item row mx-0">
          <div className="list-item__indicator list-item__indicator-initial"></div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row">
              <div className="list-item__date">
                <p className="list-item__date-text">Jun 21, 2018</p>
              </div>
              <div className="list-item__status">
                <div className="list-item__status-container">
                  <div className="list-item__status-tag list-item__status-tag--initial text--initial">
                    Initial
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-item__details col-md-4 px-0">
            <div className="list-item__details-container">
              <p className="list-item__details-product">Ina Ankara Payment</p>
              <p className="list-item__details-email">Tohbeey@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row justify-content-end">
              <div className="list-item__payment">
                <div className="list-item__payment-container">
                  <p className="list-item__payment-price">NGN 200,000</p>
                </div>
              </div>
              <div className="list-item__more">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </li>
        <li className="list-item row mx-0">
          <div className="list-item__indicator list-item__indicator-release"></div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row">
              <div className="list-item__date">
                <p className="list-item__date-text">Jun 21, 2018</p>
              </div>
              <div className="list-item__status">
                <div className="list-item__status-container">
                  <div className="list-item__status-tag list-item__status-tag--release text--release">
                    Release Payment
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-item__details col-md-4 px-0">
            <div className="list-item__details-container">
              <p className="list-item__details-product">Red shwad shoe</p>
              <p className="list-item__details-email">Tohbeey@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row justify-content-end">
              <div className="list-item__payment">
                <div className="list-item__payment-container">
                  <p className="list-item__payment-price">NGN 20,000</p>
                </div>
              </div>
              <div className="list-item__more">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </li>
        <li className="list-item row mx-0">
          <div className="list-item__indicator list-item__indicator-stop"></div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row">
              <div className="list-item__date">
                <p className="list-item__date-text">Jun 21, 2018</p>
              </div>
              <div className="list-item__status">
                <div className="list-item__status-container">
                  <div className="list-item__status-tag list-item__status-tag--stop text--stop">
                    Stop
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-item__details col-md-4 px-0">
            <div className="list-item__details-container">
              <p className="list-item__details-product">Ina Ankara Payment</p>
              <p className="list-item__details-email">Tohbeey@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row justify-content-end">
              <div className="list-item__payment">
                <div className="list-item__payment-container">
                  <p className="list-item__payment-price">NGN 500,000</p>
                </div>
              </div>
              <div className="list-item__more">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </li>
        <li className="list-item row mx-0">
          <div className="list-item__indicator list-item__indicator-fulfilled"></div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row">
              <div className="list-item__date">
                <p className="list-item__date-text">Jun 21, 2018</p>
              </div>
              <div className="list-item__status">
                <div className="list-item__status-container">
                  <div className="list-item__status-tag list-item__status-tag--fulfilled text--fulfilled">
                    Fulfilled
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-item__details col-md-4 px-0">
            <div className="list-item__details-container">
              <p className="list-item__details-product">Red shwad shoe</p>
              <p className="list-item__details-email">Tohbeey@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row justify-content-end">
              <div className="list-item__payment">
                <div className="list-item__payment-container">
                  <p className="list-item__payment-price">NGN 20,000</p>
                </div>
              </div>
              <div className="list-item__more">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
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