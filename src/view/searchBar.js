import React from "react";
import "./css/searchYt.css";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }
  render() {
    return (
      <div className="search-bar">
        <div className="searchbarInput">
          <input
            placeholder="Search here..."
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
          />
        </div>
      </div>
    );
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}
