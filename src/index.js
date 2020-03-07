import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Board extends React.Component {
  render() {
    return (
      <div className="movie-board">
        <CardCollection />
      </div>
    );
  }
}

class CardCollection extends React.Componet {
  constructor(props) {
    super(props);
    this.state = {};
  }
}

class Card extends React.Component {}

// ========================================
ReactDOM.render(<Board />, document.getElementById("root"));
