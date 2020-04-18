/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useContext, useRef, useEffect } from 'react';
import { PepperestContext } from 'components/helpers/constant';

import { InputWithoutLabel, SelectInputWithoutLabel } from 'components/blocks';

const FilterByModal = () => {
  const pepperestContext = useContext(PepperestContext);
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  useEffect(() => {
    setStyle({
      top:
        ref.current.clientHeight >= window.innerHeight - 350
          ? '350px'
          : 'unset',
      bottom:
        ref.current.clientHeight >= window.innerHeight - 350 ? 'unset' : '0',
    });
  }, [ref]);

  return (
    <>
      <div className="list-modal-overlay" />
      <div
        className="list-modal"
        onClick={() => {
          pepperestContext.updateShowFilterModal(false);
        }}
      >
        <div
          className="list-modal__body"
          onClick={(event) => {
            event.stopPropagation();
          }}
          ref={ref}
          style={style}
        >
          <div className="list-modal__header">
            <p className="text--small text--black text-font--medium">Sort By</p>

            <div
              className="list-item-detail__container-close"
              onClick={() => {
                pepperestContext.updateShowFilterModal(false);
              }}
            >
              Close
            </div>
          </div>
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
              <label
                htmlFor="delivery_date"
                className="text--smaller text--gray"
              >
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
      </div>
    </>
  );
};

export default FilterByModal;
