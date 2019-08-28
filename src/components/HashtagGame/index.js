import React, { useState } from 'react';
import './styles.css';
import CardGame from '../../objects/CardGame';
import PlayerGame from '../../objects/PlayerGame';

const HashtagGame = () => {
    const [nextPlayer, setNextPlayer] = useState("x");

    const handleClick = () => {
        console.log("Próximo Jogador", nextPlayer);

        setNextPlayer(old => old === "x" ? "o" : "x");
    };

    return (
        <CardGame>
            <ul className="hashtag-game" onClick={handleClick}>
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
    )
};

export default HashtagGame;