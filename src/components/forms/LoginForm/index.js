import React, { useState } from 'react';
import { Button } from 'components/blocks';
import { useForm } from 'react-hook-form';
import { AbstractInput } from 'components/forms';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { SpinnerIcon } from '../../vectors';

const LoginForm = (props) => {
  const [state, setState] = useState({
    loading: false,
    loginForm: {
      email: {
        elementConfig: {
          name: 'email',
          type: 'text',
          placeholder: 'Enter Email Address',
          label: 'Email Address',
          id: 'email',
        },
        value: '',
        validation: {
          rules: {
            required: 'Email is required',
            RegExp: {
              value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
              message: 'Invalid email address',
            },
          },
          errorMessage: null,
        },
      },
      password: {
        elementConfig: {
          name: 'password',
          type: 'password',
          placeholder: 'Enter Password',
          label: 'Password',
          id: 'password',
        },
        value: '',
        validation: {
          rules: {
            required: 'Password is required',
          },
          errorMessage: null,
        },
        hasForgotPasswordLabel: true,
      },
    },
  });

  const { register, handleSubmit, errors } = useForm();

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedloginForm = {
      ...state.loginForm,
    };
    const updatedFormElement = {
      ...updatedloginForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedloginForm[inputIdentifier] = updatedFormElement;
    setState({ ...state, loginForm: updatedloginForm });
  };
  const loginHandler = () => {
    props.onLogin(state.loginForm.email.value, state.loginForm.password.value);
  };

  return (
    <>
      <form className="nsForm auth-panel-form" onSubmit={handleSubmit(loginHandler)}>
        {Object.values(state.loginForm).map((formInput) => (
          <AbstractInput
            key={formInput.elementConfig.name}
            value={formInput.value}
            elementConfig={formInput.elementConfig}
            onChange={(event) => inputChangedHandler(event, formInput.elementConfig.id)}
            validation={register(formInput.validation.rules)}
            errorMessage={(errors[formInput.elementConfig.name] && errors[formInput.elementConfig.name].message) || formInput.validation.errorMessage}
            hasForgotPasswordLabel={formInput.hasForgotPasswordLabel}
          />
        ))}
        {
          props.loading ? <SpinnerIcon />
            : (
              <Button
                type="submit"
                value="SIGN IN"
                name="sign_in"
                handleClick={() => {}}
              />
            )
        }
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (email, password) => dispatch(actions.login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
