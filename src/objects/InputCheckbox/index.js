import React from 'react';
import './styles.css';

import InputGame from '../InputGame';
import Label from '../Label';

const InputCheckbox = ({ id = "", value = "", content = "" }) => (
    <>
        <InputGame id={id} value={value} type="checkbox" content={content} />
        <Label htmlFor={id} content={content} />
    </>
)

export default InputCheckbox;