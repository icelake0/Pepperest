/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { InputWithoutLabel } from 'components/blocks';
import { ProfileForm, ChangeAccountTypeForm } from 'components/forms'

const ProfilePage = (props) => (
  <div className="profile-settings">
    <ProfileForm />
    <ChangeAccountTypeForm />
    <div className="pcard">
      <div className="pcard-header">
        <h3 className="pcard-header__title">Change Password  </h3>
      </div>
      <div className="pcard-body">
        <div className="pcard-form_control-wrapper">
          <div className="pcard-form_control">
            <div className="pModal-form__label-control">
              <label htmlFor="currency" className="pModal-form__label">
                Old Password
              </label>
            </div>
          </div>
          <div className="pcard-form_control">
            <InputWithoutLabel
              name="oldPassword"
              type="password"
              placeholder=""
              id="oldPassword"
              value="mylocarson@gmail.com"
              onChange={() => {}}
              classNames="nsForm-input__alternate"
            />
          </div>
        </div>
        <div className="pcard-form_control-wrapper">
          <div className="pcard-form_control">
            <div className="pModal-form__label-control">
              <label htmlFor="currency" className="pModal-form__label">
                Confirm Password
              </label>
            </div>
          </div>
          <div className="pcard-form_control">
            <InputWithoutLabel
              name="newPassword"
              type="password"
              placeholder=""
              id="newPassword"
              value="********"
              onChange={() => {}}
              classNames="nsForm-input__alternate"
            />
          </div>
        </div>
        <div className="pcard-form_control-wrapper">
          <div className="pcard-form_control">
            <div className="pModal-form__label-control">
              <label htmlFor="currency" className="pModal-form__label">Confirm New Password</label>
            </div>
          </div>
          <div className="pcard-form_control">
            <InputWithoutLabel
              name="cfmPassword"
              type="password"
              placeholder=""
              id="cfmPassword"
              value="********"
              onChange={() => {}}
              classNames="nsForm-input__alternate"
            />
          </div>
        </div>
      </div>
      <div className="pcard-footer">
        <div className="button button-md button--neutral">Save Changes</div>
      </div>
    </div>
  </div>
);

export default ProfilePage;

