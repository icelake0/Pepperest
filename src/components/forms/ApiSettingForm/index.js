import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AbstractInput } from 'components/forms';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { SpinnerIcon } from '../../vectors';
import { Alert } from 'components/blocks';

const ApiSettingForm = (props) => {
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
            useapi: {
                elementConfig: {
                    name: 'useapi',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'User Type',
                    id: 'useapi',
                    options : [
                        {
                            label : "Yes",
                            value : 1
                        },
                        {
                            label : "No",
                            value : 0
                        },
                    ],
                },
                inputWithoutLabelType : 'SelectInputWithoutLabel',
                value: '',
                validation: {
                    rules: {
                        required: 'Use api is required',
                    },
                    errorMessage: null,
                },
            },
            responseUrl: {
                elementConfig: {
                    name: 'responseUrl',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'responseUrl',
                    id: 'responseUrl',
                },
                inputWithoutLabelType : 'text',
                value: '',
                validation: {
                rules: {
                    required: 'Response URL No is required',
                },
                errorMessage: null,
                },
            },
            apimode: {
                elementConfig: {
                    name: 'apimode',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'User Type',
                    id: 'apimode',
                    options : [
                        {
                            label : "Live",
                            value : "Live"
                        },
                        {
                            label : "Test",
                            value : "Test"
                        },
                    ],
                },
                inputWithoutLabelType : 'SelectInputWithoutLabel',
                value: '',
                validation: {
                    rules: {
                        required: 'Api Mode is required',
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
    const apiSettingUpdateHandler = () => {
        const payLoad = {
            useapi : state.form.useapi.value,
            apimode : state.form.apimode.value,
            responseUrl : state.form.responseUrl.value,
        };
        props.onUpdateApiSetting(payLoad, props.token, props.user);
    };

    return (
        <>
        <form className="nsForm auth-panel-form" onSubmit={handleSubmit(apiSettingUpdateHandler)}>
            <div className="pcard">
                <div className="pcard-header">
                    <h3 className="pcard-header__title">API Configurations</h3>
                </div>
                <div className="pcard-body">
                    <div className="pcard-form_control-wrapper">
                    <div className="pcard-form_control">
                        <div className="pModal-form__label-control">
                        <label htmlFor="cost_item" className="pModal-form__label">
                            Use API
                        </label>
                        </div>
                    </div>
                    <div className="pcard-form_control">
                        <AbstractInput
                            key={state.form.useapi.elementConfig.name}
                            value={state.form.useapi.value}
                            elementConfig={state.form.useapi.elementConfig}
                            inputWithoutLabelType={state.form.useapi.inputWithoutLabelType}
                            onChange={(event) => inputChangedHandler(event, state.form.useapi.elementConfig.id)}
                            validation={register(state.form.useapi.validation.rules)}
                            errorMessage={(errors[state.form.useapi.elementConfig.name] && errors[state.form.useapi.elementConfig.name].message) || state.form.useapi.validation.errorMessage}
                            hasForgotPasswordLabel={state.form.useapi.hasForgotPasswordLabel}
                        />
                    </div>
                    </div>
                    <div className="pcard-form_control-wrapper">
                    <div className="pcard-form_control">
                        <div className="pModal-form__label-control">
                        <label htmlFor="cost_item" className="pModal-form__label">
                            Response URL
                        </label>
                        </div>
                    </div>
                    <div className="pcard-form_control">
                        <AbstractInput
                            key={state.form.responseUrl.elementConfig.name}
                            value={state.form.responseUrl.value}
                            elementConfig={state.form.responseUrl.elementConfig}
                            inputWithoutLabelType={state.form.responseUrl.inputWithoutLabelType}
                            onChange={(event) => inputChangedHandler(event, state.form.responseUrl.elementConfig.id)}
                            validation={register(state.form.responseUrl.validation.rules)}
                            errorMessage={(errors[state.form.responseUrl.elementConfig.name] && errors[state.form.responseUrl.elementConfig.name].message) || state.form.responseUrl.validation.errorMessage}
                            hasForgotPasswordLabel={state.form.responseUrl.hasForgotPasswordLabel}
                        />
                    </div>
                    </div>
                    <div className="pcard-form_control-wrapper">
                    <div className="pcard-form_control">
                        <div className="pModal-form__label-control">
                        <label htmlFor="accountName" className="pModal-form__label">
                            Use API
                        </label>
                        </div>
                    </div>
                    <div className="pcard-form_control">
                        <AbstractInput
                            key={state.form.apimode.elementConfig.name}
                            value={state.form.apimode.value}
                            elementConfig={state.form.apimode.elementConfig}
                            inputWithoutLabelType={state.form.apimode.inputWithoutLabelType}
                            onChange={(event) => inputChangedHandler(event, state.form.apimode.elementConfig.id)}
                            validation={register(state.form.apimode.validation.rules)}
                            errorMessage={(errors[state.form.apimode.elementConfig.name] && errors[state.form.apimode.elementConfig.name].message) || state.form.apimode.validation.errorMessage}
                            hasForgotPasswordLabel={state.form.apimode.hasForgotPasswordLabel}
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
  onUpdateApiSetting: (payLoad, token, user) => dispatch(actions.updateApiSetting(payLoad, token, user)),
});

const mapStateToProps = state => {
    return {
      token: state.auth.token,
      user: state.auth.userInfo,
      userProfile: state.userAccount.userProfile,
      loading: state.userAccount.updatingApiSetting,
      error: state.userAccount.updateApiSettingError
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiSettingForm);
