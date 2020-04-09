import React, { useState } from 'react';
import {
  InputWithoutLabel,
  SelectInputWithoutLabel,
} from 'components/blocks';

const FilterBy = () => {
  const [state, setState] = useState({});

  return (
    <div className="list-header__action-menu">
      <form
        className="list-header__action-menu__body"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="list-header__action-menu-control">
          <label htmlFor="status" className="text--smaller text--gray">
            STATUS
          </label>
          <SelectInputWithoutLabel
            options={[]}
            name="status"
            id="status"
            value=""
            onChange={() => {}}
            defaultValue="Awaiting Confirmation"
            classNames="nsForm-select__alternate nsForm-select--sm"
          />
        </div>
        <div className="list-header__action-menu-control">
          <label htmlFor="delivery_date" className="text--smaller text--gray">
            DELIVERY DATE
          </label>
          <SelectInputWithoutLabel
            options={[]}
            name="delivery_date"
            id="delivery_date"
            value=""
            onChange={() => {}}
            defaultValue="2/12/23"
            classNames="nsForm-select__alternate nsForm-select--sm"
          />
        </div>
        <div className="list-header__action-menu-control">
          <label htmlFor="payment_id" className="text--smaller text--gray">
            PAYMENT ID
          </label>
          <InputWithoutLabel
            name="payment_id"
            type="text"
            placeholder=""
            id="payment_id"
            value="902900203923"
            onChange={() => {}}
            classNames="nsForm-input__alternate"
          />
        </div>
        <div className="list-header__action-menu-control">
          <label htmlFor="email" className="text--smaller text--gray">
            CUSTOMER EMAIL
          </label>
          <InputWithoutLabel
            name="email"
            type="email"
            placeholder=""
            id="email"
            value="myloccarson@gmail.com"
            onChange={() => {}}
            classNames="nsForm-input__alternate"
          />
        </div>
        <div className="list-header__action-menu-base">
          <div className="button button-lg button--neutral">RESET</div>
          <div className="button button-lg button--orange">FILTER</div>
        </div>
      </form>
    </div>
  );
};

export default FilterBy;
