import React from "react";
import { Input as AntInput } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import styled from './styled.module.scss';

const CustomInput = ({ name, type, label, placeholder, required }) => {
  const { control } = useFormContext();

  return (
    <div className={styled['form']}>
      <label className={styled['label']} htmlFor={name}>
        {label}
        {required && <span className={styled['required-star']}>*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <AntInput
            className={styled['customAntInput']}
            type={type}
            id={name}
            placeholder={placeholder}
            {...field}
            required={required} 
          />
        )}
      />
    </div>
  );
};

export default CustomInput;
