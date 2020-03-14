import React from 'react';
import { InputWithoutLabel } from 'components/blocks';
import { TrashIcon } from 'components/vectors';

const LinkMediaAccountPage = () => (
  <div>
    <div className="pcard">
      <div className="pcard-header">
        <h3 className="pcard-header__title">Link Media Account</h3>
      </div>
      <div className="pcard-body">
        <div className="row justify-item-center nsForm-control">
          <div className="col-md-6 ml-auto">
            <InputWithoutLabel
              name="link_account"
              type="text"
              placeholder=""
              id="link_account"
              value="https://facebook.com/buyer12"
              onChange={() => {}}
              classNames="nsForm-input__alternate"
            />
          </div>
          <div className="col-md-1 mr-auto d-flex flex-column justify-content-center">
            <TrashIcon />
          </div>
        </div>
        <div className="row justify-item-center nsForm-control">
          <div className="col-md-6 ml-auto">
            <InputWithoutLabel
              name="link_account"
              type="text"
              placeholder=""
              id="link_account"
              value="https://facebook.com/buyer12"
              onChange={() => {}}
              classNames="nsForm-input__alternate"
            />
          </div>
          <div className="col-md-1 mr-auto d-flex flex-column justify-content-center">
            <TrashIcon />
          </div>
        </div>
      </div>
      <div className="pcard-footer">
        <div className="button button-md button--orange">Save Changes</div>
      </div>
    </div>
  </div>
);

export default LinkMediaAccountPage;
