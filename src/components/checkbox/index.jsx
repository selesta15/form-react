import React from "react";
import { useFormContext } from 'react-hook-form';
import styled from './styled.module.scss';

const Checkbox = ({ label }) => {
  const { register } = useFormContext();

  return (
    <div className={styled['checkbox']}>
      <label>
        <input
          type="checkbox"
          {...register(label, { required: `${label} is required` })} 
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;

