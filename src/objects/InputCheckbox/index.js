import React from 'react';
import './styles.css';

import InputGame from '../InputGame';
import LabelGame from '../LabelGame';

const InputCheckbox = ({ id = "", value = "", content = "" }) => (
    <>
        <InputGame id={id} value={value} type="checkbox" content={content} />
        <LabelGame htmlFor={id} content={content} />
    </>
)

export default InputCheckbox;