import React from 'react';
import {
  CloseIcon,
  RightChevron,
  SpinnerIcon
} from 'components/vectors';
import {
  InputWithoutLabel,
  SelectInputWithoutLabel,
  TextArea
} from 'components/blocks';
import { PepperestContext } from 'components/helpers/constant';

const ProductModal = props => (
  <div className="pModal">
    <div className="pModal-overlay"></div>
    <div className="pModal-content">
      <div className="pModal-header">
        <h6 className="text--small">Add Product / Service</h6>
        <PepperestContext.Consumer>
          {context => (
            <div onClick={() => context.updateShowProductModal(false)}>
              <CloseIcon />
            </div>
          )}
        </PepperestContext.Consumer>
      </div>
      <div className="pModal-sub__header row mx-0">
        <div className="col-lg-6 px-0">
          <div className="pModal-sub__header-half left">
            <h6 className="text--smaller text--gray">Total Amount</h6>
            <p className="text--smaller">NGN 0</p>
          </div>
        </div>
        <div className="col-lg-6 px-0">
          <div className="pModal-sub__header-half right">
            <h6 className="text--smaller text--gray">Pepperest Fee</h6>
            <p className="text--smaller">NGN 0</p>
          </div>
        </div>
      </div>
      <div className="pModal-main">
        <div className="pModal-main__notification text--smallest">
          A payment link would be created
        </div>
        <div className="pModal-form">
          <div className="pModal-form-control row mx-0">
            <div className="col-md-5">
              <div className="pModal-form__label-control">
                <label className="pModal-form__label">Product Name</label>
              </div>
            </div>
            <div className="col-md-7">
              <InputWithoutLabel
                name="product"
                type="text"
                placeholder=""
                id="product"
                value=""
                onChange={() => {}}
                classNames={'nsForm-input__alternate'}
              />
            </div>
          </div>
          <div className="pModal-form-control row mx-0">
            <div className="col-md-5">
              <div className="pModal-form__label-control">
                <label className="pModal-form__label">
                  Product Description
                </label>
              </div>
            </div>
            <div className="col-md-7">
              <TextArea name="description" value="" onChange={() => {}} />
            </div>
          </div>
          <div className="pModal-form-control row mx-0">
            <div className="col-md-5">
              <div className="pModal-form__label-control">
                <label className="pModal-form__label">Amount</label>
              </div>
            </div>
            <div className="col-md-7">
              <InputWithoutLabel
                name="cost_item"
                type="text"
                placeholder=""
                id="cost_item"
                value=""
                onChange={() => {}}
                classNames={'nsForm-input__alternate'}
              />
            </div>
          </div>
          <div className="pModal-form-control row mx-0">
            <div className="col-md-5">
              <div className="pModal-form__label-control">
                <label className="pModal-form__label">Currency</label>
              </div>
            </div>
            <div className="col-md-7">
              <SelectInputWithoutLabel
                options={[]}
                name="currency"
                id="currency"
                value=""
                onChange={() => {}}
                defaultValue="American Dollars"
                classNames="nsForm-select__alternate"
              />
            </div>
          </div>
          <div className="pModal-form-control row mx-0">
            <div className="col-md-5">
              <div className="pModal-form__label-control">
                <label className="pModal-form__label">
                  Pick Start and End Date
                </label>
              </div>
            </div>
            <div className="col-md-7">
              <div className="pModal-form__datepicker">
                <p className="text--smaller">12 Jul 2019</p>
                <RightChevron />
                <p className="text--smaller">12 Jul 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pModal-footer">
        <div className="button button--auto button-md button--neutral">
          CANCEL
        </div>
        <div className="button button--orange">
          ADD A PRODUCT
          {/* <SpinnerIcon /> */}
        </div>
      </div>
    </div>
  </div>
);

export default ProductModal;
