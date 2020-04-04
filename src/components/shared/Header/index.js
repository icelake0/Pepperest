/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { NavLink } from 'components/blocks';
import { Avatar } from 'components/shared';
import { DownChevron, HamburgerIcon } from 'components/vectors';

const navLinks = [
  {
    title: 'Payment',
    url: '/payments',
    exact: false,
  },
  {
    title: 'Product/Service',
    url: '/products',
    exact: false,
  },
  {
    title: 'Customers',
    url: '/customers',
    exact: false,
  },
  {
    title: 'My Orders',
    url: '/orders',
    exact: false,
  },
];

const Header = (props) => {
  const [state, setState] = useState({ isMobileMenuOpen: false });
  return (
    <div className="nsHeader">
      <div className="nsHeader-main">
        <a className="nsHeader-logo" href="/">
          <img
            src="/assets/images/logo/pepperest-logo-white.png"
            srcSet="/assets/images/logo/pepperest-logo-white@2x.png 2x,
                            /assets/images/logo/pepperest-logo-white@3x.png 3x"
            alt="logo"
          />
        </a>
        <nav className="nsHeader-nav">
          {navLinks.map(({ title, url, exact }, index) => (
            <NavLink
              key={index}
              title={title}
              url={url}
              classNames="nsHeader-nav__item"
              exact={exact}
            />
          ))}
        </nav>
        <div className="nsHeader-nav__item-profile__wrapper">
          <div role="button" tabIndex={0} onClick={() => { setState({ ...state, isMobileMenuOpen: true }); }}>
            <HamburgerIcon />
          </div>
          <Avatar imageUrl="/assets/images/avatar.jpg" avatarSize="xs" />
          <div className="nsHeader-nav__item-profile">
            <li className="nsHeader-nav__item nsHeader-nav__item-alternate">
              My Account
            </li>
            <DownChevron />
          </div>
          <div
            className={`nsHeader-profile__dropdown-overlay ${state.isMobileMenuOpen ? 'd-block' : ''}`}
            onClick={() => { setState({ ...state, isMobileMenuOpen: false }); }}
          />
          <div className={`nsHeader-profile__dropdown ${state.isMobileMenuOpen ? 'd-block' : ''}`}>
            <div className="dropdown__user-details">
              <Avatar imageUrl="/assets/images/avatar.jpg" avatarSize="md" />
              <div>
                <p className="dropdown__user-details__email">
                  Mylocarson@gmail.com
                </p>
                <p className="dropdown__user-details__role">Member</p>
              </div>
            </div>
            <div className="dropdown-quick__links">
              <ul className="dropdown__list">
                <a
                  href="/payments"
                  className="dropdown__list-item"
                >
                  Payment
                </a>
                <a href="/products" className="dropdown__list-item">
                  Products /Services
                </a>
                <a href="/customers" className="dropdown__list-item">
                  Customers
                </a>
                <a href="/orders" className="dropdown__list-item">
                  My Orders
                </a>
              </ul>
            </div>
            <div className="dropdown__base">
              <div className="dropdown__list-header">MY ACCOUNT</div>
              <ul className="dropdown__list">
                <a
                  href="/user-account/notifications"
                  className="dropdown__list-item"
                >
                  Notification
                  <span className="mBadge mBadge--secondary">4</span>
                </a>
                <a href="/user-account/profile" className="dropdown__list-item">
                  Settings
                </a>
                <a href="/user-account/profile" className="dropdown__list-item">
                  Payout
                </a>
                <a href="/user-account/loans" className="dropdown__list-item">
                  Request Loan
                </a>
                <a href="/" className="dropdown__list-item">
                  Logout
                </a>
              </ul>
              <div className="dropdown__list-header">QUICK LINK</div>
              <ul className="dropdown__list">
                <a href="/user-account/profile" className="dropdown__list-item">
                  Change Password
                </a>
                <a
                  href="/user-account/bank-account"
                  className="dropdown__list-item"
                >
                  Add a Bank Account
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
