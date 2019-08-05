import React from 'react';
import './styles.css';

const IconClose = ({ onClick }) => (
    <a href="#main" className="icon-close" onClick={onClick}>
        <span className="content">Fechar</span>
    </a>
);

export default IconClose;