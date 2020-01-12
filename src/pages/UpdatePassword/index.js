import React, {Fragment} from 'react';
import { withAuthLayout } from 'components/layouts';
import { PasswordInput, Button, AuthFooter } from 'components/blocks';
const UpdatePassword = props => (
  <Fragment>
    <div className="auth-panel auth-panel--alternate">
      <div className="auth-panel__head">
        <h4 className="auth-panel__head-header">Forgot Password?</h4>
        <p className="auth-panel__head-help auth-panel__head-help--alternate">
          Enter your new password details. Passwords must be at least 6
          characters long.
        </p>
      </div>
      <div className="auth-panel-main">
        <form className="nsForm auth-panel-form">
          <PasswordInput
            name="password"
            placeholder="Enter password"
            label="New Password"
            id="password"
            value=""
            hasIcon={false}
            onChange={() => {}}
          />
          <PasswordInput
            name="cfm_password"
            placeholder="Enter password"
            label="New Password"
            id="cfm_password"
            value=""
            hasIcon={false}
            onChange={() => {}}
          />
          <Button
            type="submit"
            value="RESET PASSWORD"
            name="recover_pwd"
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

export default withAuthLayout(UpdatePassword, {});
