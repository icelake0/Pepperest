import React, { useEffect } from 'react';
import { ProductList } from 'components/blocks';
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';

const ProductSingleMultiplePage = (props) => {

  useEffect(() => {
    if(!props.loaded && !props.loading) {
        getProducts();
    }
  });

  const getProducts = () => {
    props.onLoadProducts(props.token, props.user)
  };
  const refreshData = (params) => {
      props.onLoadProducts(props.token, props.user, params)
  };

  return <ProductList 
            products={props.products} 
            meta = {props.meta}
            links = {props.links}
            refreshData = {(params) => refreshData(params)}
            loading = {props.loading}
            productListActionLabel="Import Multiple Products" />
}

const mapStateToProps = state => {
  return {
      token: state.auth.token,
      user: state.auth.userInfo,
      products: state.products.products,
      meta: state.products.meta,
      links: state.products.links,
      links: state.products.links,
      loading: state.products.loading,
      loaded: state.products.loaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onLoadProducts: ( token, user, extraParams ) => dispatch( actions.loadProduct( token, user, extraParams )  )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( ProductSingleMultiplePage );
