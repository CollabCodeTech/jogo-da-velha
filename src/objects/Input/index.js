import React from 'react';

import Label from '../Label';

const Input = ({ id, value, content }) => (
    <>
        <input id={id} type="checkbox" value={value} />
        <Label htmlFor={id} content={content} />
    </>
);

export default Input