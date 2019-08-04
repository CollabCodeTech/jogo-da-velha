import React from 'react';
import './styles.css';

const CardGame = ({ children }) => (
    <article className="card-game">
        {children}
    </article>
);

export default CardGame;