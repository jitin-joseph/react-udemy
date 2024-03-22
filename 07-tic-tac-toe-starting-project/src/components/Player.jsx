import { useState } from "react";

export default function Player({name, symbol}) {

    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(!isEditing);
    }

    let playername = <span className="player-name" >{name}</span>;
    let btnCaption = "Edit";

    if (isEditing) {
        playername = <input className="player-name" type="text"  value={name} />;
        btnCaption = "Save";
    }

    return (
        <li>
          <span className="player">
          {playername}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    );
}