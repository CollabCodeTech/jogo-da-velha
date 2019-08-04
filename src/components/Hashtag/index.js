import React from 'react';
import './styles.css';
import CardGame from '../../objects/CardGame';
import PlayerGame from '../../objects/PlayerGame';

const Hashtag = () => (
    <CardGame>
        <ul className="hashtag">
            <li className="item"><PlayerGame player="o" /></li>
            <li className="item"><PlayerGame player="x" /></li>
            <li className="item"><PlayerGame player="x" /></li>

            <li className="item"><PlayerGame player="o" /></li>
            <li className="item"><PlayerGame player="x" /></li>
            <li className="item"><PlayerGame player="o" /></li>

            <li className="item"><PlayerGame player="x" /></li>
            <li className="item"><PlayerGame player="o" /></li>
            <li className="item"><PlayerGame player="x" /></li>
        </ul>
    </CardGame>
);

export default Hashtag;