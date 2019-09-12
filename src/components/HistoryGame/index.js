import React from "react";
import "./styles.css";

import TagGame from "../../objects/TagGame";

const changeHistory = () => console.log("Clicou!")

const HistoryGame = ({history}) => (
    <ol className="history-game">
        {history.map((content, key) =>(
            <li key={key} className="action" onClick={changeHistory}>
                <TagGame content={content} />
            </li>
        ))}
        
    </ol>
);

export default HistoryGame;