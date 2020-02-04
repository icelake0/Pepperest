import React, {useState} from 'react'
import { PepperestContext} from 'components/helpers/constant';


const PepperestProvider = props => {
    const [localState, setLocalState] = useState({ showPaymentModal: false, showProductModal: false });
    return (
    <PepperestContext.Provider value={{
        state: {...localState},
        updateShowPaymentModal: (value) => {setLocalState({...localState, showPaymentModal: value})},
        updateShowProductModal: (value) => {setLocalState({...localState, showProductModal: value})}
    }}>
        {   props.children }
    </PepperestContext.Provider>
);
}

export default PepperestProvider;