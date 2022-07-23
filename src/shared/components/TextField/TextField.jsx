import { useMemo } from "react";
import PropTypes from 'prop-types';
import { nanoid } from "@reduxjs/toolkit";
import styles from './textField.module.css';


function TextField({label, name, value, handleChange, placeholder, required, type, pattern, title}) {

    const id = useMemo(() => nanoid(), []);

    return (
        <div className={styles.wrapper}>
            {label && <label className={styles.label} htmlFor={id}>{label}</label>}
            <input className={styles.input} id={id} name={name} value={value} onChange={handleChange} placeholder={placeholder} type={type} required={required} pattern={pattern} title={title} />
        </div>
    )
 };

export default TextField;

TextField.defaultProps = {
    required: false,
    type: 'text',
    handleChange: ()=>{},
}
TextField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.string,
    pattern: PropTypes.string,
    title: PropTypes.string,
}