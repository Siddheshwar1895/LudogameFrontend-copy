import React from 'react';
import './Board.css';

function Board() {
  return (
    <div className="board">
      <div className="zone red">Red Zone</div>
      <div className="zone green">Green Zone</div>
      <div className="zone yellow">Yellow Zone</div>
      <div className="zone blue">Blue Zone</div>
      <div className="zone center">Center</div>
    </div>
  );
}

export default Board;
