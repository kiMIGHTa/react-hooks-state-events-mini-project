import React from "react";

function Task({text , category, deletesTask}) {

  
  return (
    <li className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deletesTask}>X</button>
    </li>
  );
}


export default Task;
