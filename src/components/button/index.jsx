import React from "react";
import { useFormContext } from "react-hook-form";
import styles from './styled.module.scss';

const Button = ({ children, onClick, type = 'button' }) => {
    const { formState: { isDirty, isValid } } = useFormContext();

    const buttonDisabled = !isDirty || !isValid;

    const buttonClasses = `${styles.button} ${buttonDisabled ? styles.disabled : ''}`;

    return (
        <button
            onClick={onClick}
            type={type}
            className={buttonClasses.trim()}
            disabled={buttonDisabled}
        >
            {children}
        </button>
    );
};

export default Button;


