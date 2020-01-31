import React, {useState} from 'react'
import { PepperestContext} from 'components/helpers/constant';


const PepperestProvider = props => {
    const [localState, setLocalState] = useState({showModal: false});
    return (
    <PepperestContext.Provider value={{
        state: {...localState},
        updateShowModal: (value) => {setLocalState({...localState, showModal: value})}
    }}>
        {   props.children }
    </PepperestContext.Provider>
);
}

export default PepperestProvider;