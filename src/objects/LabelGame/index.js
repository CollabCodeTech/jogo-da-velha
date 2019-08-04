import React from 'react';
import './styles.css';

const LabelGame = ({ htmlFor, content }) => (
    <label className="label-game" htmlFor={htmlFor}>{content}</label>
);

export default LabelGame;