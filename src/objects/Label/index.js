import React from 'react';
import './styles.css';

const Label = ({ htmlFor, content }) => (
    <label className="label" htmlFor={htmlFor}>{content}</label>
);

export default Label;