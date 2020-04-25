import React from "react";
import CategoryCards from "./CategoryCards";
import EntityCards from "./EntityCards";
import WinnerCards from "./WinnerCards";
import YearCards from "./YearCards";
import DefaultCards from "./DefaultCards";

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
