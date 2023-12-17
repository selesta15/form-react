import React from "react";
import { useForm, FormProvider } from 'react-hook-form';
import styled from './styled.module.scss';
import CustomInput from "../../components/custom-input";
import Input from '../../components/input'
import Checkbox from '../../components/checkbox'
import Button from '../../components/button'
import { Link } from 'react-router-dom';

const SignIn = () => {
    const methods = useForm({ mode: 'onChange' });
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
                        <h1>Log in to your Account</h1>
                        <p>Welcome back, please enter your details.</p>
                    </div>
                    <div className={styled['form']}>
                        <div className={styled['google-button']}>
                            <i className={styled['google']}></i>
                            <p>Continue with Google</p>
                        </div>
                        <div className={styled['separator']}>
                            <span>OR</span>
                        </div>
                        <CustomInput
                            type='email'
                            label='Email Address'
                            name='email'
                        />
                        <Input
                            type="password"
                            label="Password"
                            name='password'
                        />
                        <div className={styled['forgotPasswordLink']}>
                            <Checkbox label="Remember me" />
                            <a href="#">Forgot Password?</a>
                        </div>
                        <Button
                            type="submit"
                            isFormValid={isDirty && isValid && Object.keys(errors).length === 0}>
                            Get Started
                        </Button>
                        <p>
                            Don’t have an account?
                            <Link to="/sign-up">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}

export default SignIn;




