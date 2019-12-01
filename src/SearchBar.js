import React from "react";
import "./search-bar.css";

class Searchbar extends React.Component {
  state = { textValue: "" };

  onSearchChange = event => {
    this.setState({ textValue: event.target.value });
  };

  onSearchSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.textValue);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSearchSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.textValue}
              onChange={this.onSearchChange}
              placeholder="Search"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
