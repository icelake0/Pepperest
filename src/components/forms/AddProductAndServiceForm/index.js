import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AbstractInput } from 'components/forms';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { Alert } from 'components/blocks';
import {
    CloseIcon,
    SpinnerIcon,
} from 'components/vectors';
import { PepperestContext } from 'components/helpers/constant';
import EscapeCloseModalHelper from 'components/helpers/EscapeCloseModalHelper';

const AddProductAndServiceForm = (props) => {
    const [state, setState] = useState({
        loading: false,
        form: {
            productname: {
                elementConfig: {
                    name: 'productname',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'productname',
                    id: 'productname',
                },
                inputWithoutLabelType: 'text',
                value: '',
                validation: {
                    rules: {
                        required: 'Productname is required',
                    },
                    errorMessage: null,
                },
            },
            description: {
                elementConfig: {
                    name: 'description',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'description',
                    id: 'description',
                },
                inputWithoutLabelType: 'TextArea',
                value: '',
                validation: {
                    rules: {
                        required: 'Description is required',
                    },
                    errorMessage: null,
                },
            },
            link: {
                elementConfig: {
                    name: 'link',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'link',
                    id: 'link',
                },
                inputWithoutLabelType: 'TextArea',
                value: '',
                validation: {
                    rules: {
                        required: 'Link is required',
                    },
                    errorMessage: null,
                },
            },
            price: {
                elementConfig: {
                    name: 'price',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'price',
                    id: 'price',
                },
                inputWithoutLabelType: 'number',
                value: '',
                validation: {
                    rules: {
                        required: 'Amount is required',
                    },
                    errorMessage: null,
                },
            },
            currency: {
                elementConfig: {
                    name: 'currency',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'currency',
                    id: 'currency',
                    options : [
                        {
                            label : "Naira",
                            value : "NGN"
                        },
                        {
                            label : "US Dollars",
                            value : "USD"
                        }
                    ],
                },
                inputWithoutLabelType: 'SelectInputWithoutLabel',
                value: 'NGN',
                validation: {
                    rules: {
                        required: 'Currency is required',
                    },
                    errorMessage: null,
                },
            },
            deliveryperiod: {
                elementConfig: {
                    name: 'deliveryperiod',
                    type: 'inputWithoutLabel',
                    placeholder: '',
                    label: 'deliveryperiod',
                    id: 'deliveryperiod',
                },
                inputWithoutLabelType: 'number',
                value: '',
                validation: {
                    rules: {
                        required: 'Delivery Period is required',
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
    const addProductAndServiceHandler = () => {
        const payLoad = {
            productname : state.form.productname.value,
            description : state.form.description.value,
            link : state.form.link.value,
            price : state.form.price.value,
            currency : state.form.currency.value,
            deliveryperiod : state.form.deliveryperiod.value,
        }
        props.onAddProduct(props.token, props.user, payLoad)
    };

    return (
        <>
            <form className="nsForm auth-panel-form" onSubmit={handleSubmit(addProductAndServiceHandler)}>
            <div className="pModal">
                <div className="pModal-overlay" />
                <div className="pModal-content">
                    <div className="pModal-header">
                        <h6 className="text--small">Add Product / Service</h6>
                        <PepperestContext.Consumer>
                            {(context) => (
                                <div onClick={() => context.updateShowProductModal(false)}>
                                    <CloseIcon />
                                </div>
                            )}
                        </PepperestContext.Consumer>
                    </div>
                    <div className="pModal-sub__header row mx-0">
                        <div className="col-12 col-lg-6 px-0">
                            <div className="pModal-sub__header-half left">
                                <h6 className="text--smaller text--gray">Total Amount</h6>
                                <p className="text--smaller">NGN 0</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 px-0">
                            <div className="pModal-sub__header-half right">
                                <h6 className="text--smaller text--gray">Pepperest Fee</h6>
                                <p className="text--smaller">NGN 0</p>
                            </div>
                        </div>
                    </div>
                    <div className="pModal-main">
                        <div className="pModal-main__notification text--smallest">
                            A payment link would be created
                        </div>
                        <div className="pModal-form">
                            <div className="pModal-form-control row mx-0">
                                <div className="col-md-5">
                                    <div className="pModal-form__label-control">
                                        <label className="pModal-form__label">Product Name</label>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <AbstractInput
                                        key={state.form.productname.elementConfig.name}
                                        value={state.form.productname.value}
                                        elementConfig={state.form.productname.elementConfig}
                                        inputWithoutLabelType={state.form.productname.inputWithoutLabelType}
                                        onChange={(event) => inputChangedHandler(event, state.form.productname.elementConfig.id)}
                                        validation={register(state.form.productname.validation.rules)}
                                        errorMessage={(errors[state.form.productname.elementConfig.name] && errors[state.form.productname.elementConfig.name].message) || state.form.productname.validation.errorMessage}
                                        hasForgotPasswordLabel={state.form.productname.hasForgotPasswordLabel}
                                    />
                                </div>
                            </div>
                            <div className="pModal-form-control row mx-0">
                                <div className="col-md-5">
                                    <div className="pModal-form__label-control">
                                        <label className="pModal-form__label">
                                            Product Description
                                         </label>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <AbstractInput
                                        key={state.form.description.elementConfig.name}
                                        value={state.form.description.value}
                                        elementConfig={state.form.description.elementConfig}
                                        inputWithoutLabelType={state.form.description.inputWithoutLabelType}
                                        onChange={(event) => inputChangedHandler(event, state.form.description.elementConfig.id)}
                                        validation={register(state.form.description.validation.rules)}
                                        errorMessage={(errors[state.form.description.elementConfig.name] && errors[state.form.description.elementConfig.name].message) || state.form.description.validation.errorMessage}
                                        hasForgotPasswordLabel={state.form.description.hasForgotPasswordLabel}
                                    />
                                </div>
                            </div>
                            <div className="pModal-form-control row mx-0">
                                <div className="col-md-5">
                                    <div className="pModal-form__label-control">
                                        <label className="pModal-form__label">Amount</label>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <AbstractInput
                                        key={state.form.price.elementConfig.name}
                                        value={state.form.price.value}
                                        elementConfig={state.form.price.elementConfig}
                                        inputWithoutLabelType={state.form.price.inputWithoutLabelType}
                                        onChange={(event) => inputChangedHandler(event, state.form.price.elementConfig.id)}
                                        validation={register(state.form.price.validation.rules)}
                                        errorMessage={(errors[state.form.price.elementConfig.name] && errors[state.form.price.elementConfig.name].message) || state.form.price.validation.errorMessage}
                                        hasForgotPasswordLabel={state.form.price.hasForgotPasswordLabel}
                                    />
                                </div>
                            </div>
                            <div className="pModal-form-control row mx-0">
                                <div className="col-md-5">
                                    <div className="pModal-form__label-control">
                                        <label className="pModal-form__label">Currency</label>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <AbstractInput
                                        key={state.form.currency.elementConfig.name}
                                        value={state.form.currency.value}
                                        elementConfig={state.form.currency.elementConfig}
                                        inputWithoutLabelType={state.form.currency.inputWithoutLabelType}
                                        onChange={(event) => inputChangedHandler(event, state.form.currency.elementConfig.id)}
                                        validation={register(state.form.currency.validation.rules)}
                                        errorMessage={(errors[state.form.currency.elementConfig.name] && errors[state.form.currency.elementConfig.name].message) || state.form.currency.validation.errorMessage}
                                        hasForgotPasswordLabel={state.form.currency.hasForgotPasswordLabel}
                                    />
                                </div>
                            </div>
                            <div className="pModal-form-control row mx-0">
                                <div className="col-md-5">
                                    <div className="pModal-form__label-control">
                                        <label className="pModal-form__label">Link</label>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <AbstractInput
                                        key={state.form.link.elementConfig.name}
                                        value={state.form.link.value}
                                        elementConfig={state.form.link.elementConfig}
                                        inputWithoutLabelType={state.form.link.inputWithoutLabelType}
                                        onChange={(event) => inputChangedHandler(event, state.form.link.elementConfig.id)}
                                        validation={register(state.form.link.validation.rules)}
                                        errorMessage={(errors[state.form.link.elementConfig.name] && errors[state.form.link.elementConfig.name].message) || state.form.link.validation.errorMessage}
                                        hasForgotPasswordLabel={state.form.link.hasForgotPasswordLabel}
                                    />
                                </div>
                            </div>
                            <div className="pModal-form-control row mx-0">
                                <div className="col-md-5">
                                    <div className="pModal-form__label-control">
                                        <label className="pModal-form__label">
                                            Delivery Period
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <AbstractInput
                                        key={state.form.deliveryperiod.elementConfig.name}
                                        value={state.form.deliveryperiod.value}
                                        elementConfig={state.form.deliveryperiod.elementConfig}
                                        inputWithoutLabelType={state.form.deliveryperiod.inputWithoutLabelType}
                                        onChange={(event) => inputChangedHandler(event, state.form.deliveryperiod.elementConfig.id)}
                                        validation={register(state.form.deliveryperiod.validation.rules)}
                                        errorMessage={(errors[state.form.deliveryperiod.elementConfig.name] && errors[state.form.deliveryperiod.elementConfig.name].message) || state.form.deliveryperiod.validation.errorMessage}
                                        hasForgotPasswordLabel={state.form.deliveryperiod.hasForgotPasswordLabel}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pModal-footer">
                        <PepperestContext.Consumer>
                            {(context) => (
                                <div
                                    className="button button--auto button-md button--neutral"
                                    onClick={() => context.updateShowProductModal(false)}
                                >
                                    CANCEL
                  </div>
                            )}
                        </PepperestContext.Consumer>
                        {
                            props.loading ? <SpinnerIcon />
                            :  <button className="button button-md button--orange">Save Changes</button>
                        }
                    </div>
                </div>
            </div>
            </form>
            <EscapeCloseModalHelper />
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
    onAddProduct: (token, user, payLoad) => dispatch(actions.addProduct(token, user, payLoad)),
});

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        user: state.auth.userInfo,
        loading: state.products.addingProduct,
        error: state.products.addProductError
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProductAndServiceForm);
