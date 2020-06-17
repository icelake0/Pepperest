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
import { ImportIcon, FilterIcon, SortIcon } from 'components/vectors';

const ListHeader = ({ isProduct, productListActionLabel, search, placeholder }) => {
  const [value, setValue] = useState('');
  const pepperestContext = useContext(PepperestContext);

  const [state, setState] = useState({
    showFilter: false,
    showSortBy: false,
  });

  const searchInputHandler = (newValue) => {
    setValue(newValue);
    search(newValue);
  }

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
        placeholder={placeholder || "Search Transactions ID, customer name, email address"}
        id="search"
        value={value}
        onChange={(e) => {
          searchInputHandler(e.target.value);
        }}
      />

      <div className="list-header__actions">
        {
            isProduct ? (
              <div className="list-header__action list-header__action--alt">
                <ImportIcon />
                <span className="list-header__action-text list-header__action-text--alt">
                  {productListActionLabel}
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
          <FilterIcon />
          <span className="list-header__action-text">Filter By</span>
          <FilterBy isActive={state.showFilter} />
        </div>
        <div
          className={`list-header__action ${state.showSortBy ? 'active' : ''}`}
          onClick={() => {
            handleToggleSortBy();
          }}
        >
          <SortIcon />
          <span className="list-header__action-text">Sort By</span>
          <SortBy isActive={state.showSortBy} />
        </div>
      </div>
    </div>
  );
};


ListHeader.defaultProps = {
  isProduct: false,
  productListActionLabel: '',
};

ListHeader.propTypes = {
  isProduct: PropTypes.bool,
  productListActionLabel: PropTypes.string,
};

export default ListHeader;
