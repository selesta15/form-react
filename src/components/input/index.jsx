import React from "react";
import { useFormContext } from "react-hook-form";
import { useState } from 'react';
import styled from './styled.module.scss';



const Input = ({ name, type, label, placeholder, requireConfirm = false, required }) => {
  const { register, formState: { errors, dirtyFields }, watch, control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const password = watch('password', ''); 
  const confirmPassword = watch('confirmPassword', '');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isError = errors[name];
  const isDirty = dirtyFields[name];

  return (
    <div className={`${styled['form']} ${isError ? styled['error'] : ''}`}>
      <label>
        {label}
        {required && <span className={styled['required-star']}>*</span>}
        </label>
      <div className={styled['input-container']}>
        <input
          name={name}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          {...register(name)}
    
        />
        <i className={styled['eye-icon']} onClick={togglePasswordVisibility}></i>
      </div>
      {isError && isDirty && (
        <span className={styled['error-message']}>
          {errors[name].message}
        </span>
      )}
      {requireConfirm && confirmPassword !== password && (
        <span className={styled['error-message']}/>
        
      )}
    </div>
  );
};

export default Input;













