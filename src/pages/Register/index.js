/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { withAuthLayout } from 'components/layouts';
import { getStringHash } from 'libs/utils';
import {
  AuthFooter, Input, PasswordInput, SelectInput, SelectInputWithoutLabel, FeatureListItem, Button,
} from 'components/blocks';
import { DownChevron } from 'components/vectors';

const FEATURES = [
  '24/7 Customer Care Support',
  'Fastest refunds',
  'Zero setup costs',
  'Merchant Financing available',
];
const OPTIONS = [
  { value: '', label: 'View less about pepperest' },
  { value: 'view-more', label: 'View more about pepperest' },
];
const Register = () => {
  const [viewMore, setViewMore] = useState(false);
  const updateViewMore = () => setViewMore(!viewMore);
  return (
    <>
      <div className="auth-register">
        <div className="auth-register__info-section">
          <h2 className="auth-register__info-section-header">
            Start selling with Pepperest
          </h2>
          <p
            className={`auth-register__info-section-detail ${
              !viewMore
                ? 'hide-mobile'
                : 'show-mobile-block'
            }`}
          >
            Get on board with Pepperest and start selling to your customers or
            paying merchants in just a few minutes
          </p>
          <div>
            <ul
              className={`auth-register__info-section-feature__list ${
                !viewMore
                  ? 'hide-mobile'
                  : 'show-mobile-flex'
              }`}
            >
              {FEATURES.map((feature, index) => (
                <FeatureListItem key={getStringHash(index)} value={feature} />
              ))}
            </ul>
          </div>
          <div className="button button--orange-outline d-flex d-lg-none flex-row justify-content-between px-3 mt-4" onClick={() => { updateViewMore(); }}>
            { !viewMore ? 'View more about pepperest' : 'View less about pepperest'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="8"
              viewBox="0 0 14 8"
            >
              <path
                fill="#FF8900"
                fillRule="evenodd"
                stroke="#FF8900"
                d="M12.877 1.116a.446.446 0 00-.6 0L7.007 6.053 1.724 1.116a.446.446 0 00-.6 0 .378.378 0 000 .56l5.572 5.208a.448.448 0 00.6 0l5.57-5.208a.371.371 0 00.011-.56z"
              />
            </svg>
          </div>
        </div>
        <div className="auth-register__form-section">
          <form className="nsForm">
            <SelectInput
              label="Choose an Pepperest Account"
              options={[]}
              name="account"
              id="account"
              value=""
              defaultValue=""
              onChange={() => {}}
            />
            <Input
              name="business_name"
              type="text"
              placeholder="Your Personal / Business Name"
              label="Personal / Business Name"
              id="business_name"
              onChange={() => {}}
              value=""
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Personal / Business Email"
              label="Personal / Business Email"
              id="email"
              onChange={() => {}}
              value=""
            />
            <PasswordInput
              name="password"
              placeholder="Strong password"
              id="password"
              value=""
              onChange={() => {}}
              label="Password"
            />
            <PasswordInput
              name="confirm_password"
              placeholder="Strong password"
              id="cfm_password"
              value=""
              onChange={() => {}}
              label="Confirm Password"
            />
            <Button
              type="submit"
              value="CREATE ACCOUNT"
              name="sign_up"
              handleClick={() => {}}
            />
          </form>
          <p className="auth-terms-condition">
            I agree to the
            {' '}
            <a href="/">Pepperest Agreement</a>
            {' '}
            and
            {' '}
            <a href="/">Terms</a>
            .
          </p>
        </div>
      </div>
      <AuthFooter
        value="SIGN IN"
        url="/login"
        label="ALREADY HAVE AN ACCOUNT ?"
        isAlternate={false}
      />
    </>
  );
};

export default withAuthLayout(Register, {});
