import React from "react";
import Card from "./Card";

export default class Board extends React.Component {
  render() {
    return (
      <div className="collection-area">
        <h2>This is a Board</h2>
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
