/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { InputWithoutLabel, SelectInputWithoutLabel } from 'components/blocks';


const BankAccountPage = () => (
  <div>
    <div className="pcard">
      <div className="pcard-header">
        <h3 className="pcard-header__title">Add Bank Account</h3>
      </div>
      <div className="pcard-body">
        <div className="pcard-form_control-wrapper">
          <div className="pcard-form_control">
            <div className="pModal-form__label-control">
              <label htmlFor="cost_item" className="pModal-form__label">
                Bank Name
              </label>
            </div>
          </div>
          <div className="pcard-form_control">
            <SelectInputWithoutLabel
              options={[]}
              name="bankName"
              id="bankName"
              value=""
              onChange={() => {}}
              defaultValue="GT Bank"
              classNames="nsForm-select__alternate"
            />
          </div>
        </div>
        <div className="pcard-form_control-wrapper">
          <div className="pcard-form_control">
            <div className="pModal-form__label-control">
              <label htmlFor="cost_item" className="pModal-form__label">
                Account Number
              </label>
            </div>
          </div>
          <div className="pcard-form_control">
            <InputWithoutLabel
              name="accountNumber"
              type="text"
              placeholder=""
              id="accountNumber"
              value="01010101010"
              onChange={() => {}}
              classNames="nsForm-input__alternate"
            />
          </div>
        </div>
        <div className="pcard-form_control-wrapper">
          <div className="pcard-form_control">
            <div className="pModal-form__label-control">
              <label htmlFor="accountName" className="pModal-form__label">
                Account Name
              </label>
            </div>
          </div>
          <div className="pcard-form_control">
            <InputWithoutLabel
              name="accountName"
              type="text"
              placeholder=""
              id="accountName"
              value="Seun Akanni"
              onChange={() => {}}
              classNames="nsForm-input__alternate"
            />
          </div>
        </div>
      </div>
      <div className="pcard-footer">
        <div className="button button-md button--orange">Add Account Number</div>
      </div>
    </div>
  </div>
);

export default BankAccountPage;
