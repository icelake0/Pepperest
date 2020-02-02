import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {
  getStatusTextClass,
  getIndicatorClass,
  getStatusTagClass,
  getStatusText
} from 'libs/utils';
import {CustomerListItemDetails} from 'components/blocks'

const CustomerListItem = props => {
  const [isListDetailsOpen, setListDetailsOpen] = useState(false);
  const updateListDetailsOpen = value => setListDetailsOpen(value);

  return (
    <Fragment>
      <div className="list-item row mx-0">
        <div
          className={`list-item__indicator ${getIndicatorClass(props.status)}`}
        ></div>
        <div className="col-md-4 px-0">
          <div className="d-flex flex-row">
            <div className="list-item__date">
              <p className="list-item__date-text">{props.phone}</p>
            </div>
            <div className="list-item__status">
              <div className="list-item__status-container">
                <div
                  className={`list-item__status-tag ${getStatusTagClass(
                    props.status
                  )} ${getStatusTextClass(props.status)}`}
                >
                  {getStatusText(props.status)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-item__details col-md-4 px-0">
          <div className="list-item__details-container">
            <p className="list-item__details-product">{props.payment_name}</p>
            <p className="list-item__details-email">{props.customer_email}</p>
          </div>
        </div>
        <div className="col-md-4 px-0">
          <div className="d-flex flex-row justify-content-end">
            <div
              className="list-item__more"
              onClick={() => {
                setListDetailsOpen(true);
              }}
            >
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>
      {isListDetailsOpen ? (
        <CustomerListItemDetails
          status={props.status}
          recent_transactions={props.recent_transactions}
          phone={props.phone}
          total_spent={props.total_spent}
          total_transactions={props.total_transactions}
          customer_email={props.customer_email}
          customer_name={props.customer_name}
          onClick={updateListDetailsOpen}
        />
      ) : null}
    </Fragment>
  );
};

CustomerListItem.propTypes = {
  status: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  customer_name: PropTypes.string.isRequired,
  payment_name: PropTypes.string.isRequired,
  customer_email: PropTypes.string.isRequired,
  total_transactions: PropTypes.string.isRequired,
  total_spent: PropTypes.string.isRequired,
  recent_transactions: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string.isRequired,
      datetime: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CustomerListItem;