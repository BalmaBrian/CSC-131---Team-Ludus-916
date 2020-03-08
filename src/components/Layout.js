import React from "react";
import Board from "./Board";

export default class Layout extends React.Component {
  render() {
    return (
      <center>
        <div className="board-area">
          <h1>This is the Layout</h1>
          <Board />
          <Board />
          <Board />
        </div>
      </center>
    );
  }
}
