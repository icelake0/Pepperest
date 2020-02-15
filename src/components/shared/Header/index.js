import React from 'react'
import {NavLink} from 'components/blocks'
import {Avatar} from 'components/shared'

const navLinks = [
    {
        value: 'Payment',
        url: '/payments'
    },
    {
        value: 'Product/Service',
        url: '/products'
    },
    {
        value: 'Customers',
        url: '/customers'
    },
    {
        value: 'My Orders',
        url: '/orders'
    }];

const Header = props => (
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
        {navLinks.map(({ value, url }, index) => (
          <NavLink key={index} value={value} url={url} />
        ))}
      </nav>
      <div className="d-flex flex-row align-items-center">
        <Avatar imageUrl="/assets/images/avatar.jpg" avatarSize="xs" />
        <div className="nsHeader-nav__item-profile">
          <li className="nsHeader-nav__item nsHeader-nav__item-alternate">
            My Account
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
          >
            <path
              fill="#868686"
              fillRule="evenodd"
              stroke="#868686"
              d="M12.877 1.116a.446.446 0 0 0-.6 0L7.007 6.053 1.724 1.116a.446.446 0 0 0-.6 0 .378.378 0 0 0 0 .56l5.572 5.208a.448.448 0 0 0 .6 0l5.57-5.208a.371.371 0 0 0 .011-.56z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default Header;