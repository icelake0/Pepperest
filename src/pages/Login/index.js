import React, { Fragment } from 'react';
import { withAuthLayout } from 'components/layouts';
import {
  AuthFooter, Input, PasswordInput, Button, FacebookButton, GoogleButton, Alert,
} from 'components/blocks';


const Login = (props) => (
  <>
    <div className="auth-panel">
      <div className="auth-panel__head">
        <h4 className="auth-panel__head-header">Login</h4>
        <p className="auth-panel__head-help">Sign into your account</p>
      </div>
      <div className="auth-panel-main">
        <form className="nsForm auth-panel-form">
          <Input
            name="email"
            type="email"
            placeholder="Enter Email Address"
            label="Email Address"
            id="email"
            value=""
            onChange={() => {}}
          />
          <PasswordInput
            name="password"
            placeholder="Enter Password"
            label="Password"
            id="password"
            value=""
            onChange={() => {}}
            hasForgotPasswordLabel
          />
          <Button
            type="submit"
            value="SIGN IN"
            name="sign_in"
            handleClick={() => {}}
          />
        </form>
        <div className="auth-panel-divider">
          <div className="auth-panel-divider__line" />
          <div className="auth-panel-divider__circle">
            <span className="auth-panel-divider-text">OR</span>
          </div>
          <div className="auth-panel-divider__line" />
        </div>
        <FacebookButton />
        <GoogleButton />
      </div>
    </div>
    <AuthFooter
      value="SIGN IN"
      url="/register"
      label="I DON'T HAVE AN ACCOUNT ?"
      isAlternate
    />
    <Alert
      message="your are successfully logged in"
    />
  </>
);

export default withAuthLayout(Login, {});
