import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AbstractInput } from 'components/forms';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { SpinnerIcon } from '../../vectors';
import { Alert } from 'components/blocks';

const ProfileForm = (props) => {
    useEffect(() => {
        if(!state.updatedFormStateValuesWithProps) {
            updateFormStateValuesWithProps();
        }
    });
    const updateFormStateValuesWithProps = () => {
        if (props.userProfile) {
            Object.values(state.profileForm).forEach(formElement => {
                state.profileForm[formElement.elementConfig.id].value = props.userProfile[formElement.elementConfig.id]
            })
            setState({...state, updatedFormStateValuesWithProps : true})
        }
    }
    const [state, setState] = useState({
        updatedFormStateValuesWithProps : false,
        loading: false,
        profileForm: {
            firstName: {
                elementConfig: {
                name: 'firstName',
                type: 'inputWithoutLabel',
                placeholder: '',
                label: 'First Name',
                id: 'firstName',
                },
                inputWithoutLabelType : 'text',
                value: '',
                validation: {
                rules: {
                    required: 'First name is required',
                },
                errorMessage: null,
                },
            },
            lastName: {
                elementConfig: {
                name: 'lastName',
                type: 'inputWithoutLabel',
                placeholder: '',
                label: 'Last Name',
                id: 'lastName',
                },
                inputWithoutLabelType : 'text',
                value: '',
                validation: {
                rules: {
                    required: 'Last name is required',
                },
                errorMessage: null,
                },
            },
            email: {
                elementConfig: {
                    name: 'email',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'Email Address',
                    id: 'email',
                },
                inputWithoutLabelType : 'email',
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
            address: {
                elementConfig: {
                    name: 'address',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'Home Address',
                    id: 'address',
                },
                inputWithoutLabelType : 'TextArea',
                value: '',
                validation: {
                    rules: {
                    required: 'Home Address is required',
                    },
                    errorMessage: null,
                },
                hasForgotPasswordLabel: true,
            },
        },
    });

    const { register, handleSubmit, errors } = useForm();

    const inputChangedHandler = (event, inputIdentifier) => {
        updateFormStateValue(inputIdentifier, event.target.value)
    };

    const updateFormStateValue = (inputIdentifier, newValue) => {
        const updatedProfileForm = {
            ...state.profileForm,
        };
        const updatedFormElement = {
            ...updatedProfileForm[inputIdentifier],
        };
        updatedFormElement.value = newValue;
        updatedProfileForm[inputIdentifier] = updatedFormElement;
        setState({ ...state, profileForm: updatedProfileForm });
    }
    const profileUpdateHandler = () => {
        const payLoad = {
            first_name : state.profileForm.firstName.value,
            last_name : state.profileForm.lastName.value,
            email : state.profileForm.email.value,
            address : state.profileForm.address.value
        }
        props.onUpdateProfile(payLoad, props.token, props.user)
    };

    return (
        <>
        <form className="nsForm auth-panel-form" onSubmit={handleSubmit(profileUpdateHandler)}>
            <div className="pcard">
                <div className="pcard-header">
                    <h3 className="pcard-header__title">Profile</h3>
                </div>
                <div className="pcard-body">
                    <div className="pcard-form_control-wrapper">
                    <div className="pcard-form_control">
                        <div className="pModal-form__label-control">
                        <label htmlFor="cost_item" className="pModal-form__label">
                            First Name
                        </label>
                        </div>
                    </div>
                    <div className="pcard-form_control">
                        <AbstractInput
                            key={state.profileForm.firstName.elementConfig.name}
                            value={state.profileForm.firstName.value}
                            elementConfig={state.profileForm.firstName.elementConfig}
                            inputWithoutLabelType={state.profileForm.firstName.inputWithoutLabelType}
                            onChange={(event) => inputChangedHandler(event, state.profileForm.firstName.elementConfig.id)}
                            validation={register(state.profileForm.firstName.validation.rules)}
                            errorMessage={(errors[state.profileForm.firstName.elementConfig.name] && errors[state.profileForm.firstName.elementConfig.name].message) || state.profileForm.firstName.validation.errorMessage}
                            hasForgotPasswordLabel={state.profileForm.firstName.hasForgotPasswordLabel}
                        />
                    </div>
                    </div>
                    <div className="pcard-form_control-wrapper">
                        <div className="pcard-form_control">
                            <div className="pModal-form__label-control">
                            <label htmlFor="cost_item" className="pModal-form__label">
                                Last Name
                            </label>
                            </div>
                        </div>
                        <div className="pcard-form_control">
                            <AbstractInput
                                key={state.profileForm.lastName.elementConfig.name}
                                value={state.profileForm.lastName.value}
                                elementConfig={state.profileForm.lastName.elementConfig}
                                inputWithoutLabelType={state.profileForm.lastName.inputWithoutLabelType}
                                onChange={(event) => inputChangedHandler(event, state.profileForm.lastName.elementConfig.id)}
                                validation={register(state.profileForm.lastName.validation.rules)}
                                errorMessage={(errors[state.profileForm.lastName.elementConfig.name] && errors[state.profileForm.lastName.elementConfig.name].message) || state.profileForm.lastName.validation.errorMessage}
                                hasForgotPasswordLabel={state.profileForm.lastName.hasForgotPasswordLabel}
                            />
                        </div>
                    </div>
                    <div className="pcard-form_control-wrapper">
                        <div className="pcard-form_control">
                            <div className="pModal-form__label-control">
                            <label htmlFor="cost_item" className="pModal-form__label">
                                Email Address
                            </label>
                            </div>
                        </div>
                        <div className="pcard-form_control">
                            <AbstractInput
                                key={state.profileForm.email.elementConfig.name}
                                value={state.profileForm.email.value}
                                elementConfig={state.profileForm.email.elementConfig}
                                inputWithoutLabelType={state.profileForm.email.inputWithoutLabelType}
                                onChange={(event) => inputChangedHandler(event, state.profileForm.email.elementConfig.id)}
                                validation={register(state.profileForm.email.validation.rules)}
                                errorMessage={(errors[state.profileForm.email.elementConfig.name] && errors[state.profileForm.email.elementConfig.name].message) || state.profileForm.email.validation.errorMessage}
                                hasForgotPasswordLabel={state.profileForm.email.hasForgotPasswordLabel}
                            />
                        </div>
                    </div>
                    <div className="pcard-form_control-wrapper">
                        <div className="pcard-form_control">
                            <div className="pModal-form__label-control">
                            <label htmlFor="cost_item" className="pModal-form__label">
                                Home Address
                            </label>
                            </div>
                        </div>
                        <div className="pcard-form_control">
                            <AbstractInput
                                key={state.profileForm.address.elementConfig.name}
                                value={state.profileForm.address.value}
                                elementConfig={state.profileForm.address.elementConfig}
                                inputWithoutLabelType={state.profileForm.address.inputWithoutLabelType}
                                onChange={(event) => inputChangedHandler(event, state.profileForm.address.elementConfig.id)}
                                validation={register(state.profileForm.address.validation.rules)}
                                errorMessage={(errors[state.profileForm.address.elementConfig.name] && errors[state.profileForm.address.elementConfig.name].message) || state.profileForm.address.validation.errorMessage}
                                hasForgotPasswordLabel={state.profileForm.address.hasForgotPasswordLabel}
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
  onUpdateProfile: (payLoad, token, user) => dispatch(actions.updateProfile(payLoad, token, user)),
});

const mapStateToProps = state => {
    return {
      token: state.auth.token,
      user: state.auth.userInfo,
      userProfile: state.userAccount.userProfile,
      loading: state.userAccount.updatingProfile,
      error: state.userAccount.updateProfileError
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
