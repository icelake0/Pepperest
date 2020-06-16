/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MyCartButton = (props) => (
    <Link to="/cart">
        <div role="button" tabIndex="0" className="button button-md button--orange d-flex flex-row" >
            My Cart
            <div className="mBadge-alt">{props.cartCount}</div>
        </div>
    </Link>
);

const mapStateToProps = state => {
    return {
        cartCount: state.cart?.cart?.items?.length || 0
    };
};
  
export default connect(mapStateToProps, null)(MyCartButton);
