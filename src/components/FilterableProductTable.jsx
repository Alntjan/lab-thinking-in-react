import React, {Component} from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {

  state = {
    products: this.props.products,
    filterProducts: this.props.products
  }

  searchProducts = (searchString) => {
    const pattern = new RegExp(searchString, 'i');
    const filterProducts = this.state.products.filter(product => pattern.test(product.name) );
    console.log(filterProducts)
    if(searchString === '') {
      this.setState({filterProducts: [...this.state.products]})
    } else {
      this.setState({filterProducts: filterProducts})
    }
    }

    stockFilter = (checked) => {
      const filterProducts = this.state.products.filter(product => product.stocked)
      if(checked) {
        this.setState({filterProducts: filterProducts})
      } else {
        this.setState({filterProducts: [...this.state.products]})
      }
    }

  render() { return <div className='filtered-product-table'>
      <h1>IronStore</h1>
      <SearchBar searchQuery={this.searchProducts} stockFilter={this.stockFilter}/>
      <ProductTable products={this.state.filterProducts}/>
      {this.state.filterProducts.length === 0 && <h4>No matches for your search :(</h4>}
  </div>
  }
}

export default FilterableProductTable;
