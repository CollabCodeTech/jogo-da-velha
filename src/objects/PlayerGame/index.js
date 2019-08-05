import React from 'react';
import './styles.css';
import playerX from '../../img/player-x.png';
import playerO from '../../img/player-o.png';

const handleClick = () => {
    console.log("Vamo que vamo!!!")
}

const PlayerGame = ({ player = false }) => {
    const players = [];
    players['x'] = playerX;
    players['o'] = playerO;

    return (
        <button onClick={handleClick} className="player-game">
            {player && <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`} />}
        </button>
    )
};

export default PlayerGame;