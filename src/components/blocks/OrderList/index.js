import React from 'react';
import { OrderListItem, ListFooter, ListHeader, LoadingListItem } from 'components/blocks';
import PropTypes from 'prop-types';
import { getStringHash } from 'libs/utils';

const OrderList = ({ orders, meta, links, refreshData, loading,}) => {
  
  const gotoPage = (page) => {
    const params = {
      page : page
    };
    refreshData(params);
  }

  return (
    <>
      <div className="list">
       <ListHeader />
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
