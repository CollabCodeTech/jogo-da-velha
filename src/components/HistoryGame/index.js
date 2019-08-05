import React from "react";

import TagGame from "../../objects/TagGame";

const HistoryGame = () => (
    <ol className="history-game">
        <li className="action">
            <TagGame content="Adicinou X" />
        </li>
        <li className="action">
            <TagGame content="Adicinou O" />
        </li>
        <li className="action">
            <TagGame content="Adicinou X" />
        </li>
        <li className="action">
            <TagGame content="Adicinou X" />
        </li>
        <li className="action">
            <TagGame content="Adicinou O" />
        </li>
        <li className="action">
            <TagGame content="Adicinou X" />
        </li>
        <li className="action">
            <TagGame content="Adicinou X" />
        </li>
        <li className="action">
            <TagGame content="Adicinou X" />
        </li>
    </ol>
);

export default HistoryGame;