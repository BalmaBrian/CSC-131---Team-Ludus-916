import React from "react";
import CategoryCards from "./Cards/CategoryCards";
import EntityCards from "./Cards/EntityCards";
import WinnerCards from "./Cards/WinnerCards";
import YearCards from "./Cards/YearCards";
import DefaultCards from "./Cards/DefaultCards";

export default class Cards extends React.Component {
  getContent() {
    switch (this.props.area) {
      case "category":
        return <CategoryCards value={this.props.value} />;

      case "entity":
        return <EntityCards value={this.props.value} />;

      case "year":
        return <YearCards value={this.props.value} />;

      case "winner":
        return <WinnerCards value={this.props.value} />;

      default:
        return <DefaultCards value={this.props.value} />;
    }
  }

  render() {
    return this.getContent();
  }
}
