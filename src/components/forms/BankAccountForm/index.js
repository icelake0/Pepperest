import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AbstractInput } from 'components/forms';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { SpinnerIcon } from '../../vectors';
import { Alert } from 'components/blocks';

const BankAccountForm = (props) => {
    useEffect(() => {
        if(!state.updatedFormStateValuesWithProps) {
            updateFormStateValuesWithProps();
        }
    });
    const updateFormStateValuesWithProps = () => {
        if (props.userProfile) {
            Object.values(state.form).forEach(formElement => {
                state.form[formElement.elementConfig.id].value = props.userProfile[formElement.elementConfig.id]
            })
            setState({...state, updatedFormStateValuesWithProps : true})
        }
    }
    const [state, setState] = useState({
        updatedFormStateValuesWithProps : false,
        loading: false,
        form: {
            bankName: {
                elementConfig: {
                    name: 'bankName',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'Bank Name',
                    id: 'bankName',
                },
                inputWithoutLabelType : 'text',
                value: '',
                validation: {
                rules: {
                    required: 'Bank name is required',
                },
                errorMessage: null,
                },
            },
            bankAccountNo: {
                elementConfig: {
                    name: 'bankAccountNo',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'bankAccountNo',
                    id: 'bankAccountNo',
                },
                inputWithoutLabelType : 'number',
                value: '',
                validation: {
                rules: {
                    required: 'Bank Account No is required',
                },
                errorMessage: null,
                },
            },
            accountName: {
                elementConfig: {
                    name: 'accountName',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'accountName',
                    id: 'accountName',
                },
                inputWithoutLabelType : 'text',
                value: '',
                validation: {
                    rules: {
                        required: 'accountName is required',
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
    const accountUpdateHandler = () => {
        const payLoad = {
            bankName : state.form.bankName.value,
            accountNo : state.form.bankAccountNo.value,
            accountName : state.form.accountName.value,
        }
        props.onUpdateBankAccount(payLoad, props.token, props.user)
    };

    return (
        <>
        <form className="nsForm auth-panel-form" onSubmit={handleSubmit(accountUpdateHandler)}>
                <div className="pcard">
                <div className="pcard-header">
                <h3 className="pcard-header__title">Add Bank Account</h3>
                </div>
                <div className="pcard-body">
                <div className="pcard-form_control-wrapper">
                    <div className="pcard-form_control">
                    <div className="pModal-form__label-control">
                        <label htmlFor="cost_item" className="pModal-form__label">
                        Bank Name
                        </label>
                    </div>
                    </div>
                    <div className="pcard-form_control">
                    <AbstractInput
                        key={state.form.bankName.elementConfig.name}
                        value={state.form.bankName.value}
                        elementConfig={state.form.bankName.elementConfig}
                        inputWithoutLabelType={state.form.bankName.inputWithoutLabelType}
                        onChange={(event) => inputChangedHandler(event, state.form.bankName.elementConfig.id)}
                        validation={register(state.form.bankName.validation.rules)}
                        errorMessage={(errors[state.form.bankName.elementConfig.name] && errors[state.form.bankName.elementConfig.name].message) || state.form.bankName.validation.errorMessage}
                        hasForgotPasswordLabel={state.form.bankName.hasForgotPasswordLabel}
                    />
                    </div>
                </div>
                <div className="pcard-form_control-wrapper">
                    <div className="pcard-form_control">
                    <div className="pModal-form__label-control">
                        <label htmlFor="cost_item" className="pModal-form__label">
                        Account Number
                        </label>
                    </div>
                    </div>
                    <div className="pcard-form_control">
                        <AbstractInput
                            key={state.form.bankAccountNo.elementConfig.name}
                            value={state.form.bankAccountNo.value}
                            elementConfig={state.form.bankAccountNo.elementConfig}
                            inputWithoutLabelType={state.form.bankAccountNo.inputWithoutLabelType}
                            onChange={(event) => inputChangedHandler(event, state.form.bankAccountNo.elementConfig.id)}
                            validation={register(state.form.bankAccountNo.validation.rules)}
                            errorMessage={(errors[state.form.bankAccountNo.elementConfig.name] && errors[state.form.bankAccountNo.elementConfig.name].message) || state.form.bankAccountNo.validation.errorMessage}
                            hasForgotPasswordLabel={state.form.bankAccountNo.hasForgotPasswordLabel}
                        />
                    </div>
                </div>
                {state.showAccountName || true? (
                    <div className="pcard-form_control-wrapper">
                    <div className="pcard-form_control">
                        <div className="pModal-form__label-control">
                        <label htmlFor="accountName" className="pModal-form__label">
                            Account Name
                        </label>
                        </div>
                    </div>
                    <div className="pcard-form_control">
                        <AbstractInput
                            key={state.form.accountName.elementConfig.name}
                            value={state.form.accountName.value}
                            elementConfig={state.form.accountName.elementConfig}
                            inputWithoutLabelType={state.form.accountName.inputWithoutLabelType}
                            onChange={(event) => inputChangedHandler(event, state.form.accountName.elementConfig.id)}
                            validation={register(state.form.accountName.validation.rules)}
                            errorMessage={(errors[state.form.accountName.elementConfig.name] && errors[state.form.accountName.elementConfig.name].message) || state.form.accountName.validation.errorMessage}
                            hasForgotPasswordLabel={state.form.accountName.hasForgotPasswordLabel}
                        />
                    </div>
                    </div>
                ) : null}
                </div>
                <div className="pcard-footer">
                {
                    props.loading ? <SpinnerIcon />
                    :  <button className="button button-md button--orange">Add Account Number</button>
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
  onUpdateBankAccount: (payLoad, token, user) => dispatch(actions.updateBankAccount(payLoad, token, user)),
});

const mapStateToProps = state => {
    return {
      token: state.auth.token,
      user: state.auth.userInfo,
      userProfile: state.userAccount.userProfile,
      loading: state.userAccount.updatingBankAccount,
      error: state.userAccount.updateBankAccountError
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BankAccountForm);
