import React, { useState, useEffect } from 'react';
import { Button } from 'components/blocks';
import { useForm } from 'react-hook-form';
import { AbstractInput } from 'components/forms';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { SpinnerIcon } from '../../vectors';
import { Alert } from 'components/blocks';

const ChangeAccountTypeForm = (props) => {
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
            usertype: {
                elementConfig: {
                    name: 'usertype',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'User Type',
                    id: 'usertype',
                    options : [
                        {
                            label : "Buyer",
                            value : "Buyer"
                        },
                        {
                            label : "Merchant",
                            value : "Merchant"
                        },
                        {
                            label : "Both",
                            value : "Both"
                        },
                    ],
                },
                inputWithoutLabelType : 'SelectInputWithoutLabel',
                value: '',
                validation: {
                    rules: {
                        required: 'user type is required',
                    },
                    errorMessage: null,
                },
            },
        },
    });

    const { register, handleSubmit, errors } = useForm();

    const inputChangedHandler = (event, inputIdentifier) => {;
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

    const userTypeUpdateHandler = () => {
        const payLoad = {
            usertype : state.form.usertype.value,
        }
        props.onUpdateUserType(payLoad, props.token, props.user)
    };

    return (
        <>
            <div className="pcard">
                <form className="nsForm auth-panel-form" onSubmit={handleSubmit(userTypeUpdateHandler)}>
                    <div className="pcard-header">
                        <h3 className="pcard-header__title">Change Account Type </h3>
                    </div>
                    <div className="pcard-body">
                        <div className="pcard-form_control-wrapper">
                        <div className="pcard-form_control">
                            <div className="pModal-form__label-control">
                            <label htmlFor="currency" className="pModal-form__label">
                                Currency
                            </label>
                            </div>
                        </div>
                        <div className="pcard-form_control">
                            <AbstractInput
                                key={state.form.usertype.elementConfig.name}
                                value={state.form.usertype.value}
                                elementConfig={state.form.usertype.elementConfig}
                                inputWithoutLabelType={state.form.usertype.inputWithoutLabelType}
                                onChange={(event) => inputChangedHandler(event, state.form.usertype.elementConfig.id)}
                                validation={register(state.form.usertype.validation.rules)}
                                errorMessage={(errors[state.form.usertype.elementConfig.name] && errors[state.form.usertype.elementConfig.name].message) || state.form.usertype.validation.errorMessage}
                                hasForgotPasswordLabel={state.form.usertype.hasForgotPasswordLabel}
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
                </form>
            </div>
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
    onUpdateUserType: (payLoad, token, user) => dispatch(actions.updateUserType(payLoad, token, user)),
});

const mapStateToProps = state => {
    return {
      token: state.auth.token,
      user: state.auth.userInfo,
      userProfile: state.userAccount.userProfile,
      loading: state.userAccount.updatingUserType,
      error: state.userAccount.updateUserTypeError
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeAccountTypeForm);
