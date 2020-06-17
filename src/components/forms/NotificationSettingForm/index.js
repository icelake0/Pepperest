import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AbstractInput } from 'components/forms';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { SpinnerIcon } from '../../vectors';
import { Alert } from 'components/blocks';

const NotificationSettingForm = (props) => {
    useEffect(() => {
        if(!state.updatedFormStateValuesWithProps) {
            updateFormStateValuesWithProps();
        }
    });
    const updateFormStateValuesWithProps = () => {
        if (props.userProfile) {
            Object.values(state.form).forEach(formElement => {
                state.form[formElement.elementConfig.id].value = props.userProfile.notificationSettings[formElement.elementConfig.id]
            })
            setState({...state, updatedFormStateValuesWithProps : true})
        }
    }
    const [state, setState] = useState({
        updatedFormStateValuesWithProps : false,
        loading: false,
        form: {
            accept_pay_via_bank: {
                elementConfig: {
                    name: 'accept_pay_via_bank',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'accept_pay_via_bank',
                    id: 'accept_pay_via_bank',
                },
                inputWithoutLabelType : 'checkbox',
                value: 0,
                validation: {
                    rules: {
                    },
                    errorMessage: null,
                },
            },
            send_trans_receipt_to_me: {
                elementConfig: {
                    name: 'send_trans_receipt_to_me',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'send_trans_receipt_to_me',
                    id: 'send_trans_receipt_to_me',
                },
                inputWithoutLabelType : 'checkbox',
                value: 0,
                validation: {
                    rules: {
                    },
                    errorMessage: null,
                },
            },
            send_trans_receipt_to_customer: {
                elementConfig: {
                    name: 'send_trans_receipt_to_customer',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'send_trans_receipt_to_customer',
                    id: 'send_trans_receipt_to_customer',
                },
                inputWithoutLabelType : 'checkbox',
                value: 0,
                validation: {
                    rules: {
                    },
                    errorMessage: null,
                },
            },
            request_invoice: {
                elementConfig: {
                    name: 'request_invoice',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'request_invoice',
                    id: 'request_invoice',
                },
                inputWithoutLabelType : 'checkbox',
                value: 0,
                validation: {
                    rules: {
                    },
                    errorMessage: null,
                },
            },
            receive_invoice: {
                elementConfig: {
                    name: 'receive_invoice',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'receive_invoice',
                    id: 'receive_invoice',
                },
                inputWithoutLabelType : 'checkbox',
                value: 0,
                validation: {
                    rules: {
                    },
                    errorMessage: null,
                },
            },
            due_payment: {
                elementConfig: {
                    name: 'due_payment',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'due_payment',
                    id: 'due_payment',
                },
                inputWithoutLabelType : 'checkbox',
                value: 0,
                validation: {
                    rules: {
                    },
                    errorMessage: null,
                },
            },
            due_delivery: {
                elementConfig: {
                    name: 'due_delivery',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'due_delivery',
                    id: 'due_delivery',
                },
                inputWithoutLabelType : 'checkbox',
                value: 0,
                validation: {
                    rules: {
                    },
                    errorMessage: null,
                },
            },
            send_transfer_receipt_to_customer: {
                elementConfig: {
                    name: 'send_transfer_receipt_to_customer',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'send_transfer_receipt_to_customer',
                    id: 'send_transfer_receipt_to_customer',
                },
                inputWithoutLabelType : 'checkbox',
                value: 0,
                validation: {
                    rules: {
                    },
                    errorMessage: null,
                },
            },
            confirm_transfer_before_sending: {
                elementConfig: {
                    name: 'confirm_transfer_before_sending',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'confirm_transfer_before_sending',
                    id: 'confirm_transfer_before_sending',
                },
                inputWithoutLabelType : 'checkbox',
                value: 0,
                validation: {
                    rules: {
                    },
                    errorMessage: null,
                },
            },
            send_all_payment_notification: {
                elementConfig: {
                    name: 'send_all_payment_notification',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'send_all_payment_notification',
                    id: 'send_all_payment_notification',
                },
                inputWithoutLabelType : 'checkbox',
                value: 0,
                validation: {
                    rules: {
                    },
                    errorMessage: null,
                },
            },
            send_all_fail_trans: {
                elementConfig: {
                    name: 'send_all_fail_trans',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'send_all_fail_trans',
                    id: 'send_all_fail_trans',
                },
                inputWithoutLabelType : 'checkbox',
                value: 0,
                validation: {
                    rules: {
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
        updatedFormElement.value = updatedFormElement.value === 0 ? 1 : 0 ;
        updatedForm[inputIdentifier] = updatedFormElement;
        setState({ ...state, form: updatedForm });
    }
    const notificationSettingUpdateHandler = () => {
        const payLoad = {
            accept_pay_via_bank: state.form.accept_pay_via_bank.value,
            send_trans_receipt_to_me: state.form.send_trans_receipt_to_me.value,
            send_trans_receipt_to_customer: state.form.send_trans_receipt_to_customer.value,
            request_invoice: state.form.request_invoice.value,
            receive_invoice: state.form.receive_invoice.value,
            due_payment: state.form.due_payment.value,
            due_delivery: state.form.due_delivery.value,
            send_transfer_receipt_to_customer: state.form.send_transfer_receipt_to_customer.value,
            confirm_transfer_before_sending: state.form.confirm_transfer_before_sending.value,
            send_all_payment_notification: state.form.send_all_payment_notification.value,
            send_all_fail_trans: state.form.send_all_fail_trans.value,
        }
        props.onUpdateNotificationSetting(payLoad, props.token, props.user)
    };

    return (
        <>
        <form className="nsForm auth-panel-form" onSubmit={handleSubmit(notificationSettingUpdateHandler)}>
            <div className="pcard">
                <div className="pcard-header">
                <h3 className="pcard-header__title">Notifications</h3>
                </div>
                <div className="pcard-body">
                <div className="notification-wrapper">
                    <div className="notification-item row">
                    <div className="col-12 col-md-3">
                        <h4 className="notification__list-item__title">Payment</h4>
                    </div>
                    <div className="col-12 col-md-9">
                        <ul className="notification__list">
                        <li className="notification__list-item">
                            <div className="input-control">
                            <AbstractInput
                                key={state.form.accept_pay_via_bank.elementConfig.name}
                                value={state.form.accept_pay_via_bank.value}
                                elementConfig={state.form.accept_pay_via_bank.elementConfig}
                                inputWithoutLabelType={state.form.accept_pay_via_bank.inputWithoutLabelType}
                                onChange={(event) => inputChangedHandler(event, state.form.accept_pay_via_bank.elementConfig.id)}
                                validation={register(state.form.accept_pay_via_bank.validation.rules)}
                                errorMessage={(errors[state.form.accept_pay_via_bank.elementConfig.name] && errors[state.form.accept_pay_via_bank.elementConfig.name].message) || state.form.accept_pay_via_bank.validation.errorMessage}
                                hasForgotPasswordLabel={state.form.accept_pay_via_bank.hasForgotPasswordLabel}
                            />
                            </div>
                            <p className="text--smaller">Accept payment via bank</p>
                        </li>
                        <li className="notification__list-item">
                            <div className="input-control">
                            <AbstractInput
                                key={state.form.send_trans_receipt_to_me.elementConfig.name}
                                value={state.form.send_trans_receipt_to_me.value}
                                elementConfig={state.form.send_trans_receipt_to_me.elementConfig}
                                inputWithoutLabelType={state.form.send_trans_receipt_to_me.inputWithoutLabelType}
                                onChange={(event) => inputChangedHandler(event, state.form.send_trans_receipt_to_me.elementConfig.id)}
                                validation={register(state.form.send_trans_receipt_to_me.validation.rules)}
                                errorMessage={(errors[state.form.send_trans_receipt_to_me.elementConfig.name] && errors[state.form.send_trans_receipt_to_me.elementConfig.name].message) || state.form.send_trans_receipt_to_me.validation.errorMessage}
                                hasForgotPasswordLabel={state.form.send_trans_receipt_to_me.hasForgotPasswordLabel}
                            />
                            </div>
                            <p className="text--smaller">Send transaction receipt to me</p>
                        </li>
                        <li className="notification__list-item">
                            <div className="input-control">
                            <AbstractInput
                                key={state.form.send_trans_receipt_to_customer.elementConfig.name}
                                value={state.form.send_trans_receipt_to_customer.value}
                                elementConfig={state.form.send_trans_receipt_to_customer.elementConfig}
                                inputWithoutLabelType={state.form.send_trans_receipt_to_customer.inputWithoutLabelType}
                                onChange={(event) => inputChangedHandler(event, state.form.send_trans_receipt_to_customer.elementConfig.id)}
                                validation={register(state.form.send_trans_receipt_to_customer.validation.rules)}
                                errorMessage={(errors[state.form.send_trans_receipt_to_customer.elementConfig.name] && errors[state.form.send_trans_receipt_to_customer.elementConfig.name].message) || state.form.send_trans_receipt_to_customer.validation.errorMessage}
                                hasForgotPasswordLabel={state.form.send_trans_receipt_to_customer.hasForgotPasswordLabel}
                            />
                            </div>
                            <p className="text--smaller">
                            Send transaction receipt to customer
                            </p>
                        </li>
                        <li className="notification__list-item">
                            <div className="input-control">
                            <AbstractInput
                                key={state.form.request_invoice.elementConfig.name}
                                value={state.form.request_invoice.value}
                                elementConfig={state.form.request_invoice.elementConfig}
                                inputWithoutLabelType={state.form.request_invoice.inputWithoutLabelType}
                                onChange={(event) => inputChangedHandler(event, state.form.request_invoice.elementConfig.id)}
                                validation={register(state.form.request_invoice.validation.rules)}
                                errorMessage={(errors[state.form.request_invoice.elementConfig.name] && errors[state.form.request_invoice.elementConfig.name].message) || state.form.request_invoice.validation.errorMessage}
                                hasForgotPasswordLabel={state.form.request_invoice.hasForgotPasswordLabel}
                            />
                            </div>
                            <p className="text--smaller">Request invoice from customer</p>
                        </li>
                        <li className="notification__list-item">
                            <div className="input-control">
                            <AbstractInput
                                key={state.form.receive_invoice.elementConfig.name}
                                value={state.form.receive_invoice.value}
                                elementConfig={state.form.receive_invoice.elementConfig}
                                inputWithoutLabelType={state.form.receive_invoice.inputWithoutLabelType}
                                onChange={(event) => inputChangedHandler(event, state.form.receive_invoice.elementConfig.id)}
                                validation={register(state.form.receive_invoice.validation.rules)}
                                errorMessage={(errors[state.form.receive_invoice.elementConfig.name] && errors[state.form.receive_invoice.elementConfig.name].message) || state.form.receive_invoice.validation.errorMessage}
                                hasForgotPasswordLabel={state.form.receive_invoice.hasForgotPasswordLabel}
                            />
                            </div>
                            <p className="text--smaller">Receive invoice from customer</p>
                        </li>
                        <li className="notification__list-item">
                            <div className="input-control">
                            <AbstractInput
                                key={state.form.due_payment.elementConfig.name}
                                value={state.form.due_payment.value}
                                elementConfig={state.form.due_payment.elementConfig}
                                inputWithoutLabelType={state.form.due_payment.inputWithoutLabelType}
                                onChange={(event) => inputChangedHandler(event, state.form.due_payment.elementConfig.id)}
                                validation={register(state.form.due_payment.validation.rules)}
                                errorMessage={(errors[state.form.due_payment.elementConfig.name] && errors[state.form.due_payment.elementConfig.name].message) || state.form.due_payment.validation.errorMessage}
                                hasForgotPasswordLabel={state.form.due_payment.hasForgotPasswordLabel}
                            />
                            </div>
                            <p className="text--smaller">Due payment</p>
                        </li>
                        <li className="notification__list-item">
                            <div className="input-control">
                            <AbstractInput
                                key={state.form.due_delivery.elementConfig.name}
                                value={state.form.due_delivery.value}
                                elementConfig={state.form.due_delivery.elementConfig}
                                inputWithoutLabelType={state.form.due_delivery.inputWithoutLabelType}
                                onChange={(event) => inputChangedHandler(event, state.form.due_delivery.elementConfig.id)}
                                validation={register(state.form.due_delivery.validation.rules)}
                                errorMessage={(errors[state.form.due_delivery.elementConfig.name] && errors[state.form.due_delivery.elementConfig.name].message) || state.form.due_delivery.validation.errorMessage}
                                hasForgotPasswordLabel={state.form.due_delivery.hasForgotPasswordLabel}
                            />
                            </div>
                            <p className="text--smaller">Due delivery</p>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="notification-item row">
                    <div className="col-12 col-md-3">
                        <h4 className="notification__list-item__title">Transfer</h4>
                    </div>
                    <div className="col-12 col-md-9">
                        <ul className="notification__list">
                        <li className="notification__list-item">
                            <div className="input-control">
                            <AbstractInput
                                key={state.form.send_transfer_receipt_to_customer.elementConfig.name}
                                value={state.form.send_transfer_receipt_to_customer.value}
                                elementConfig={state.form.send_transfer_receipt_to_customer.elementConfig}
                                inputWithoutLabelType={state.form.send_transfer_receipt_to_customer.inputWithoutLabelType}
                                onChange={(event) => inputChangedHandler(event, state.form.send_transfer_receipt_to_customer.elementConfig.id)}
                                validation={register(state.form.send_transfer_receipt_to_customer.validation.rules)}
                                errorMessage={(errors[state.form.send_transfer_receipt_to_customer.elementConfig.name] && errors[state.form.send_transfer_receipt_to_customer.elementConfig.name].message) || state.form.send_transfer_receipt_to_customer.validation.errorMessage}
                                hasForgotPasswordLabel={state.form.send_transfer_receipt_to_customer.hasForgotPasswordLabel}
                            />
                            </div>
                            <p className="text--smaller">
                            Send transaction receipt to customer
                            </p>
                        </li>
                        <li className="notification__list-item">
                            <div className="input-control">
                            <AbstractInput
                                key={state.form.confirm_transfer_before_sending.elementConfig.name}
                                value={state.form.confirm_transfer_before_sending.value}
                                elementConfig={state.form.confirm_transfer_before_sending.elementConfig}
                                inputWithoutLabelType={state.form.confirm_transfer_before_sending.inputWithoutLabelType}
                                onChange={(event) => inputChangedHandler(event, state.form.confirm_transfer_before_sending.elementConfig.id)}
                                validation={register(state.form.confirm_transfer_before_sending.validation.rules)}
                                errorMessage={(errors[state.form.confirm_transfer_before_sending.elementConfig.name] && errors[state.form.confirm_transfer_before_sending.elementConfig.name].message) || state.form.confirm_transfer_before_sending.validation.errorMessage}
                                hasForgotPasswordLabel={state.form.confirm_transfer_before_sending.hasForgotPasswordLabel}
                            />
                            </div>
                            <p className="text--smaller">
                            Confirm transaction before sending
                            </p>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="notification-item row">
                    <div className="col-12 col-md-3">
                        <h4 className="notification__list-item__title">Payout</h4>
                    </div>
                    <div className="col-12 col-md-9">
                        <ul className="notification__list">
                        <li className="notification__list-item">
                            <div className="input-control">
                            <AbstractInput
                                key={state.form.send_all_payment_notification.elementConfig.name}
                                value={state.form.send_all_payment_notification.value}
                                elementConfig={state.form.send_all_payment_notification.elementConfig}
                                inputWithoutLabelType={state.form.send_all_payment_notification.inputWithoutLabelType}
                                onChange={(event) => inputChangedHandler(event, state.form.send_all_payment_notification.elementConfig.id)}
                                validation={register(state.form.send_all_payment_notification.validation.rules)}
                                errorMessage={(errors[state.form.send_all_payment_notification.elementConfig.name] && errors[state.form.send_all_payment_notification.elementConfig.name].message) || state.form.send_all_payment_notification.validation.errorMessage}
                                hasForgotPasswordLabel={state.form.send_all_payment_notification.hasForgotPasswordLabel}
                            />
                            </div>
                            <p className="text--smaller">Send all payout notifications</p>
                        </li>
                        <li className="notification__list-item">
                            <div className="input-control">
                            <AbstractInput
                                key={state.form.send_all_fail_trans.elementConfig.name}
                                value={state.form.send_all_fail_trans.value}
                                elementConfig={state.form.send_all_fail_trans.elementConfig}
                                inputWithoutLabelType={state.form.send_all_fail_trans.inputWithoutLabelType}
                                onChange={(event) => inputChangedHandler(event, state.form.send_all_fail_trans.elementConfig.id)}
                                validation={register(state.form.send_all_fail_trans.validation.rules)}
                                errorMessage={(errors[state.form.send_all_fail_trans.elementConfig.name] && errors[state.form.send_all_fail_trans.elementConfig.name].message) || state.form.send_all_fail_trans.validation.errorMessage}
                                hasForgotPasswordLabel={state.form.send_all_fail_trans.hasForgotPasswordLabel}
                            />
                            </div>
                            <p className="text--smaller">Send all fail transactions</p>
                        </li>
                        </ul>
                    </div>
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
    onUpdateNotificationSetting: (payLoad, token, user) => dispatch(actions.updateNotificationSetting(payLoad, token, user)),
});

const mapStateToProps = state => {
    return {
      token: state.auth.token,
      user: state.auth.userInfo,
      userProfile: state.userAccount.userProfile,
      loading: state.userAccount.updatingNotificationSetting,
      error: state.userAccount.updateNotificationSettingError
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationSettingForm);
