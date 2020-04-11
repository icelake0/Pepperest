/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SelectInputWithoutLabel } from 'components/blocks';

const SortBy = ({ isActive }) => {
  const [state, setState] = useState({});

  return (
    <div className="list-header__action-menu__alt" style={{ display: isActive ? 'block' : 'none' }} onClick={(event) => { event.stopPropagation(); }}>
      <form
        className="list-header__action-menu__body"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="list-header__action-menu-control">
          <label htmlFor="list_per_page" className="text--smaller text--gray">
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
  );
};

SortBy.defaultProps = {
  isActive: false,
};

SortBy.propTypes = {
  isActive: PropTypes.bool,
};

export default SortBy;
