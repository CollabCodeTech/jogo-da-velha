import React from 'react';
import './styles.css';
import CardGame from '../../objects/CardGame';
import PlayerGame from '../../objects/PlayerGame';

const HashtagGame = () => (
    <CardGame>
        <ul className="hashtag-game">
            <li className="item"><PlayerGame /></li>
            <li className="item"><PlayerGame /></li>
            <li className="item"><PlayerGame /></li>

            <li className="item"><PlayerGame /></li>
            <li className="item"><PlayerGame /></li>
            <li className="item"><PlayerGame /></li>

            <li className="item"><PlayerGame /></li>
            <li className="item"><PlayerGame /></li>
            <li className="item"><PlayerGame /></li>
        </ul>
    </CardGame>
);

export default HashtagGame;