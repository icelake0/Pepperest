import React from 'react'
import {FacebookButtonAlternate, InstagramButton} from 'components/blocks';

const ProductInstagramPage = props => {
    return (
      <div className="d-flex flex-column align-items-center">
        <div className="header--nav">
          <div className="header--nav-dot active"></div>
          <div className="header--nav-progress active"></div>
          <div className="header--nav-dot"></div>
          <div className="header--nav-progress"></div>
          <div className="header--nav-dot"></div>
        </div>
        <ul className="header--nav__menu">
          <li className="header--nav__menu-item">Instagram / Facebook</li>
          <li className="header--nav__menu-item">Select Product</li>
          <li className="header--nav__menu-item">Publish Product</li>
        </ul>
        <div className="instagram-page__main">
          <div className="instagram-page__main-content">
            <InstagramButton />
            <FacebookButtonAlternate />
          </div>
        </div>
      </div>
    );
}

export default ProductInstagramPage;;