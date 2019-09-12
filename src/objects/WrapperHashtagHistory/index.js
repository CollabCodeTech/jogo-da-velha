import React, {useState} from 'react';

import InputCheckbox from '../InputCheckbox';
import HashtagGame from '../../components/HashtagGame';
import HistoryGame from '../../components/HistoryGame';

const WrapperHashtagHistory = () => {
    const [history, setHistory] = useState(["Start"]);
    const [active, setActive] = useState(false);
    const [lastRound, setLastRound] = useState(0);
    const [nextPlayer, setNextPlayer] = useState("x");
    const [historyGame, setHistoryGame] = useState([
        {
            round: 0,
            state: [
                {id: 1, content: ''},
                {id: 2, content: ''},
                {id: 3, content: ''},
                {id: 4, content: ''},
                {id: 5, content: ''},
                {id: 6, content: ''},
                {id: 7, content: ''},
                {id: 8, content: ''},
                {id: 9, content: ''},
            ]
        }
    ])

    const addHistory = player => setHistory(old => [...old, `Adicinou ${player.toUpperCase()}`]);

    const showHideHistory = () => setActive(old => !!!old);

    const changeHistory = key => {
        setLastRound(key);
        setHistory(old => old.slice(0, key+1));
        setHistoryGame(old => old.slice(0, key+1));
    };

    const handleClick = (id) => {
        setHistoryGame(old => [...old, {
            round: lastRound + 1,
            state: old[lastRound].state.map(player => player.id === id ? {id, content: nextPlayer} : player)
        }]);
        setLastRound(old => old + 1);
        addHistory(nextPlayer);

        setNextPlayer(old => old === "x" ? "o" : "x");
    };

    return (
        <div className={`wrapper-hashtagHistory ${active && '-active'}`}>
            <HashtagGame lastRound={lastRound} historyGame={historyGame} onClick={handleClick} />
            <InputCheckbox onClick={showHideHistory} id="show" value="show" type="checkbox" content="Mostrar eventos" />

            <HistoryGame history={history} onClick={changeHistory} />
        </div>
    );
}

export default WrapperHashtagHistory;