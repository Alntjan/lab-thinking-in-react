import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
  state = {
    filtered: this.props.products,
  };
  searchProducts = (e) => {
    const pattern = new RegExp(e.target.value, 'i');
    const filterProducts = this.props.products.filter((product) =>
      pattern.test(product.name)
    );
    if (e.target.value.length === 0) {
      this.setState({ filtered: this.props.products });
    } else {
      this.setState({ filtered: filterProducts });
    }
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar searchProducts={this.searchProducts} />
        <ProductTable products={this.state.filtered} />
      </div>
    );
  }
}
