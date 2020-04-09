/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useContext } from 'react';
import { PepperestContext } from 'components/helpers/constant';
import { SelectInputWithoutLabel } from 'components/blocks';


const SortByModal = () => {
  const [state, setState] = useState({});
  const pepperestContext = useContext(PepperestContext);


  return (
    <>
      <div className="list-modal-overlay" />
      <div
        className="list-modal"
        onClick={() => {
          pepperestContext.updateShowPaymentListModal(false);
        }}
      >
        <div
          className="list-modal__body"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <div className="list-modal__header">
            <p className="text--small text--black">Sort By</p>

            <div
              className="list-item-detail__container-close"
              onClick={() => {
                pepperestContext.updateShowPaymentListModal(false);
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
              <label
                htmlFor="list_per_page"
                className="text--smaller text--gray"
              >
                LIST PER PAGE
              </label>
              <SelectInputWithoutLabel
                options={[]}
                name="list_per_page"
                id="list_per_page"
                value=""
                onChange={() => {}}
                defaultValue="50"
                classNames="nsForm-select__alternate nsForm-select--sm"
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

export default SortByModal;
