import React, { useState } from 'react';
import './styles.css';
import CardGame from '../../objects/CardGame';
import PlayerGame from '../../objects/PlayerGame';

const HashtagGame = () => {
    const [nextPlayer, setNextPlayer] = useState("x");
    const [players, setPlayers] = useState([
        {id: 1, content: ''},
        {id: 2, content: ''},
        {id: 3, content: ''},
        {id: 4, content: ''},
        {id: 5, content: ''},
        {id: 6, content: ''},
        {id: 7, content: ''},
        {id: 8, content: ''},
        {id: 9, content: ''},
    ]);

    const handleClick = () => {
        console.log("Próximo Jogador", nextPlayer);

        setNextPlayer(old => old === "x" ? "o" : "x");
    };

    return (
        <CardGame>
            
            <ul className="hashtag-game" onClick={handleClick}>
                {players.map(player => <li className="item"><PlayerGame /></li>)}
            </ul>
        </CardGame>
    )
};

export default HashtagGame;