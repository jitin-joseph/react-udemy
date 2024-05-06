import { useState } from "react";

export default function Player({initialName, symbol,isActive}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name" >{playerName}</span>;
    let btnCaption = "Edit";

    if (isEditing) {
        editablePlayerName = <input className="player-name" type="text"  value={playerName}  onChange={handleChange}/>;
        btnCaption = "Save";
    }

    return (
        <li className={isActive ? 'active':undefined}>
          <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    );
}