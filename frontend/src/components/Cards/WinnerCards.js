import React from "react";

export default class WinnerCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.test();
  }

  test() {
    fetch(
      `https://ludus-db-dot-csc131.appspot.com/nominations/winner/${this.props.value
        .split(" ")
        .join("%20")}`
    )
      .then((res) => res.json())
      .then((data) => {
        let info = data.categoryList;
        this.setState({ info });
      })
      .catch(console.log);
  }

  getCards() {
    let htmlString = "";
    let nominationList = this.state.info;
    // console.log(nominationList);
    for (const property in nominationList) {
      let prop1 = nominationList[property];
      let prop2 = prop1.info;
      let id = prop1.nominationId;
      let category = prop2.category;
      let entity = prop2.entity;
      let year = prop2.year;
      let winner = prop2.winner;

      htmlString += `
					<div class="materialCard">
						<header>
							<h1>Document ID: ${id}</h1>
							<h2><small>Lorem ipsum dolor sit amet</small></h2>
						</header>
						<div class="cont">
							Category: ${category}
							<br />
							Entity: ${entity}
							<br />
							Year: ${year}
							<br />
							Winner: ${winner}
  					</div>
					</div>
				`;
    }
    return htmlString;
  }

  render() {
    let renderHtml = this.getCards();
    return <div dangerouslySetInnerHTML={{ __html: renderHtml }}></div>;
  }
}
