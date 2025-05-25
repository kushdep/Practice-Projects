import { useState } from "react";
import "../index.css";
export default function Player({ playerName, playerSymbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [EditedName,SetName] = useState(playerName)
  function handleEditClick() {
    //using function it guarantee i am working with latest available state
    setIsEditing((edit) => !edit);
  }

  function handleChange(event){
    SetName(event.target.value)
  }

  let name = <span className="player-name">{EditedName}</span>;
  let buttonVar = "Edit";
  if (isEditing) {
    name = <input type="text" required value={EditedName} onChange={handleChange}/>;
    buttonVar = "Save";
  }

  return (
    <>
      <li>
        <span className="player">
          {name}
          <span className="player-symbol">{playerSymbol}</span>
        </span>
        <button onClick={handleEditClick}>{buttonVar}</button>
      </li>
    </>
  );
}
