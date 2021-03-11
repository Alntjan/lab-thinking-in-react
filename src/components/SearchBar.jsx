import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            name="searchBar"
            type="text"
            placeholder="search for products"
            onChange={this.props.searchProducts}
          ></input>
        </form>
      </div>
    );
  }
}
