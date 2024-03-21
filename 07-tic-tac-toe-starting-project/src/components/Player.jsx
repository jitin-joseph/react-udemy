import { useState } from "react";

export default function Player({name, symbol}) {

    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(true);
    }

    let playername = <span className="player-name" >{name}</span>;

    if (isEditing) {
        playername = <input className="player-name" type="text"  />;
    }

    return (
        <li>
          <span className="player">
          {playername}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>Edit</button>
        </li>
    );
}