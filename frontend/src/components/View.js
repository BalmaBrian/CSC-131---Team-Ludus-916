import React from "react";
// import more componets

export default class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "home",
    };
  }

  handleCheck(e) {
    this.setState({
      display: e.currentTarget.dataset.id,
    });
  }

  render() {
    return (
      <div>
        <select name="category" id="select-input" class="select-input-field">
          {/* add more here accoring to category */}
          <option value="0">Choose your Oscar category</option>
        </select>
        <select name="field" id="select-field" class="select-document-field">
          {/* add more here accoring to field */}
          <option value="0">Choose your field</option>
          <option value="category">category</option>
          <option value="entity">entity</option>
          <option value="winner">winner</option>
          <option value="year">year</option>
        </select>
        <input type="text" id="input" name="value-input" />
        <button class="myButton" id="select-button">
          Search
        </button>
        <div>{/* add component here for displaying data */}</div>
      </div>
    );
  }
}
