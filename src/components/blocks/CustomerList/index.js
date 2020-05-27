import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import { CustomerListItem, ListHeader, ListFooter, LoadingListItem } from 'components/blocks';
import { getStringHash } from 'libs/utils';

const CustomerList = ({ productListActionLabel, loading, customers, meta, links, refreshData }) => {

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
      <ListHeader search = {search}/>
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
            </>:customers && customers.map((customer, index) => (
              <CustomerListItem
                key={getStringHash(index)}
                status={customer.status}
                phone={customer.phone}
                customerName={customer.customerName}
                paymentName={customer.paymentName}
                customerEmail={customer.customerEmail}
                totalTransactions={customer.totalTransactions}
                totalSpent={customer.totalSpent}
                recentTransactions={customer.recentTransactions}
              />
          ))}
        </ul>
      </div>
      <ListFooter
        meta = {meta}
        links = {links}  
        gotoPage = { (page) => gotoPage(page)} />
    </div>
  );
};

CustomerList.defaultProps = {
  customers: [],
};

CustomerList.propTypes = {
  customers: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      customerName: PropTypes.string.isRequired,
      paymentName: PropTypes.string.isRequired,
      totalSpent: PropTypes.number.isRequired,
      customerEmail: PropTypes.string.isRequired,
    }),
  ),
};

export default CustomerList;
