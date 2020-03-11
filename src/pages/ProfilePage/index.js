/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { InputWithoutLabel, TextArea, SelectInputWithoutLabel } from 'components/blocks';

const ProfilePage = () => (
  <div className="profile-settings">
    <div className="pcard">
      <div className="pcard-header">
        <h3 className="pcard-header__title">Profile</h3>
      </div>
      <div className="pcard-body">
        <div className="pcard-form_control-wrapper">
          <div className="pcard-form_control">
            <div className="pModal-form__label-control">
              <label htmlFor="cost_item" className="pModal-form__label">
                First Name
              </label>
            </div>
          </div>
          <div className="pcard-form_control">
            <InputWithoutLabel
              name="firstname"
              type="text"
              placeholder=""
              id="firstname"
              value="Seun"
              onChange={() => {}}
              classNames="nsForm-input__alternate"
            />
          </div>
        </div>
        <div className="pcard-form_control-wrapper">
          <div className="pcard-form_control">
            <div className="pModal-form__label-control">
              <label htmlFor="cost_item" className="pModal-form__label">
                Last Name
              </label>
            </div>
          </div>
          <div className="pcard-form_control">
            <InputWithoutLabel
              name="lastname"
              type="text"
              placeholder=""
              id="lastname"
              value="Akanni"
              onChange={() => {}}
              classNames="nsForm-input__alternate"
            />
          </div>
        </div>
        <div className="pcard-form_control-wrapper">
          <div className="pcard-form_control">
            <div className="pModal-form__label-control">
              <label htmlFor="cost_item" className="pModal-form__label">
                Email Address
              </label>
            </div>
          </div>
          <div className="pcard-form_control">
            <InputWithoutLabel
              name="email"
              type="email"
              placeholder=""
              id="email"
              value="mylocarson@gmail.com"
              onChange={() => {}}
              classNames="nsForm-input__alternate"
            />
          </div>
        </div>
        <div className="pcard-form_control-wrapper">
          <div className="pcard-form_control">
            <div className="pModal-form__label-control">
              <label htmlFor="cost_item" className="pModal-form__label">
                Home Address
              </label>
            </div>
          </div>
          <div className="pcard-form_control">
            <TextArea
              name="description"
              value="203a, Farajamo street, off isolo road, behind forte oil, ajah, Lagos "
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
      <div className="pcard-footer">
        <div className="button button-md button--orange">Save Changes</div>
      </div>
    </div>

    <div className="pcard">
      <div className="pcard-header">
        <h3 className="pcard-header__title">Change Account Type </h3>
      </div>
      <div className="pcard-body">
        <div className="pcard-form_control-wrapper">
          <div className="pcard-form_control">
            <div className="pModal-form__label-control">
              <label htmlFor="currency" className="pModal-form__label">
                Currency
              </label>
            </div>
          </div>
          <div className="pcard-form_control">
            <SelectInputWithoutLabel
              options={[]}
              name="account_type"
              id="account_type"
              value=""
              onChange={() => {}}
              defaultValue="Both Seller and Buyer Account"
              classNames="nsForm-select__alternate"
            />
          </div>
        </div>
      </div>
      <div className="pcard-footer">
        <div className="button button-md button--neutral">Save Changes</div>
      </div>
    </div>

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
