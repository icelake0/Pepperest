/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { PepperestContext } from 'components/helpers/constant';


import {
  InputWithoutLabel,
  FilterBy,
  SortBy,
} from 'components/blocks';

const ListHeader = ({ isProduct }) => {
  const [value, setValue] = useState('');
  const pepperestContext = useContext(PepperestContext);

  const [state, setState] = useState({
    showFilter: false,
    showSortBy: false,
  });

  const handleToggleFilterBy = () => {
    setState({ ...state, showSortBy: false, showFilter: !state.showFilter });
    pepperestContext.updateShowFilterModal(true);
  };
  const handleToggleSortBy = () => {
    setState({ ...state, showFilter: false, showSortBy: !state.showSortBy });
    pepperestContext.updateShowSortModal(true);
  };

  return (
    <div className="list-header">
      <InputWithoutLabel
        name="search"
        type="text"
        placeholder="Search Transactions ID, customer name, email address"
        id="search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <div className="list-header__actions">
        {
            isProduct ? (
              <div className="list-header__action list-header__action--alt">
                <img
                  className="list-header__action-icon"
                  src="/assets/images/svg/import.svg"
                  alt="icon"
                />
                <span className="list-header__action-text list-header__action-text--alt">
                  Import from Instagram
                </span>
              </div>
            ) : null
        }
        <div
          className={`list-header__action ${state.showFilter ? 'active' : ''}`}
          onClick={() => {
            handleToggleFilterBy();
          }}
        >
          <img
            className="list-header__action-icon"
            src="/assets/images/svg/filter.svg"
            alt="icon"
          />
          <span className="list-header__action-text">Filter By</span>
          <FilterBy isActive={state.showFilter} />
        </div>
        <div
          className={`list-header__action ${state.showSortBy ? 'active' : ''}`}
          onClick={() => {
            handleToggleSortBy();
          }}
        >
          <img
            className="list-header__action-icon"
            src="/assets/images/svg/sort.svg"
            alt="icon"
          />
          <span className="list-header__action-text">Sort By</span>
          <SortBy isActive={state.showSortBy} />
        </div>
      </div>
    </div>
  );
};


ListHeader.defaultProps = {
  isProduct: false,
};

ListHeader.propTypes = {
  isProduct: PropTypes.bool,
};

export default ListHeader;
