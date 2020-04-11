import React, { useState } from 'react';
import { PepperestContext } from 'components/helpers/constant';


const PepperestProvider = (props) => {
  const [localState, setLocalState] = useState({
    showPaymentModal: false,
    showProductModal: false,
    showPaymentListModal: false,
    showCustomerListModal: false,
    showProductListModal: false,
    showOrdersListModal: false,
    showFilterModal: false,
    showSortModal: false,
  });
  return (
    <PepperestContext.Provider
      value={{
        state: { ...localState },
        updateShowPaymentModal: (value) => {
          setLocalState({ ...localState, showPaymentModal: value });
        },
        updateShowProductModal: (value) => {
          setLocalState({ ...localState, showProductModal: value });
        },
        updateShowPaymentListModal: (value) => {
          setLocalState({ ...localState, showPaymentListModal: value });
        },
        updateShowCustomerListModal: (value) => {
          setLocalState({ ...localState, showCustomerListModal: value });
        },
        updateShowProductListModal: (value) => {
          setLocalState({ ...localState, showProductListModal: value });
        },
        updateShowOrdersListModal: (value) => {
          setLocalState({ ...localState, showOrdersListModal: value });
        },
        updateShowFilterModal: (value) => {
          setLocalState({ ...localState, showFilterModal: value });
        },
        updateShowSortModal: (value) => {
          setLocalState({ ...localState, showSortModal: value });
        },
      }}
    >
      {props.children}
    </PepperestContext.Provider>
  );
};

export default PepperestProvider;
