import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { ListItemDetails} from 'components/blocks'
import { getStatusTextClass, getIndicatorClass, getStatusTagClass, getStatusText} from 'libs/utils';


const ListItem = props => {
    const [isListDetailsOpen, setListDetailsOpen] = useState(false);
    const updateListDetailsOpen = value => setListDetailsOpen(value);

    return (
      <Fragment>
        <div className="list-item row mx-0">
          <div
            className={`list-item__indicator ${getIndicatorClass(
              props.status
            )}`}
          ></div>
          <div className="col-md-4 px-0">
            <div className="d-flex flex-row">
              <div className="list-item__date">
                <p className="list-item__date-text">{props.date}</p>
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
                  {props.status.toLowerCase() === 'pending' ? (
                    <p
                      className={`list-item__status-text ${getStatusTextClass(
                        props.status
                      )}`}
                    >
                      {props.statusText.substring(
                        props.statusText.indexOf(' ') + 1
                      )}
                    </p>
                  ) : null}
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
              <div className="list-item__payment">
                <div className="list-item__payment-container">
                  {props.status.toLowerCase() === 'pending' ? (
                    <div className="button button-md button--orange">
                      Make Payment
                    </div>
                  ) : null}
                  <p className="list-item__payment-price">NGN {props.amount}</p>
                </div>
              </div>
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
          <ListItemDetails {...props} onClick={updateListDetailsOpen} />
        ) : null}
      </Fragment>
    );
    
};

ListItem.propTypes = {
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  statusText: PropTypes.string.isRequired,
  transaction_id: PropTypes.string.isRequired,
  customer_name: PropTypes.string.isRequired,
  transaction_date: PropTypes.string.isRequired,
  transaction_datetime: PropTypes.string.isRequired,
  payment_name: PropTypes.string.isRequired,
  delivery_datetime: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  customer_email: PropTypes.string.isRequired,
  payment_description: PropTypes.string.isRequired
};

export default ListItem