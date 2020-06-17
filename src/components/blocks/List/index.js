/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListHeader,
  ListFooter,
  LoadingListItem,
} from 'components/blocks';
import { getStringHash } from 'libs/utils';

const List = ({ payments, meta, links, refreshData, loading }) => {

  const [page, setPage] = useState(null);

  const [query, setQuery] = useState('');
  
  const gotoPage = (page) => {
    setPage(page)
    const params = {
      page : page,
      query : query,
    };
    refreshData(params);
  }

  const search = (query) => {
    setQuery(query)
    const params = {
      page : page,
      query : query
    };
    refreshData(params);
  }

  return (
    <div className="list">
      <ListHeader search = {search} placeholder = "Search transaction no/code, customer/merchant email and description"/>
        <div className="list-body">
          <ul>
            {loading ? 
              <> 
                <LoadingListItem />
                <LoadingListItem />
                <LoadingListItem />
                <LoadingListItem />
                <LoadingListItem />
                <LoadingListItem /> 
              </>:
              payments
              && payments.map((payment, index) => (
                <ListItem
                  key={getStringHash(index)}
                  status={payment.status}
                  statusText={payment.statusText}
                  transactionId={payment.transactionId}
                  transactionDatetime={payment.transactionDatetime}
                  amount={payment.amount}
                  customerEmail={payment.customerEmail}
                  customerName={payment.customerName}
                  paymentDescription={payment.paymentDescription}
                  paymentName={payment.paymentName}
                  deliveryDatetime={payment.deliveryDatetime}
                  date={payment.date}
                />
              ))}
          </ul>
        </div>
      <ListFooter
        meta = {meta}
        links = {links}  
        gotoPage = { (page) => gotoPage(page)}
      />
    </div>
  );
};

List.defaultProps = {
  payments: [],
};

List.propTypes = {
  payments: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      statusText: PropTypes.string.isRequired,
      transactionId: PropTypes.string.isRequired,
      customerName: PropTypes.string.isRequired,
      transactionDate: PropTypes.string.isRequired,
      transactionDatetime: PropTypes.string.isRequired,
      paymentName: PropTypes.string.isRequired,
      deliveryDatetime: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      customerEmail: PropTypes.string.isRequired,
      paymentDescription: PropTypes.string.isRequired,
    }),
  ),
};

export default List;
