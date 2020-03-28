import React from 'react';
import { NavLink } from 'components/blocks';
import { getStringHash } from 'libs/utils';
import {
  Globe,
  OrangeRightArrowIcon,
  GrowthIllustrationTop,
  GrowthIllustrationBottom,
  FlutterwaveIcon
} from 'components/vectors';

const navLinks = [
  {
    title: 'Solutions',
    url: '/solutions',
    exact: false,
  },
  {
    title: 'Why Pepperest',
    url: '/why',
    exact: false,
  },
  {
    title: 'Pricing',
    url: '/pricing',
    exact: false,
  },
  {
    title: 'Support',
    url: '/support',
    exact: false,
  },
];

const HomePage = (props) => (
  <>
    <div className="homepage">
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
            {navLinks.map(({ title, url, exact }) => (
              <NavLink
                key={getStringHash(title)}
                title={title}
                url={url}
                classNames="nsHeader-nav__item"
                exact={exact}
              />
            ))}
          </nav>
          <div className="nsHeader-nav--auth">
            <div className="button button-md button-lg button--transparent">
              Login
            </div>
            <div className="button button-md button-auto button-lg button--white">
              Create Account
            </div>
          </div>
        </div>
      </div>
      <div className="max-container hero-wrapper">
        <div className="hero">
          <div className="row">
            <div className="col-md-4">
              <div className="hero-details">
                <div className="hero-details--attention">
                  <div className="hero-details--attention-badge">New</div>
                  <p className="hero-details--attention-text">
                    Upgrade to Merchant Portal in 4 minutes
                  </p>
                </div>
                <h2 className="title">
                  Accept online payments today. Start growing your business with
                  effortless payments.
                </h2>
                <p className="info">
                  Explore how Pepperest can help you do more with your
                  business—no matter what you sell.
                </p>
                <div className="hero-actions">
                  <div className="button button--orange button--no-hover">
                    Create Invoice
                  </div>
                  <div className="button button--gray">View Fair Pricing</div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <Globe />
            </div>
          </div>
        </div>
      </div>
      <div className="max-container">
        <div className="section-one">
          <div className="section-one__content-section">
            <h3 className="title">
              Empowering independent business owners everywhere
            </h3>
            <p className="info">
              One platform that lets you sell wherever your customers
              are—online, in‑person, and everywhere in‑between.
            </p>
            <ul className="section-one__list">
              <li className="section-one__list-item">Customer</li>
              <li className="section-one__list-item">Product / Services</li>
              <li className="section-one__list-item">My Orders</li>
              <li className="section-one__list-item">Settings</li>
              <li className="section-one__list-item text--orange">
                Payment
                <OrangeRightArrowIcon />
              </li>
              <li className="section-one__list-item">Create an invoice</li>
            </ul>
          </div>
          <div className="section-one__image-section">
            <img
              src="/assets/images/pepperest.png"
              srcSet="/assets/images/pepperest@2x.png 2x,
             /assets/images/pepperest@3x.png 3x"
              className="Bitmap"
              alt="pepperest dashboard"
            />
          </div>
        </div>
      </div>
      <div className="max-container">
        <div className="section-two">
          <div className="max-content">
            <div className="row">
              <div className="col-md-5 mr-auto">
                <div className="section-two__image-wrapper">
                  <div className="section-two__image-container">
                    <img
                      src="/assets/images/guy.jpg"
                      className="section-two__image"
                      alt="user"
                    />
                  </div>
                  <div className="mycard">
                    <div className="item-wrapper" />
                    <p className="item__title">Phoebe Brown Sandal</p>
                    <p className="item__price">NGN 244,213 </p>
                    <div className="mycard-footer">
                      <div className="mycard-footer-content">
                        Payment Received
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="section-two__main-content">
                  <h3 className="title">
                    Do you sell on social media, Jiji, OLX or messaging
                    platforms?
                  </h3>
                  <p className="info">
                    Add a mobile friendly, secure checkout experience to your
                    business page and discover 60% increase in sales
                    {' '}
                  </p>
                  <div className="mycard">
                    <div className="mycard-header">
                      <div className="mycard-header__title">
                        Make secure and safe payment anytime, any day.
                      </div>
                    </div>
                    <div className="mycard-body">
                      <p className="mycard-body-content">
                        Your customers get the ability to pay for products
                        before delivery but only credit your account when they
                        confirm delivery.
                      </p>
                    </div>
                  </div>
                  <div className="mycard">
                    <div className="mycard-header">
                      <div className="mycard-header__title">
                        Refund guaranteed incase merchant fails to deliver.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-container">
        <div className="section-three">
          <div className="section-three__content-section">
            <h3 className="title">
              Grow your business on pepperest with this four easy steps
            </h3>
            <ul className="section-one__list">
              <li className="section-one__list-item">Generate Payment Link</li>
              <li className="section-one__list-item">Customer Pay</li>
              <li className="section-one__list-item">You Deliver Product</li>
              <li className="section-one__list-item">You Get Paid</li>
              <li className="section-one__list-item text--orange">
                Successful Transaction
                <OrangeRightArrowIcon />
              </li>
            </ul>
            <div className="section-three__content-section__footer">
              <div className="button button-md button-lg button--orange">
                Create an Invoice
              </div>
              <div className="button button-md button-auto button-lg button--white text--gray">
                View Fair Pricing
              </div>
            </div>
          </div>
          <div className="section-three__other-section">
            <p className="info">
              Bring your in-store and online sales together with pepperest. Gain
              insights about your business from one view so you can work
              smarter, move faster, and think bigger.
            </p>
            <div className="image-wrapper">
              <div className="img">
                <img
                  src="/assets/images/group-9.png"
                  srcSet="/assets/images/group-9@2x.png 2x,
             /assets/images/group-9@3x.png 3x"
                  className="Group-9"
                  alt="first"
                />
              </div>
              <div className="img">
                <img
                  src="/assets/images/group-11.png"
                  srcSet="/assets/images/group-11@2x.png 2x,
             /assets/images/group-11@3x.png 3x"
                  className="Group-11"
                  alt="first"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-content">
        <div className="section-four">
          <div className="row">
            <div className="col-md-5 mr-auto">
              {/* <div className="section-fou"></div> */}
              <h3 className="section-four__title">
                Promote and sell on multiple sales channels all with Pepperest.
              </h3>
              <ul className="section-four__list">
                <li className="section-four__list-item">
                  <h6 className="section-four__list-item-title">
                    Zero Setup Fee
                  </h6>
                  <p className="section-four__list-item-info">
                    No need to pay to get started with Pepperest. Simply fill
                    out the form
                  </p>
                </li>
                <li className="section-four__list-item">
                  <h6 className="section-four__list-item-title">
                    No Integration Needed
                  </h6>
                  <p className="section-four__list-item-info">
                    There's no integration required to use Pepperest. Signup and
                    start
                  </p>
                </li>
                <li className="section-four__list-item">
                  <h6 className="section-four__list-item-title">
                    24/7 Support
                  </h6>
                  <p className="section-four__list-item-info">
                    Need help with Pepperest? We're always one click away
                  </p>
                </li>
                <li className="section-four__list-item">
                  <h6 className="section-four__list-item-title">
                    Automated Refunds
                  </h6>
                  <p className="section-four__list-item-info">
                    No need to fill out bank details or customer info. Refunds
                    are instant
                  </p>
                </li>
                <li className="section-four__list-item">
                  <h6 className="section-four__list-item-title">
                    Dispute Resolution
                  </h6>
                  <p className="section-four__list-item-info">
                    Need help with Pepperest? We're always one click away
                  </p>
                </li>
                <li className="section-four__list-item">
                  <h6 className="section-four__list-item-title">
                    Instant Payouts
                  </h6>
                  <p className="section-four__list-item-info">
                    No need to fill out bank details or customer info. Refunds
                    are instant
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <p className="section-four__list-item-info">
                  Use a single dashboard to manage orders, shipping, and
                  payments anywhere you go. Gain the insights and knowledge you
                  need to grow, Pepperest manages everything. Start your
                  business to with pepperest.
                </p>
                <div className="section-four__illustration">
                  <GrowthIllustrationTop />
                  <GrowthIllustrationBottom />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-content">
        <div className="section-five">
          <div className="row">
            <div className="col-md-5 mr-auto">
              <div className="mycard">
                <div className="mycard-info">FREE SETUP</div>
                <div className="mycard-header">
                  <div className="mycard-header__circle" />
                  <p className="mycard-header__text">Pay Per Transaction</p>
                </div>
                <div className="mycard-body">
                  <p className="mycard-body__text">
                    Pepperest has no setup fees or hidden costs. All you pay for
                    a transaction is stated below.
                    {' '}
                  </p>
                </div>
                <div className="mycard-footer">
                  <p className="mycard-footer__text">2.5% + NGN 100</p>
                </div>
              </div>
              <div className="section-five__logo">
                <FlutterwaveIcon />
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <h3 className="section-five__title">
                  One Simple Pricing Plan for All Merchants
                </h3>
                <p className="section-five__info">
                  Our customers love the comfort that comes with six-months of
                  included support. Our dedicated support forum makes
                  interacting with us hassle-free and efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="max-container homepage-footer">
      <div className="max-content">
        <div className="homepage-footer-container">
          <div className="homepage-footer__header">
            <div className="row">
              <div className="col-md-5 mr-auto">
                <h3 className="title">Ready to get started?</h3>
                <p className="info">Get in touch or create an account.</p>
              </div>
              <div className="col-md-4">
                <div className="homepage-footer__header-actions">
                  <div className="button button-md button-lg button--orange">
                    Create an Invoice
                  </div>
                  <div className="button button-md button-auto button-lg button--white text--gray">
                    View Fair Pricing
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="homepage-footer-content">
            <div className="row">
              <div className="col-md-3">
                <ul className="footer-list">
                  <li className="footer-list-item">LAGOS ADDRESS</li>
                  <li className="footer-list-item">
                    126 Akin Oladelaji Street, Maryland, Ikeja, Lagos, Nigeria
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul className="footer-list">
                  <li className="footer-list-item">SOLUTIONS</li>
                  <li className="footer-list-item">Marketplace Payments</li>
                  <li className="footer-list-item">Invoice Payments</li>
                  <li className="footer-list-item">Real Time Payments</li>
                  <li className="footer-list-item">Outbound Payouts</li>
                </ul>
              </div>
              <div className="col-md-2">
                <ul className="footer-list">
                  <li className="footer-list-item">COMPANY</li>
                  <li className="footer-list-item">About</li>
                  <li className="footer-list-item">Careers</li>
                  <li className="footer-list-item">Blog</li>
                  <li className="footer-list-item">Press Kit</li>
                  <li className="footer-list-item">Terms of Service</li>
                  <li className="footer-list-item">Privacy Policy</li>
                </ul>
              </div>

              <div className="col-md-2">
                <ul className="footer-list">
                  <li className="footer-list-item">DOCUMENTATION</li>
                  <li className="footer-list-item">Support</li>
                  <li className="footer-list-item">Docs</li>
                  <li className="footer-list-item">API Reference</li>
                  <li className="footer-list-item">Status</li>
                </ul>
              </div>

              <div className="col-md-2">
                <ul className="footer-list">
                  <li className="footer-list-item">CONNECT</li>
                  <li className="footer-list-item">Linkedin</li>
                  <li className="footer-list-item">Twitter</li>
                  <li className="footer-list-item">Facebook</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="homepage-footer-base">
            <p className="homepage-footer-base-text">© 2020 Pepperest Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default HomePage;
