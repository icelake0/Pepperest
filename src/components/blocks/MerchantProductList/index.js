import React, { useState }  from 'react';
import { ProductListItem, ListHeader, ListFooter, LoadingListItem, MerchantProductCard} from 'components/blocks';
import { getStringHash } from 'libs/utils';


const MerchantProductList = ({ productListActionLabel, loading, products, meta, links, refreshData}) => {

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
        <ListHeader
            search = {search}
            productListActionLabel={productListActionLabel}
            placeholder = "Search product name and product id"
        />
      <div className="">
        <ul className="row">
        {loading ? 
              <> 
                <LoadingListItem />
                <LoadingListItem />
                <LoadingListItem />
                <LoadingListItem />
                <LoadingListItem />
                <LoadingListItem /> 
              </>:
            products
              && products.map((product, index) => (
                <MerchantProductCard 
                  key={getStringHash(index)}
                  product={product}
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

export default MerchantProductList;
