import React, {Fragment} from 'react';
import { withAuthLayout } from 'components/layouts';
import { Input, Button, AuthFooter } from 'components/blocks';

const ForgotPassword = props => (
  <Fragment>
    <div className="auth-panel auth-panel--alternate">
      <div className="auth-panel__head">
        <h4 className="auth-panel__head-header">Forgot Password?</h4>
        <p className="auth-panel__head-help">
          Request for a password reset. An email will be sent to you. Forgot
          Password?
        </p>
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
          <Button
            type="submit"
            value="SEND RECOVERY EMAIL"
            name="send_recovery"
            handleClick={() => {}}
          />
        </form>
      </div>
    </div>
    <AuthFooter
      value="SIGN IN"
      url="/login"
      label="Already have an account ?"
      isAlternate={false}
    />
  </Fragment>
);

export default withAuthLayout(ForgotPassword, {});
