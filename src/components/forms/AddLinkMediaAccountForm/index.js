import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AbstractInput } from 'components/forms';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { SpinnerIcon } from '../../vectors';
import { Alert } from 'components/blocks'; 

const AddLinkMediaAccountForm = (props) => {
    const [state, setState] = useState({
        updatedFormStateValuesWithProps: false,
        loading: false,
        form: {
            mediaLink: {
                elementConfig: {
                    name: 'mediaLink',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'mediaLink',
                    id: 'mediaLink',
                },
                inputWithoutLabelType: 'mediaLink',
                value: '',
                validation: {
                    rules: {
                        required: 'Media Link is required',
                    },
                    errorMessage: null,
                },
            }
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
    const addMediaLinkHandler = () => {
        const payLoad = {
            mediaLink: state.form.mediaLink.value,
        }
        props.onAddMediaLink(props.token, props.user, payLoad)
    };

    return (
        <>
            <form className="nsForm auth-panel-form" onSubmit={handleSubmit(addMediaLinkHandler)}>
                <div className="row justify-item-center nsForm-control">
                    <div className="col-10 col-md-6 ml-md-auto">
                        <AbstractInput
                            key={state.form.mediaLink.elementConfig.name}
                            value={state.form.mediaLink.value}
                            elementConfig={state.form.mediaLink.elementConfig}
                            inputWithoutLabelType={state.form.mediaLink.inputWithoutLabelType}
                            onChange={(event) => inputChangedHandler(event, state.form.mediaLink.elementConfig.id)}
                            validation={register(state.form.mediaLink.validation.rules)}
                            errorMessage={(errors[state.form.mediaLink.elementConfig.name] && errors[state.form.mediaLink.elementConfig.name].message) || state.form.mediaLink.validation.errorMessage}
                            hasForgotPasswordLabel={state.form.mediaLink.hasForgotPasswordLabel}
                        />
                    </div>
                    <div className="col-1 col-md-1 mr-md-auto d-flex flex-column justify-content-center">
                        <button className="button button-md button--orange" disabled = {props.loading}>
                                {
                                    props.loading ? <SpinnerIcon /> : 'Add'
                                }
                        </button>
                    </div>
                </div>
            </form>
            {
                <Alert
                    message={props.error}
                    isError={true}
                />
            }
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onAddMediaLink: (token, user, payLoad) => dispatch(actions.addMediaLink(token, user, payLoad)),
});

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        user: state.auth.userInfo,
        loading: state.userAccount.addingMediaLink,
        error: state.userAccount.addMediaLinkError
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLinkMediaAccountForm);
