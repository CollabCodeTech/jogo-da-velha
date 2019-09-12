import React from "react";
import "./styles.css";

import TagGame from "../../objects/TagGame";

const HistoryGame = ({history, onClick}) => (
    <ol className="history-game">
        {history.map((content, key) =>(
            <li key={key} className="action" onClick={() => onClick(key)}>
                <TagGame content={content} />
            </li>
        ))}
        
    </ol>
);

export default HistoryGame;