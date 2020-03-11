/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { InputWithoutLabel, SelectInputWithoutLabel } from 'components/blocks';


const ApiConfigPage = () => (
  <div>
    <div className="pcard">
      <div className="pcard-header">
        <h3 className="pcard-header__title">API Configurations</h3>
      </div>
      <div className="pcard-body">
        <div className="pcard-form_control-wrapper">
          <div className="pcard-form_control">
            <div className="pModal-form__label-control">
              <label htmlFor="cost_item" className="pModal-form__label">
                Use API
              </label>
            </div>
          </div>
          <div className="pcard-form_control">
            <SelectInputWithoutLabel
              options={[]}
              name="use_api"
              id="use_api"
              value=""
              onChange={() => {}}
              defaultValue="Yes"
              classNames="nsForm-select__alternate"
            />
          </div>
        </div>
        <div className="pcard-form_control-wrapper">
          <div className="pcard-form_control">
            <div className="pModal-form__label-control">
              <label htmlFor="cost_item" className="pModal-form__label">
                Response URL
              </label>
            </div>
          </div>
          <div className="pcard-form_control">
            <InputWithoutLabel
              name="accountNumber"
              type="text"
              placeholder=""
              id="accountNumber"
              value=""
              onChange={() => {}}
              classNames="nsForm-input__alternate"
            />
          </div>
        </div>
        <div className="pcard-form_control-wrapper">
          <div className="pcard-form_control">
            <div className="pModal-form__label-control">
              <label htmlFor="accountName" className="pModal-form__label">
                Use API
              </label>
            </div>
          </div>
          <div className="pcard-form_control">
            <SelectInputWithoutLabel
              options={[]}
              name="use_live_api"
              id="use_live_api"
              value=""
              onChange={() => {}}
              defaultValue="Live"
              classNames="nsForm-select__alternate"
            />
          </div>
        </div>
      </div>
      <div className="pcard-footer">
        <div className="button button-md button--orange">Save Changes</div>
      </div>
    </div>
  </div>
);

export default ApiConfigPage;
