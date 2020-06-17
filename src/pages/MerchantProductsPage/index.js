import React, {useEffect} from 'react';
import { withDefaultLayout } from 'components/layouts';
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';
import { MerchantProductList } from 'components/blocks'
import {
  useParams
} from "react-router-dom";

const config = {
  hasAlternateHeader: false,
  hasCommonHeader: true,
  showCart: true,
  commonHeaderTitle: null,
  showCommonHeaderOnDesktop: true,
  links: [],
  isSettings: false,
  page: 'merchantProducts',
};
const MerchantProductsPage = (props) => {
  const { merchantCode } = useParams();

  useEffect(() => {
    if(!props.loaded && !props.loading && !props.error) {
      refreshData({});
    }
  });

  const refreshData = (params) => {
      params.merchantCode = merchantCode;
      props.onLoadMerchantStoreProduct(props.token, props.user, params)
  };

  return <div className="merchant">
          <MerchantProductList 
            products={props.products} 
            meta = {props.meta}
            links = {props.links}
            refreshData = {(params) => refreshData(params)}
            loading = {props.loading}
            productListActionLabel="Import Multiple Products" />
        </div>
}
const mapStateToProps = state => {
  return {
      token: state.auth.token,
      user: state.auth.userInfo,
      products: state.merchantStore.products,
      meta: state.merchantStore.meta,
      links: state.merchantStore.links,
      links: state.merchantStore.links,
      loading: state.merchantStore.loading,
      loaded: state.merchantStore.loaded,
      error: state.merchantStore.loaded,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadMerchantStoreProduct: ( token, user, params ) => dispatch( actions.loadMerchantStoreProduct( token, user, params )  )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( withDefaultLayout(MerchantProductsPage, config) );
