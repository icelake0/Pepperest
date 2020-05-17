import React from 'react';
import {
  Input, PasswordInput, SelectInput, InputWithoutLabel
} from 'components/blocks';

const AbstractInput = (props) => {
  let abstractInput = null;
  switch (props.elementConfig.type) {
    case 'select':
      abstractInput = (
        <SelectInput
          label="Choose an Pepperest Account"
          value={props.value}
          {...props.elementConfig}
          onChange={(event) => props.onChange(event)}
          validation={props.validation}
          errorMessage={props.errorMessage}
        />
      );
      break;
    case 'email': case 'text':
      abstractInput = (
        <Input
          value={props.value}
          {...props.elementConfig}
          onChange={(event) => props.onChange(event)}
          validation={props.validation}
          errorMessage={props.errorMessage}
        />
      );
      break;
    case 'password':
      abstractInput = (
        <PasswordInput
          value={props.value}
          {...props.elementConfig}
          onChange={(event) => props.onChange(event)}
          validation={props.validation}
          errorMessage={props.errorMessage}
          hasForgotPasswordLabel={props.hasForgotPasswordLabel}
        />
      );
    break
    case 'inputWithoutLabel':
      abstractInput = (
        <InputWithoutLabel
          value={props.value}
          {...{...props.elementConfig, type : props.inputWithoutLabelType}}
          onChange={(event) => props.onChange(event)}
          validation={props.validation}
          errorMessage={props.errorMessage}
          classNames="nsForm-input__alternate"
        />
      );
  }
  return abstractInput;
};

export default AbstractInput;
