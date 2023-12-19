import React from "react";
import { useForm, FormProvider } from 'react-hook-form';
import styled from './styled.module.scss';
import CustomInput from "../../components/custom-input";
import Input, { schema } from '../../components/input'
import Checkbox from '../../components/checkbox'
import Button from '../../components/button'
import { Link } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

const SignUp = () => {
  const schema = yup.object().shape({
    email: yup.string()
      .email('Invalid email') 
      .required('Email is required'), 
    password: yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters long'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match') 
      .required('Confirm password is required')
  });
  
  const methods = useForm({ mode: 'onChange', resolver: yupResolver(schema) });
  const { handleSubmit, formState } = methods;
  const { isDirty, isValid, errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styled['container']}>
          <i className={styled['icon-title']}></i>
          <div className={styled['title']}>
            <h1>Create an Account</h1>
            <p>Sign up now to get started with an account.</p>
          </div>
          <div className={styled['form']}>
            <div className={styled['google-button']}>
              <i className={styled['google']}></i>
              <p>Sign up with Google</p>
            </div>
            <div className={styled['separator']}>
              <span>OR</span>
            </div>
            <CustomInput
              type='text'
              label='Full Name'
              name='fullName'
              required
            />
            <CustomInput
              type='email'
              label='Email Address'
              name='email'
              required
            />
            <Input
              type="password"
              label="Password"
              name='password'
              required
            />
            <Input
              type="password"
              label="Confirm Password"
              name='confirmPassword'
              requireConfirm required
            />
            <div className={styled['forgotPasswordLink']}>
              <Checkbox label="I have read and agree to the" />
              <a href="#">Terms of Service</a>
            </div>
            <Button
              type="submit"
            >
              Get Started
            </Button>
            <p>
              Already have an account?
              <Link to="/">Log in</Link>
            </p>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default SignUp;





