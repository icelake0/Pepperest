import React, { useState }  from 'react';
import { OrderListItem, ListFooter, ListHeader, LoadingListItem } from 'components/blocks';
import PropTypes from 'prop-types';
import { getStringHash } from 'libs/utils';

const OrderList = ({ orders, meta, links, refreshData, loading,}) => {
  
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
    <>
      <div className="list">
      <ListHeader search = {search}/>
        <div className="list-body">
          { loading ? 
            <> 
              <LoadingListItem />
              <LoadingListItem />
              <LoadingListItem />
              <LoadingListItem />
              <LoadingListItem />
              <LoadingListItem /> 
            </>:
            orders && orders.map(({
            status, date, address, orderId, cost, customerEmail, customerName
          }) => (
            <OrderListItem
              key={getStringHash(status)}
              status={status}
              date={date}
              address={address}
              orderId={orderId}
              customerEmail = {customerEmail}
              customerName = {customerName}
              cost={cost}
            />
          ))}

        </div>
        <ListFooter
          meta = {meta}
          links = {links}  
          gotoPage = { (page) => gotoPage(page)}
        />
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
      orderId: PropTypes.any.isRequired,
      cost: PropTypes.any.isRequired,
    }),
  ).isRequired,
};
export default OrderList;
