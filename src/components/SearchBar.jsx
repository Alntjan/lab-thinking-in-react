import React, {Component} from 'react';

class SearchBar extends Component {

  handleChange = (e) => {
    const {value, name, checked} = e.target
    if (name === 'stock') {
      this.props.stockFilter(checked)
    } else {
      this.props.searchQuery(value)
    }
  }

  render() { 
    return <div className='search-bar-container'>
    <label>Search</label>
    <input className='search-input' type='text' name='search' onChange={this.handleChange}></input>
    <span><input type='checkbox' id='stock' name='stock' value='' onChange={this.handleChange}/> <label htmlFor='stock'>Only show products on stock</label></span>
  </div>
  }
}

export default SearchBar;