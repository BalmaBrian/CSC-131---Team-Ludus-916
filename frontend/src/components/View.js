import React from "react";
import Cards from "./Cards/Cards";

export default class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      area: "",
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInput(event) {
    this.setState({ value: event.target.value });
  }

  handleChangeSelect(event) {
    this.setState({ area: event.target.value });
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value); // Make better alert
    this.setState({
      value: this.state.value,
      area: this.state.area,
    });
    event.preventDefault();
  }

  // Change input to select where values are based on the diffrent values in the
  // diffrent options
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Choose search area:
            <select value={this.state.area} onChange={this.handleChangeSelect}>
              <option value="">Choose your field</option>
              <option value="category">category</option>
              <option value="entity">entity</option>
              <option value="winner">winner</option>
              <option value="year">year</option>
            </select>
          </label>
          <br />
          <label>
            Search:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChangeInput}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Cards area={this.state.area} value={this.state.value} />
      </div>
    );
  }
}
