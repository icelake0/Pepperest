import React from 'react';
import { ProductListItem, ListHeader, ListFooter, LoadingListItem } from 'components/blocks';
import { getStringHash } from 'libs/utils';


const ProductList = ({ productListActionLabel, loading, products, meta, links, refreshData}) => {

  const gotoPage = (page) => {
    const params = {
      page : page
    };
    refreshData(params);
  }

  return (
    <div className="list">
      <ListHeader
        isProduct
        productListActionLabel={productListActionLabel}
      />
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
            products
              && products.map((product, index) => (
                <ProductListItem
                  key={getStringHash(index)}
                  date={product.date}
                  productName={product.productName}
                  productDescription={product.productDescription}
                  amount={product.amount}
                  productID={product.productId}
                  dateCreated={product.dateCreated}
                  deliveryDate={product.deliveryDate}
                  transactions={product.transactions}
                  recentTransactions={product.recentTransactions}
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

export default ProductList;
