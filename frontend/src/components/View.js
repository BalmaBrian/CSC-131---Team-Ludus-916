import React from "react";
import Cards from "./Cards";

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

  dropdownFields() {
    let data = ["Choose your field", "category", "winner", "year", "entity"];
    let htmlString = "";
    data.forEach((item, index) => {
      htmlString += `<option value="${item}">${item}</option>"`;
    });
    return htmlString;
  }

  dropdownInput() {
    // ! add stuff here
    let data = [];
    let htmlString = "";
    data.forEach((item, index) => {
      htmlString += `<option value="${item}">${item}</option>"`;
    });
    return htmlString;
  }

  // Change input to select where values are based on the diffrent values in the
  // diffrent options
  render() {
    // figure this out
    let renderHtml = this.dropdownFields();
    let renderHtml2 = this.dropdownInput();
    return (
      <div>
        <div class="row section1">
          <div class="col-md-12 main-navigation-con">
            <nav class="navbar main-navigation">
              <div class="container-fluid">
                <div class="navbar-header">
                  <button
                    type="button"
                    class="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#myNavbar"
                  >
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  {/* error here */}
                  <a class="navbar-brand" href="#">
                    Ludus 916
                  </a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                  <ul class="nav navbar-nav">
                    {/* error here from href */}
                    <li class="active">
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Api Documentation</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <h3>
                  Lorem Ipsum
                  <div>
                    <small>Lorem ipsum </small>
                  </div>
                </h3>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="signup-form">
                  <div>
                    <form onSubmit={this.handleSubmit}>
                      <label>
                        Choose the Document Field of Interest:
                        {/* dangerouslySetInnerHTML={{ __html: renderHtml }} */}
                        <select
                          class="custom-select"
                          value={this.state.area}
                          onChange={this.handleChangeSelect}
                          dangerouslySetInnerHTML={{ __html: renderHtml }}
                        ></select>
                      </label>
                      <br />
                      <label>
                        Choose the Information of Interest:
                        <select
                          class="custom-select"
                          value={this.state.value}
                          onChange={this.handleChangeInput}
                          dangerouslySetInnerHTML={{ __html: renderHtml2 }}
                        ></select>
                      </label>
                      <br />
                      <input type="submit" value="Submit" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Cards area={this.state.area} value={this.state.value} />
      </div>
    );
  }
}
