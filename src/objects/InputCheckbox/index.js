import React from 'react';
import './styles.css';

import InputGame from '../InputGame';
import LabelGame from '../LabelGame';

const handleClick = () => {
    console.log("Vamo que vamo!!!")
}

const InputCheckbox = ({ id = "", value = "", content = "" }) => (
    <>
        <InputGame id={id} value={value} type="checkbox" content={content} />
        <LabelGame onClick={handleClick} htmlFor={id} content={content} />
    </>
)

export default InputCheckbox;