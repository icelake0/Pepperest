import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AbstractInput } from 'components/forms';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { SpinnerIcon } from '../../vectors';
import { Alert } from 'components/blocks';

const ChangePasswordForm = (props) => {
    const [state, setState] = useState({
        updatedFormStateValuesWithProps : false,
        loading: false,
        form: {
            password: {
                elementConfig: {
                name: 'password',
                type: 'inputWithoutLabel',
                placeholder: '',
                label: 'password',
                id: 'password',
                },
                inputWithoutLabelType : 'password',
                value: '',
                validation: {
                rules: {
                    required: 'New Password is required',
                },
                errorMessage: null,
                },
            },
            password_confirmation: {
                elementConfig: {
                name: 'password_confirmation',
                type: 'inputWithoutLabel',
                placeholder: '',
                label: 'password_confirmation',
                id: 'password_confirmation',
                },
                inputWithoutLabelType : 'password',
                value: '',
                validation: {
                rules: {
                    required: 'Confirm New Password is required',
                },
                errorMessage: null,
                },
            },
        },
    });

    const { register, handleSubmit, errors } = useForm();

    const inputChangedHandler = (event, inputIdentifier) => {
        updateFormStateValue(inputIdentifier, event.target.value)
    };

    const updateFormStateValue = (inputIdentifier, newValue) => {
        const updatedForm = {
            ...state.form,
        };
        const updatedFormElement = {
            ...updatedForm[inputIdentifier],
        };
        updatedFormElement.value = newValue;
        updatedForm[inputIdentifier] = updatedFormElement;
        setState({ ...state, form: updatedForm });
    }
    const passwordUpdateHandler = () => {
        const payLoad = {
            password : state.form.password.value,
            password_confirmation : state.form.password_confirmation.value,
        }
        props.onUpdatePassword(payLoad, props.token, props.user)
    };

    return (
        <>
        <form className="nsForm auth-panel-form" onSubmit={handleSubmit(passwordUpdateHandler)}>
            <div className="pcard">
                <div className="pcard-header">
                    <h3 className="pcard-header__title">Change Password  </h3>
                </div>
                <div className="pcard-body">
                    <div className="pcard-form_control-wrapper">
                    <div className="pcard-form_control">
                        <div className="pModal-form__label-control">
                        <label htmlFor="currency" className="pModal-form__label">
                            New Password
                        </label>
                        </div>
                    </div>
                    <div className="pcard-form_control">
                        <AbstractInput
                            key={state.form.password.elementConfig.name}
                            value={state.form.password.value}
                            elementConfig={state.form.password.elementConfig}
                            inputWithoutLabelType={state.form.password.inputWithoutLabelType}
                            onChange={(event) => inputChangedHandler(event, state.form.password.elementConfig.id)}
                            validation={register(state.form.password.validation.rules)}
                            errorMessage={(errors[state.form.password.elementConfig.name] && errors[state.form.password.elementConfig.name].message) || state.form.password.validation.errorMessage}
                            hasForgotPasswordLabel={state.form.password.hasForgotPasswordLabel}
                        />
                    </div>
                    </div>
                    <div className="pcard-form_control-wrapper">
                    <div className="pcard-form_control">
                        <div className="pModal-form__label-control">
                        <label htmlFor="currency" className="pModal-form__label">Confirm New Password</label>
                        </div>
                    </div>
                    <div className="pcard-form_control">
                        <AbstractInput
                            key={state.form.password_confirmation.elementConfig.name}
                            value={state.form.password_confirmation.value}
                            elementConfig={state.form.password_confirmation.elementConfig}
                            inputWithoutLabelType={state.form.password_confirmation.inputWithoutLabelType}
                            onChange={(event) => inputChangedHandler(event, state.form.password_confirmation.elementConfig.id)}
                            validation={register(state.form.password_confirmation.validation.rules)}
                            errorMessage={(errors[state.form.password_confirmation.elementConfig.name] && errors[state.form.password_confirmation.elementConfig.name].message) || state.form.password_confirmation.validation.errorMessage}
                            hasForgotPasswordLabel={state.form.password_confirmation.hasForgotPasswordLabel}
                        />
                    </div>
                    </div>
                </div>
                <div className="pcard-footer">
                    {
                        props.loading ? <SpinnerIcon />
                        :  <button className="button button-md button--orange">Save Changes</button>
                    }
                </div>
            </div>
        </form>
        {
            <Alert
                message= {props.error}
                isError = {true}
            />
        }
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
  onUpdatePassword: (payLoad, token, user) => dispatch(actions.updatePassword(payLoad, token, user)),
});

const mapStateToProps = state => {
    return {
      token: state.auth.token,
      user: state.auth.userInfo,
      loading: state.userAccount.updatingPassword,
      error: state.userAccount.updatePasswordError
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordForm);
