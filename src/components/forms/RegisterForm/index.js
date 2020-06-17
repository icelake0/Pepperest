import React, { useState } from 'react';
import {  Button } from 'components/blocks';
import { useForm } from 'react-hook-form';
import { AbstractInput } from 'components/forms'
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { SpinnerIcon } from '../../vectors';

const RegisterForm = (props) => {
  const [state, setState] = useState({
    loading : false,
    registerForm : {
    accountType: {
        elementConfig: {
            name : "accountType",
            type : "select",
            placeholder : "Select an account type",
            label : "Choose a Pepperest Account",
            id : "accountType",
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
        value: '',
        validation: {
            rules : {
                required: "Account type is required",
            },
            errorMessage : null
        }
    },
    name: {
        elementConfig: {
            name : "name",
            type : "text",
            placeholder : "Your Personal Name",
            label : "Personal Name",
            id : "name"
        },
        value: '',
        validation: {
            rules : {
                required: "Personal Name is required",
            },
            errorMessage : null
        }
    },
    businessName: {
        elementConfig: {
          name : "businessName",
          type : "text",
          placeholder : "Your Business Name",
          label : "Business Name",
          id : "businessName"
        },
        value: '',
        validation: {
            rules : {
              required: "Personal / Business Name is required",
            },
            errorMessage : null
        }
      },
      email: {
        elementConfig: {
          name : "email",
          type : "email",
          placeholder : "Your Personal / Business Email",
          label : "Personal / Business Email",
          id : "email"
        },
        value: '',
        validation: {
            rules : {
              required: "Must be a valid email address",
            },
            errorMessage : null
        }
      },
      password: {
        elementConfig: {
          name : "password",
          type : "password",
          placeholder : "Strong password",
          label : "Password",
          id : "password"
        },
        value: '',
        validation: {
            rules : {
              required: "Password is required"
            },
            errorMessage : null
        }
      },
    }
  });

  const { register, handleSubmit, errors } = useForm(); 

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedRegisterForm= {
        ...state.registerForm
    };
    const updatedFormElement = { 
        ...updatedRegisterForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedRegisterForm[inputIdentifier] = updatedFormElement;
    setState({...state, registerForm: updatedRegisterForm});
  }
  const registerHandler = () => {
    setState( { ...state, loading: true } );
    const payLoad = {
        name: state.registerForm.name.value,
        accountType : state.registerForm.accountType.value,
        businessName : state.registerForm.businessName.value,
        email : state.registerForm.email.value,
        password : state.registerForm.password.value
    }
    props.onRegister(payLoad);
  }

  return (
    <>
     <form className="nsForm" onSubmit={handleSubmit(registerHandler)}>
            {Object.values(state.registerForm).map(formInput =>
                <AbstractInput 
                    key = {formInput.elementConfig.name}
                    value = {formInput.value}
                    elementConfig = {formInput.elementConfig}
                    onChange= {(event) => inputChangedHandler(event, formInput.elementConfig.name)}
                    validation={register(formInput.validation.rules)}
                    errorMessage={(errors[formInput.elementConfig.name] && errors[formInput.elementConfig.name].message) || props.errors[formInput.elementConfig.name]}
                />
            )}
            <Button
              type="submit"
              value={props.loading ? <SpinnerIcon /> : "CREATE ACCOUNT"}
              dispatch = {props.loading}
              name="sign_up"
              handleClick={() => {}}
            />
         </form>
    </>
  )
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        errors: state.auth.errors,
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        onRegister: ( payLoad ) => dispatch( actions.register( payLoad ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( RegisterForm );
