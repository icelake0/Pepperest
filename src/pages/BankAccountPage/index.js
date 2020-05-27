/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { InputWithoutLabel, SelectInputWithoutLabel } from 'components/blocks';
import {BankAccountForm} from 'components/forms'


const BankAccountPage = () => {
  const [state, setState] = useState({ showAccountName: false });

  return (
    <div>
      <BankAccountForm />
    </div>
  );
};
export default BankAccountPage;
